# Node12 TypeScript

The purpose of this template is to provide a minimalist OpenFaaS function using Node v12.14.1 and TypeScript

## Project Layout

- /

Notably, the root of the project is not copied when the user runs `faas-cli new NAME_OF_FUNCTION --lang node12-typescript`. It only appears during the `build` phase of function deployment, and contains the HTTP server/middleware that proxy requests to the function. The intention is for the end user to not have to modify files in the root directory.

The three main files here are `app.ts`, `server.ts`, and `middleware.ts`. These three files contain the express app, the server, and the middleware of the function respectively. The `package.json` file in the root only contains dependencies related to the server, not the actual function code in the `function/` directory. The `Dockerfile` and `template.yml` files define the OpenFaaS function and its metadata.

The TSC config files are also included in the root of the template, and the TypeScript transpile process occurs during the building of the docker image that is pushed to the remote container registry.

- /function

The function directory includes all of the code that a user will see when they create a new OpenFaaS function based off of the template. It includes linting configuration, a basic handler function, and dependencies related to the function code.