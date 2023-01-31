---
layout: post
title: Deployment in React Deployment md component | Syncfusion
description: Learn here all about Deployment in Syncfusion React Deployment md component of Syncfusion Essential JS 2 and more.
control: Deployment 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Deployment in React Deployment md component

## CDN

The CDN links are provided individually for all the scripts and style sheets of Syncfusion React UI components.

The CDN link is provided to following files in the package

1. UMD Files
2. CSS Files

> The un-versioned CDN links, which always maintain the latest version scripts are deprecated from 2022 Vol1 - 20.1 version. These links are available with `19.4` version scripts to avoid breaking in sites and apps that use un-versioned links.

_The latest minified versions of all UMD, Global and CSS files are available on CDN:_

* **`https://cdn.syncfusion.com/ej2/PACKAGENAME/dist/PACKAGENAME.umd.min.js`**
* **`https://cdn.syncfusion.com/ej2/PACKAGENAME/styles/THEMENAME.css`**

For example

* [https://cdn.syncfusion.com/ej2/ej2-react-inputs/dist/ej2-react-inputs.umd.min.js](https://cdn.syncfusion.com/ej2/ej2-react-inputs/dist/ej2-react-inputs.umd.min.js)
* [https://cdn.syncfusion.com/ej2/ej2-react-inputs/styles/material.css](https://cdn.syncfusion.com/ej2/ej2-react-inputs/styles/material.css)

_Versioned files are also available on CDN._

* **`https://cdn.syncfusion.com/ej2/VERSION/PACKAGENAME/dist/PACKAGENAME.umd.min.js`**
* **`https://cdn.syncfusion.com/ej2/VERSION/PACKAGENAME/styles/THEMENAME.css`**

For example

* [https://cdn.syncfusion.com/ej2/1.0.18/ej2-react-inputs/dist/ej2-react-inputs.umd.min.js](https://cdn.syncfusion.com/ej2/1.0.18/ej2-react-inputs/dist/ej2-react-inputs.umd.min.js)
* [https://cdn.syncfusion.com/ej2/1.0.18/ej2-react-inputs/styles/material.css](https://cdn.syncfusion.com/ej2/1.0.18/ej2-react-inputs/styles/material.css)

## Packages

Syncfusion React packages is published and available in public
[npm](https://www.npmjs.com/search?q=ej2-react&page=1&ranking=optimal) registry.

### Anatomy of NPM Packages

Syncfusion React UI components are shipped as npm packages. Following table explains the purpose of each file available in the package.

|    Files                                                                  |    Purpose                                                                                                                                                                                                                                                                                   |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    `dist/es6`                                                               |    This folder contains the ES6 formatted JS file of   the package.                                                                                                   |
|    `dist/<packagename>.umd.min.js`   `dist/<packagename>.umd.js`              |        For applications using AMD or Common JS based   module loader can be utilize these files.                                                                                                                                                                                             |
|    `src/`                                                                   |    This folder contains the script files in AMD   format. You can connect these AMD files as a package in System JS or Require   JS.                                                                                                                                                         |
|    `styles/<theme name>.css`   `styles/<theme name>.scss`                     |    This folder contains the CSS and SCSS files of the   package.                                                                                                                                                                                                                             ||
