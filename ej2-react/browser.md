---
layout: post
title: Browser support for React | Syncfusion
description: Learn about browser support and required polyfills for Syncfusion Essential JS 2 React components.
control: Browser 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Browser support

Syncfusion<sup style="font-size:70%">&reg;</sup> Essential JS 2 components are supported in modern browsers. Supported browser families and general support notes:

| Browser | Supported versions |
|---|---|
| Chrome | Latest |
| Firefox | Latest |
| Opera | Latest |
| Edge | 13+ |
| Internet Explorer (IE) | 11+ |
| Safari | 9+ |
| iOS Safari | 9+ |
| Android Browser / Chrome for Android | 4.4+ |
| Windows Mobile | IE 11+ |

## Required polyfills

The following polyfills are required to run Essential JS 2 components in certain browsers:

| Browser | Required polyfills |
|---:|:---|
| Chrome (latest), Firefox (latest), Opera (latest), Edge, Safari 9+ | None |
| Internet Explorer 11 | ES6 Promise polyfill |

Essential JS 2 components are supported in IE 11 when the ES6 Promise polyfill is present.

## Using CDN

To include the ES6 Promise polyfill via CDN, add one of the following script tags to the HTML page (choose one of the provided variants):

```html
<!-- Full (development) -->
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script>

<!-- Minified (production) -->
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
```

Include the polyfill before loading Syncfusion scripts so Promise is available when components initialize.

## Node.js

To use the ES6 Promise polyfill in a Node.js environment:

Install:

```bash
npm install es6-promise
# or
yarn add es6-promise
```

Use in code:

```js
var Promise = require('es6-promise').Promise;
```

For more details, refer to the polyfill project: https://github.com/stefanpenner/es6-promise.