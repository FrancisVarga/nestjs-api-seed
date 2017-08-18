<div align="center">
  <img
    src="http://kamilmysliwiec.com/public/nest-logo.png">
  <a href="https://github.com/easymetrics">
    <img width="200" height="200" vspace="" hspace="25"
      src="https://cdn.worldvectorlogo.com/logos/easymetrics-inc.svg">
  </a>
  <h1>NestJS API Starter</h1>
  <p>Base project for NestJS Microservices.<p>
</div>

### Prerequisites
* Docker for OSX or Windows
* [NVM](https://github.com/creationix/nvm) ( Node version manager ) - Do not user brew for nodejs
* Node v8 or higher and npm 5 or higher.
* Editor - VSCode / Atom / Webstorm / Sublime ( In that Order ).
* [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) for manually testing restful APIs

### Continuous Integration & Deployment
_Note: The CI/CD setup if very specific EasyMetrics_

- The CircleCI / Docker configuration is purpose built for our CI/CD process, it may be useful as a an example but it's not general enough to be useful for public consumption.
- Any of the docker configurations begining with `FROM gcr.io/ ...` are pulling from a private registry and will have to be replaced with an applicable image of you choosing. 

### Usage
- `npm start` - execute code in `src` directory with live reload via `nodemon` transpiled with `ts-node`
- `npm run build` - transpile and ES6+ TypeScript and create sourcemaps
- `npm run serve:dev` - execute target code with live reload via `nodemon` transpiled with `ts-node`
- `npm run serve:dist` - serve production files from the `./dist` folder via `node`
- `npm test` - run unit & integration tests with `Jest`
- `npm run test:coverage` - run tests with `Jest` and generates code coverage
- `npm run lint` - code linting with `tslint`
- `npm run security` - run vulnerability tests via the node security platform `nsp`
