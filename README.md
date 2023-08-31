# service-node

A node.js service.

## Table of contents

- [Features](https://github.com/eremt/service-node#features)
- [Setup](https://github.com/eremt/service-node#setup)
- [Develop](https://github.com/eremt/service-node#develop)
  - [`podman-compose` and `docker-compose`](https://github.com/eremt/service-node#podman-compose-and-docker-compose)
- [Test](https://github.com/eremt/service-node#test)
- [Deploy](https://github.com/eremt/service-node#deploy)

## Features

- TypeScript
- Tests

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

## Test

Run the test suite with:
```
npm run test
```

## Deploy

TODO
