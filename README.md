# Todo Web App FullStack TypeScript

Simple Todo Web Appliction 

- front-end - [Next.js](https://nextjs.org)
- back-end - [Nest.js](https://nestjs.com)
- database - [mongodb](https://www.mongodb.com/)

## :cloud: Installation

```bash
git clone https://github.com/kimiiz55/todo-web-app-nx-ts

cd todo-web-app-nx-ts

npm i

```

## Running the app

```bash
# Running Front-End
npm run start web

# Running Back-End
npm run start api

# Running parallel Front-End and Back-End
npm run nx -- run-many --target=serve --projects=api,web --parallel --maxParallel=2
```

## Unit Test

```bash
# testing Front-End
npm run test web

# testing Back-End
npm run test api

# Parallel testing
npm run nx -- run-many --target=test --projects=api,web --parallel --maxParallel=2
```


## E2E Testing

```bash

# start Back-End first
npm run start api

# Running Front-End E2e with Cypress
npm run e2e web-e2e

```


## Features

- Create a task
- Mark as completed
- Delete a task
- Undo a task
