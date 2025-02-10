# spirii
Spirii backend code challange

## Description

Spirii backend code challange

## Project setup

```bash
$ nvm install # install v23.1.0
$ nvm use
$ pnpm install
```

## Compile and run the project

```bash
# Start Transactions
$ pnpm run start:dev transactions
# Test endpoint
$ curl -v -H "Accept: application/json" "http://localhost:3001/transactions?startDate=2023-02-01&endDate=2023-02-01"
```

## Run format, lint, tests

```bash
# format
$ pnpm format
# linter
$ pnpm lint
# unit tests
$ pnpm test
```
