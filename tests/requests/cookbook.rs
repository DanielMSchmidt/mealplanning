use insta::assert_debug_snapshot;
use loco_rs::testing;
use mealplanning::app::App;
use migration::Migrator;
use serial_test::serial;

macro_rules! configure_insta {
    ($($expr:expr),*) => {
        let mut settings = insta::Settings::clone_current();
        settings.set_prepend_module_to_snapshot(false);
        settings.set_snapshot_suffix("auth_request");
        let _guard = settings.bind_to_scope();
    };
}

#[tokio::test]
#[serial]
async fn can_not_post_without_auth() {
    testing::request::<App, Migrator, _, _>(|request, _ctx| async move {
        let payload = serde_json::json!({
            "title": "My Cookbook",
        });

        let res = request.post("/cookbook").json(&payload).await;
        assert_eq!(res.status_code(), 404);
    })
    .await;
}

#[tokio::test]
#[serial]
async fn cannot_list_cookbooks_without_auth() {
    testing::request::<App, Migrator, _, _>(|request, _ctx| async move {
        let res = request.get("/cookbook/").await;
        assert_eq!(res.status_code(), 404);
    })
    .await;
}

#[tokio::test]
#[serial]
async fn can_request_list() {
    configure_insta!();
    testing::request::<App, Migrator, _, _>(|request, ctx| async move {
        let user = super::prepare_data::init_user_login(&request, &ctx).await;

        let (auth_key, auth_value) = super::prepare_data::auth_header(&user.token);
        let res = request
            .get("/cookbook/")
            .add_header(auth_key, auth_value)
            .await;

        assert_eq!(res.status_code(), 200);
        assert_debug_snapshot!((res.status_code(), res.text()));
    })
    .await;
}
