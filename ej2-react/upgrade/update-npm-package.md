---
layout: post
title: Update npm package in React Upgrade component | Syncfusion
description: Learn here all about Update npm package in Syncfusion React Upgrade component of Syncfusion Essential JS 2 and more.
control: Update npm package 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Update Syncfusion npm Package

It is easy to upgrade your Syncfusion npm package to the latest version without uninstalling the packages. The Syncfusion packages can be updated with the help of [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) package.

## Update all Syncfusion npm packages

Refer the below steps to upgrade Syncfusion npm packages.

1. Install the `npm-check-update package` globally to use this as CLI.

    ```bash
    npm install -g npm-check-updates
    ```

2. Run the below command to update npm packages. The below command will filters only Syncfusion packages and update it with latest version. This will update the package.json file with latest version of all `@syncfusion` packages.

    ```bash
    ncu -u -f /^@syncfusion/
    ```

3. Now, run the following commands to update the packages in `node_modules` and remove the duplicate package which is already installed.

    ```bash
    npm update
    npm dedupe
    ```

## Updating a specific npm package

If you want to upgrade only a specific Syncfusion npm package, run the following command.

    ```bash
    npm update @syncfusion/ej2-grids
    npm update @syncfusion/ej2-react-grids
    npm dedupe
    ```
> [dedupe](https://docs.npmjs.com/cli/v8/commands/npm-dedupe) searches and deletes the duplicate packages in `node_modules`.