#![allow(clippy::missing_errors_doc)]
#![allow(clippy::unnecessary_struct_initialization)]
#![allow(clippy::unused_async)]
use loco_rs::prelude::*;

use serde::{Deserialize, Serialize};

use crate::models::_entities::cookbooks::{ActiveModel, Entity, Model};
use crate::models::_entities::users;

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Params {
    pub title: String,
}

impl Params {
    fn update(&self, item: &mut ActiveModel) {
        item.title = Set(self.title.clone());
    }
}

async fn load_item(ctx: &AppContext, id: i32) -> Result<Model> {
    let item = Entity::find_by_id(id).one(&ctx.db).await?;
    item.ok_or_else(|| Error::NotFound)
}

pub async fn list(auth: auth::JWT, State(ctx): State<AppContext>) -> Result<Json<Vec<Model>>> {
    let user = users::Model::find_by_pid(&ctx.db, &auth.claims.pid).await?;

    let cookbooks_of_user = user.find_related(Entity).all(&ctx.db).await?;

    format::json(cookbooks_of_user)
}

pub async fn add(
    auth: auth::JWT,
    State(ctx): State<AppContext>,
    Json(params): Json<Params>,
) -> Result<Json<Model>> {
    let user = users::Model::find_by_pid(&ctx.db, &auth.claims.pid).await?;
    let mut item = ActiveModel {
        ..Default::default()
    };
    item.user_id = Set(user.id);
    params.update(&mut item);
    let item = item.insert(&ctx.db).await?;
    format::json(item)
}

pub async fn update(
    auth: auth::JWT,
    Path(id): Path<i32>,
    State(ctx): State<AppContext>,
    Json(params): Json<Params>,
) -> Result<Json<Model>> {
    let user = users::Model::find_by_pid(&ctx.db, &auth.claims.pid).await?;
    let item = load_item(&ctx, id).await?;
    if user.id != item.user_id {
        return Err(Error::NotFound);
    }
    let mut item = item.into_active_model();
    params.update(&mut item);
    let item = item.update(&ctx.db).await?;
    format::json(item)
}

pub async fn remove(
    auth: auth::JWT,
    Path(id): Path<i32>,
    State(ctx): State<AppContext>,
) -> Result<()> {
    let user = users::Model::find_by_pid(&ctx.db, &auth.claims.pid).await?;
    let item = load_item(&ctx, id).await?;
    if user.id != item.user_id {
        return Err(Error::NotFound);
    }
    item.delete(&ctx.db).await?;
    format::empty()
}

pub async fn get_one(
    auth: auth::JWT,
    Path(id): Path<i32>,
    State(ctx): State<AppContext>,
) -> Result<Json<Model>> {
    let user = users::Model::find_by_pid(&ctx.db, &auth.claims.pid).await?;
    let item = load_item(&ctx, id).await?;
    if user.id != item.user_id {
        return Err(Error::NotFound);
    }

    format::json(item)
}

pub fn routes() -> Routes {
    Routes::new()
        .prefix("cookbooks")
        .add("/", get(list))
        .add("/", post(add))
        .add("/:id", get(get_one))
        .add("/:id", delete(remove))
        .add("/:id", post(update))
}
