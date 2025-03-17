---
layout: post
title: Installation in React Installation component | Syncfusion
description: Learn here all about Installation in Syncfusion React Installation component of Syncfusion Essential JS 2 and more.
control: Installation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Installation 

The Syncfusion<sup style="font-size:70%">&reg;</sup> React npm packages can be installed in the application through any of the following steps:

* Installation using npm CLI.
* Installation through package reference in `Package.json` file.

## Install by using npm CLI

Syncfusion<sup style="font-size:70%">&reg;</sup> React (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are published in [npm](https://www.npmjs.com/search?q=scope:syncfusion). You can install the necessary packages from npm’s install command. For example, React Grid package can be installed using following command.

```
npm install @syncfusion/ej2-react-grids --save
```

The above command will install the Grid component package and all its dependency packages. You can see the `package.json` file updated with Grid package in dependencies.

## Install by using package.json

1. Add the Syncfusion<sup style="font-size:70%">&reg;</sup> React (Essential<sup style="font-size:70%">&reg;</sup> JS 2) package references in the `dependencies` of `~/package.json` file.

    ```
    {
        "dependencies": {
            "@syncfusion/ej2-react-grids": "*",
        }
    }
    ```
    > The `*` indicates the latest version of npm package.

2. Now, open the command prompt and run the `npm install` command line. By default, npm install will install all modules listed as dependencies in [package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json).

> Refer the [documentation](https://docs.npmjs.com/files/package.json) for more details about npm package.json