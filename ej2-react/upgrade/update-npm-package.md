---
layout: post
title: Update npm package in React Upgrade component | Syncfusion
description: Learn how to update Syncfusion npm packages for React (Essential JS 2) using npm-check-updates and npm commands.
control: Update npm package 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Update Syncfusion<sup style="font-size:70%">&reg;</sup> npm Package

Upgrading Syncfusion<sup style="font-size:70%">&reg;</sup> npm packages to the latest versions is straightforward and does not require uninstalling packages first. Use the [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) tool to update package versions in package.json, then install the updated packages.

## Update all Syncfusion<sup style="font-size:70%">&reg;</sup> npm packages

Follow these steps to upgrade all Syncfusion<sup style="font-size:70%">&reg;</sup> npm packages:

1. Install npm-check-updates globally. This tool helps update dependencies in package.json interactively.

```bash
npm install -g npm-check-updates
```

2. Run the following command to update only Syncfusion packages in package.json to the latest versions:

```bash
ncu -u -f /^@syncfusion/
```

This updates package.json with the latest versions for all `@syncfusion` packages.

3. Install the updated packages and remove duplicate packages:

```bash
npm update
npm dedupe
```

## Update a specific npm package

To upgrade one or more specific Syncfusion packages, run:

```bash
npm update @syncfusion/ej2-grids
npm update @syncfusion/ej2-react-grids
npm dedupe
```

> Note: The `npm dedupe` command [searches and removes duplicate packages](https://docs.npmjs.com/cli/v8/commands/npm-dedupe) in `node_modules`, helping to avoid multiple versions of the same package.