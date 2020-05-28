## Repository for custom openfaas templates

### Run the following command in your terminal or add it to your bash configuration file (ex: ~/.bashrc)

```shell
export OPENFAAS_TEMPLATE_URL="git@github.com:Rblock919/openfaas-templates.git"
```

### Run the following command to pull down the template(s)

```shell
faas-cli template pull
```

### Run the following command to create a new function out of the node12-typescript template

```shell
faas-cli new <NAME_OF_NEW_FUNCTION> --lang node12-typescript --prefix="<DOCKER_USERNAME/REGISTRY>"
```

### Run the following command to build your newly created function

```shell
faas-cli build -f <NAME_OF_NEW_FUNCTION>.yml
```

### Run the following command to publish the docker image for your newly created function to your docker registry

```shell
faas-cli push -f <NAME_OF_NEW_FUNCTION>.yml
```

### Run the following command to deploy your newly created function to your openfaas instance

```shell
faas-cli deploy -f <NAME_OF_NEW_FUNCTION>.yml
```
