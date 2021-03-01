# Front-end Test React

## Introduction

This code test involves the creation of a working React app using a 3rd party API.
The goal is create a simple Reddit client that shows the top 50 entries from Reddit - www.reddit.com/top

## Getting Stated

- Run in project root `yarn` or `npm install`.
- Run `yarn start` or `npm start`.


## Getting Stated with docker

### Note: This method is not in charge to build frontend app, you should build it locally:

- Run `npm run build`.
- Run `docker build -t fe:latest .`.
- Run `docker run -d --name fe fe`.

## Testing

- Run `yarn test` or `npm run test` if you need test watching.
- Run `yarn test:coverage` or `npm run test:coverage` to run tests and get a coverage report.
- To see coverage report you can open with your browser the file `/coverage/lcov-report/index.html` after running previous command.

## Storybook

- Run `yarn storybook` or `npm run storybook`.