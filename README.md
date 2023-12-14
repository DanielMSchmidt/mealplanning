# Mealplanning

Loco is a web and API framework running on Rust.

This is the **SaaS starter** which includes a `User` model and authentication based on JWT.

## Quick Start

You need:

* A local postgres instance
* A local Redis instance

Check out your development [configuration](config/development.yaml).

> To configure a database , please run a local postgres database with <code>loco:loco</code> and a db named <code>loco_app</code>: 
<code>docker run -d -p 5432:5432 -e POSTGRES_USER=loco -e POSTGRES_DB=loco_app -e POSTGRES_PASSWORD="loco" postgres:15.3-alpine</code>

Start your app: `cargo loco start`

## License

MIT
