# vue-base

This is a possible base setup of Vue.js for the Emergency Room team.
I (fabian.gander@garaio.com) try to define a default, so we can start much easier and faster with new projects.
Every comment / contribution is very welcome.

The base setup of a vue project developed at Emergency Room Team.

## Standard vue-cli project setup

Its a base setup of vue-cli project using the following choices:

* node-sass
* babel
* typescript
* vuex
* eslint
* unit-jest

## Extended manually

We have extended the setup a little bit to have a better developer experience

### prettier

We use prettier to automatically format the files, a configuration file is available to share across devs.

### vuex-class

Manually extended to use vuex-class(vuex modules namespace helper)

## .vscode settings

Some vue / vetur / eslint / etc configurations are also part of the commit, so every developer has the same experience / formatting etc.
This is for project related configrations, make sure you don't add your personal preferences into this file. (vs code has both project / user settings)

## Demo / Example code

We also have some file structure suggestions, which is in trial phase.
The goal is to put most of modular things into modules, we also try right now with vuex-store in there.

For example code we have a demo component / module in here, this can be simply removed once its clear how to code.

### Vuex TS-class

We have worked out a vuex-typescript standard how to code and use the store with typescript and the class - way.

---------------------------------------

## Project setup

``` 
npm install
```

### Compiles and hot-reloads for development

``` 
npm run serve
```

### Compiles and minifies for production

``` 
npm run build
```

### Lints and fixes files

``` 
npm run lint
```

### Run all tests

This script has to collect all type of tests (unit,snapshot,ect) and run it.
In case if you add a new type of test, you should add to this script.
Before we would run these tests we run the linter.

``` 
npm run tests
```

### Run your unit tests

``` 
npm run test:unit
```

### Run unit test chrome debugger

In case if you want to debug your unit tests in Chrome inspector, you just need to run this script.
More about how to debug unit tests in Chrome inspector: <https://stackoverflow.com/c/garaio/questions/198>

``` 
npm run test:unit:debug
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
