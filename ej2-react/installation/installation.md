---
layout: post
title: Installing Syncfusion React Components via npm | Syncfusion
description: Learn how to install Syncfusion React components using npm CLI or package.json for Essential JS 2 packages.
control: Installation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Installation

Syncfusion<sup style="font-size:70%">&reg;</sup> React npm packages can be added to a project using either of the following methods:

- Installation using the npm CLI
- Installation by declaring the package in `package.json`

## Method 1: Install using npm CLI

Syncfusion<sup style="font-size:70%">&reg;</sup> React (JavaScript - EJ2) packages are published on [npm](https://www.npmjs.com/search?q=scope:syncfusion). Install packages using the npm install command. For example, to install the React Grid package:

```bash
npm install @syncfusion/ej2-react-grids --save
```

This command installs the Grid component package and its dependencies. The `package.json` file will be updated with the Grid package under `dependencies`.

## Method 2: Install using package.json

1. Add the Syncfusion<sup style="font-size:70%">&reg;</sup> React (JavaScript - EJ2) package reference in the `dependencies` section of `package.json`:

    ```json
    {
        "dependencies": {
            "@syncfusion/ej2-react-grids": "*"
        }
    }
    ```
    
    > The `*` indicates the latest version of the npm package. For reproducible builds, specify an exact version (for example, `"32.1.19"`).

2. Open a terminal and run `npm install`. This installs all modules listed as dependencies in [package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json).

If using an alternative package manager, use the equivalent command (for example, `yarn install` or `pnpm install`).

## Prerequisites

Syncfusion<sup style="font-size:70%">&reg;</sup> React components require `react` and `react-dom` as peer dependencies. Ensure these are installed in the project and that installed versions are compatible with the Syncfusion packages being used:

```bash
npm install react react-dom --save
```

> For more details about `package.json` configuration, refer to the [npm documentation](https://docs.npmjs.com/files/package.json). Also consult the Syncfusion release notes or support matrix for compatible React and Node.js versions.