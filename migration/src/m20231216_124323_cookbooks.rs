use std::borrow::BorrowMut;

use loco_rs::schema::*;
use sea_orm_migration::prelude::*;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                table_auto(Cookbooks::Table)
                    .col(pk_auto(Cookbooks::Id).borrow_mut())
                    .col(string(Cookbooks::Title).borrow_mut())
                    .col(integer(Cookbooks::UserId).borrow_mut())
                    .foreign_key(
                        ForeignKey::create()
                            .name("fk-cookbooks-users")
                            .from(Cookbooks::Table, Cookbooks::UserId)
                            .to(Users::Table, Users::Id)
                            .on_delete(ForeignKeyAction::Cascade)
                            .on_update(ForeignKeyAction::Cascade),
                    )
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Cookbooks::Table).to_owned())
            .await
    }
}

#[derive(DeriveIden)]
enum Cookbooks {
    Table,
    Id,
    Title,
    UserId,
    
}


#[derive(DeriveIden)]
enum Users {
    Table,
    Id,
}
