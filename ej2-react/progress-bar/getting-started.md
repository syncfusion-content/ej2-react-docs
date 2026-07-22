---
layout: post
title: Getting Started with React Progress Bar Component | Syncfusion
description: Learn how to get started with the React Progress Bar component of Syncfusion Essential JS 2 and configure its properties.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Progress Bar Component

This section explains the steps required to create the Progress Bar component using React and configure its properties.

## Prerequisites

Before getting started, ensure you have:

- [Node.js](https://nodejs.org/en) version 14 or later installed
- React 16 or later (React 18+ recommended for `createRoot`)

## Dependencies

Below is the list of minimum dependencies required to use the Progress Bar component.

```javascript
  |-- @syncfusion/ej2-react-progressbar
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
```

These dependencies will be installed automatically when you install the main package.

## Installation and Configuration

To easily set up a React application, use the Vite CLI (`npm create vite`), which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:** To create a React application using `create-react-app` instead, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

![Initial setup - Vite prompts for framework and variant selection](images/Initial-setup.jpg)

To set up a React application in a TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set up a React application in a JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Progress Bar Package

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install the Syncfusion<sup style="font-size:70%">&reg;</sup> Progress Bar package, use the following command.

```bash
npm install @syncfusion/ej2-react-progressbar
```

## Add the Progress Bar Component

Now you can add the Progress Bar component to your application. Update the `src/App.tsx` (or `src/App.jsx`) file with the following code to create a basic linear Progress Bar.

**TypeScript (src/App.tsx):**

```ts
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';
import * as React from 'react';

function App() {
  return (
    <ProgressBarComponent id="linear" type="Linear" value={40} />
  )
}
export default App;
```

Ensure `src/main.tsx` contains the following code to render the component into `<div id="root">` defined in `index.html`.

**TypeScript (src/main.tsx):**

```ts
import { createRoot } from 'react-dom/client';
import * as React from 'react';
import App from './App';

createRoot(document.getElementById('root')!).render(<App />);
```

**JavaScript (src/App.jsx):**

```jsx
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';
import * as React from 'react';

function App() {
  return (
    <ProgressBarComponent id="linear" type="Linear" value={40} />
  )
}
export default App;
```

## Run the Application

Run the following command to start the development server.

```bash
npm run dev
```

This command compiles your code and serves the application locally, opening it in the browser.

## Complete Code Example

The following demonstrates a complete implementation, including the entry file and the Progress Bar component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/progress-bar/default-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/progress-bar/default-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/progress-bar/default-cs9" %}

## Troubleshooting

Common issues and fixes:

- **`createRoot` is not a function** – Your React version is older than 18. Upgrade React and `react-dom` to v18+, or use the legacy `ReactDOM.render` API.
- **Port already in use** – Vite will prompt to use an alternative port, or run `npm run dev -- --port 3000`.
- **Module not found for `@syncfusion/ej2-react-progressbar`** – Verify the package is listed in `package.json` dependencies and re-run `npm install`.

## See also

* [Progress Bar types](types.md)
* [Progress Bar accessibility](accessibility.md)
* [Progress Bar events](events.md)
* [Progress Bar API reference](https://ej2.syncfusion.com/react/documentation/api/progressbar)
