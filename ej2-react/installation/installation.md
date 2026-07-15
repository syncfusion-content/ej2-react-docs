---
layout: post
title: Installing Syncfusion React Components via npm | Syncfusion
description: Learn how to install Syncfusion React (Essential JS 2) components using the npm CLI or by declaring packages in package.json.
control: Installation
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Installing Syncfusion React components via npm

Syncfusion<sup style="font-size:70%">&reg;</sup> React (Essential JS 2) components are distributed as npm packages and can be added to a project in either of the following ways:

- Installation using the npm CLI
- Installation by declaring the package in `package.json`

## Overview

This guide walks through installing a Syncfusion<sup style="font-size:70%">&reg;</sup> React package, verifying the install, and registering the license key so that the components work in development and production.

## Prerequisites

Before installing a Syncfusion<sup style="font-size:70%">&reg;</sup> React package, ensure the following:

* **Node.js**: 18.x or later (LTS recommended). Verify with `node --version`.
* **npm**: 9.x or later (bundled with Node.js 18+). Verify with `npm --version`.
* **React project**: An existing React project with `react` and `react-dom` as `peerDependencies`. If you do not have one, create it first, then install React:

    ```bash
    npm install react react-dom --save
    ```

For more details about `package.json` configuration, refer to the [npm documentation](https://docs.npmjs.com/files/package.json). Also consult the [Syncfusion React release notes](https://ej2.syncfusion.com/react/documentation/release-notes) and [Syncfusion system requirements](https://ej2.syncfusion.com/react/documentation/system-requirements) for compatible React and Node.js versions.

## Method 1: Install using npm CLI

Syncfusion<sup style="font-size:70%">&reg;</sup> React (JavaScript - EJ2) packages are published on [npm](https://www.npmjs.com/search?q=syncfusion%20ej2). Install packages using the `npm install` command. For example, to install the React Grid package:

```bash
npm install @syncfusion/ej2-react-grids --save
```

This command installs the Grid component package and its dependencies. The `package.json` file is updated with the Grid package under `dependencies`.

A complete list of Syncfusion<sup style="font-size:70%">&reg;</sup> React packages is available in the [Syncfusion React components catalog](https://www.syncfusion.com/react-ui-components).

### Verify the install

After the install completes, verify the package is present in `node_modules`:

```bash
npm ls @syncfusion/ej2-react-grids
```

The command should print the installed Grid version and its dependency tree.

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

2. Open a terminal **at the project root** and run `npm install`. This installs all modules listed as dependencies in [package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json).

    If a `package-lock.json` already exists, npm will resolve dependencies according to the lockfile. To update the lockfile, run `npm update <package-name>` instead.

If using an alternative package manager, use the equivalent command (for example, `yarn install` or `pnpm install`).

### Verify the install

After the install completes, verify the package is present in `node_modules`:

```bash
npm ls @syncfusion/ej2-react-grids
```

The command should print the installed Grid version and its dependency tree.

## Import component styles

After installing a package, import the component stylesheet in your application's entry point (for example, `src/index.js` or `src/index.ts`):

```javascript
import '@syncfusion/ej2-react-grids/styles/material.css';
```

Refer to the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme) for the available theme names (Material, Bootstrap, Fabric, etc.) and the corresponding CSS import path.

## Register the license key

Syncfusion<sup style="font-size:70%">&reg;</sup> React components require a valid license key (or a trial key) to render in production builds. Register the key using the `syncfusion` script in `package.json`:

```bash
npx syncfusion-license activate
```

For complete instructions, refer to the [license key registration guide](https://ej2.syncfusion.com/react/documentation/licensing/license-key-registration).

## Troubleshooting

If the install fails, see the [Common Installation Errors](common-installation-errors) article for solutions to issues such as:

* `EINVALIDPKG` or `peerDependencies` errors during `npm install`.
* Outdated Node.js / npm versions.
* npm registry authentication issues.

## Next steps

After installation, refer to the following resources to start using Syncfusion<sup style="font-size:70%">&reg;</sup> React components:

* [Syncfusion React Getting Started](https://ej2.syncfusion.com/react/documentation/getting-started/typescript) — quick-start guide for React.
* [Syncfusion React Sample Browser](https://ej2.syncfusion.com/react/demos/) — online demos for every component.
* [Syncfusion React components catalog](https://www.syncfusion.com/react-ui-components) — full list of available React components.