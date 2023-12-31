FROM rust:1.74-slim

WORKDIR /usr/src/

COPY . .

RUN cargo build --release

ENTRYPOINT ["./target/release/mealplanning-cli", "start"]