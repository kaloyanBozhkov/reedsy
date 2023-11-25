# reedsy

## Live at:

```
https://brilliant-queijadas-7c19dc.netlify.app/
```

## To install dependencies:

```bash
bun install
```

## Setup DB:

To create database:

```
docker build -t reedsy-db .
docker run --name reedsy-db -d -p 3308:3306 reedsy-db
docker exec -it reedsy-db mysql -u root -p
CREATE DATABASE reedsy

```

And update the DATABASE_URL in .env:

```
DATABASE_URL=
```

To push the prisma db schema:

```
bun x prisma db push
```

To seed the db with books data:

```
bun x prisma db seed
```

## To run:

```bash
bun dev:server
bun dev:client

or

bun dev:both
```
