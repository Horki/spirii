# spirii
Spirii backend code challange

## Description

Write two services

## Transaction API (port 3001)
- Simulation of bank, with activities such as spent, earned and payout!

## Aggregate API (port 3000) including cron job
- Aggregate amount by activity type from transaction API
- Use CRON job for scraping data every 12 seconds

## Project setup

```bash
$ nvm install # install v23.1.0
$ nvm use
$ pnpm install
```

## Compile and run the project

### Transactions
```bash
# Start Transactions
$ pnpm run start:dev transactions
# Test endpoint
$ curl -v -H "Accept: application/json" "http://localhost:3001/transactions?startDate=2023-02-01&endDate=2023-02-01"
```

### Aggregate
```bash
# Note! This service runs an API call to transaction 5 times in a minute
# Start aggregate
$ pnpm run start:dev
# Test endpoint
$ curl -v -H "Accept: application/json" "http://localhost:3000/aggregates?userId=3436294887003578"
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
