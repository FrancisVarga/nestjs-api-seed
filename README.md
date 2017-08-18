[![tests][tests]][tests-url]
[![coverage][cover]][cover-url]
[![G.P.A][gpa]][gpa-url]

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
- `npm run certs` - Generates development SSL certs for localhost consumed by DotEnv ( See example config )
- `npm start` - execute code in `src` directory with live reload via `nodemon` transpiled with `ts-node`
- `npm run build` - transpile and ES6+ TypeScript and create sourcemaps
- `npm run serve:dev` - execute target code with live reload via `nodemon` transpiled with `ts-node`
- `npm run serve:dist` - serve production files from the `./dist` folder via `node`
- `npm test` - run unit & integration tests with `Jest`
- `npm run test:coverage` - run tests with `Jest` and generates code coverage
- `npm run lint` - code linting with `tslint`
- `npm run security` - run vulnerability tests via the node security platform `nsp`

### Running the supporting stack
_Adds your dockerhub username to any container created to prevent name colisions_

```bash
export DOCKER_ACCT=<dockerHubAccountName> 

```

_Build the containers using docker compose_

```bash
docker-compose --file docker-compose.yml build 

```

_Run the stack via docker-compose and load seed data_

```bash
docker-compose --file docker-compose.yml up

```

_Docker loads data ( if it exists ) into MongoDB on the first run only, to reset the seed data you need to remove & rebuild the containers_

```bash
# Stop all running containers
docker stop $(docker ps -a -q)
# Delete all containers
docker rm $(docker ps -a -q)

```

### Debugging

There is a Visual Studio Code launch configuration included in `./.vscode/launch.json`. 
Debug configurations exist for single file debug, Jest test debugging as well as a standard debug configuration.

### Security & Updates

_Run vulnerability tests via node security platform as a part of the CircleCI configuarion._

```bash
npm run security

```

### Changelog & Release

_Changelog generation is provided by `conventional-changelog` & `cz-conventional-changelog`_

- We follow the [AngularJS Commit Messsage Guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines), [Commitizen](https://github.com/commitizen/cz-cli) does this for us.
- The `CHANGELOG.md` is generated from this specific commit message formatting.

### API Configuration Options

Confiugration is handled by [dotenv](https://github.com/motdotla/dotenv) with any reqired constants having defaults configured.

```javascript
#
# Main Application Configuration
#
APP_NAME="nestjs-mongoose"
APP_HOST="https://localhost"
APP_URL_PREFIX="/api/v1"
APP_PORT=4433
TLS_KEY_PATH="./.ssl/certs/server/privkey.pem"
TLS_CERT_PATH="./.ssl/certs/server/fullchain.pem"
TLS_CA_PATH="./.ssl/certs/client/chain.pem"

#
# Auth0
#
AUTH_ISSUER=""
AUTH_AUDIENCE=""
AUTH_JWKS_URL=""

#
# Database
#
# MongoDB Replica Set
MONGO_HOST0="someUrl-rs0-shard-00-00.mongodb.net"
MONGO_HOST1="someUrl-rs0-shard-00-01.mongodb.net"
MONGO_HOST2="someUrl-rs0-shard-00-02.mongodb.net"
MONGO_PORT=27017
MONGO_USER=
MONGO_PASS=
MONGO_DB="nest_db"
MONGO_REPLICA_SET="nest-db-rs0-shard-0"

# MongoDB Instance
#MONGO_HOST0="localhost"
#MONGO_PORT=27017
#MONGO_USER=
#MONGO_PASS=
#MONGO_DB="nest_db"
```

[tests]: https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser.svg
[tests-url]: https://circleci.com/gh/EasyMetrics/nestjs-api-seed

[gpa]: https://codeclimate.com/github/EasyMetrics/nestjs-api-seed/badges/gpa.svg
[gpa-url]: https://codeclimate.com/github/EasyMetrics/nestjs-api-seed

[cover]: https://codeclimate.com/github/EasyMetrics/nestjs-api-seed/badges/coverage.svg
[cover-url]: https://codeclimate.com/github/EasyMetrics/nestjs-api-seed/coverage