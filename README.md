# service-node

A node.js service.

## Table of contents

- [Features](https://github.com/eremt/service-node#features)
- [Setup](https://github.com/eremt/service-node#setup)
- [Develop](https://github.com/eremt/service-node#develop)
  - [`podman-compose` and `docker-compose`](https://github.com/eremt/service-node#podman-compose-and-docker-compose)
- [Test](https://github.com/eremt/service-node#test)
  - [Unit tests](https://github.com/eremt/service-node#unit-tests)
  - [Integration tests](https://github.com/eremt/service-node#integration-tests)
- [Deploy](https://github.com/eremt/service-node#deploy)

## Features

- TypeScript
- Tests
  - Unit tests with `jest`
- OpenAPI documentation generated from inline JSDoc

## Setup

Clone the repository:
```
git clone https://github.com/eremt/service-node
```

Copy `.env.example` to create the `.env` file:
```
cp .env.example .env
```

Replace all instances of `service-node` with `my-project` in all files:
```
sed -i s/service-node/my-project/g **/*
```

## Develop

### `podman-compose` and `docker-compose`

The `compose.yml` file contains everything required for development.

To start the development environment run:
```
podman-compose up
```
This will start the server with `nodemon` watching for changes.

OpenAPI documentation will be availiable on [http://0.0.0.0:5000/documentation](http://0.0.0.0:5000/documentation).

## Test

Run both unit and integration tests with:
```
npm run test
```

### Unit tests

Unit tests are implemented with [`jest`](https://jestjs.io/).

Run all unit tests with:
```
npm run test:unit
```

To test a single suite in a file called `example.service.test.ts` run:
```
npm run test:unit -t example.service
```

### Integration tests

TODO

## Deploy

TODO
