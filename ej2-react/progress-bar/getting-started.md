---
layout: post
title: Getting Started with React Progress Bar | Syncfusion
description: Learn how to get started with the Syncfusion React Progress Bar control. Explore setup, dependencies, installation, and configuration options.
control: Getting Started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Progress Bar

This section explains the steps required to create the Progress Bar component using React and configure its properties.

## Prerequisites

Before getting started, ensure that your development environment meets the [system requirements for Syncfusion® React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement). That page documents the supported React, Node.js, and npm versions, and includes the React-version compatibility table for Syncfusion React components.

## Dependencies

Below is the list of minimum dependencies required to use the Progress Bar component.

```javascript
  |-- @syncfusion/ej2-react-progressbar
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
```

These dependencies will be installed automatically when you install the main package.

## Set up a development environment

To set up a React application quickly, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up the environment using JavaScript and optimizes applications for production.

> As an alternative, you can create a React application using [`create-react-app`](https://github.com/facebook/create-react-app). For detailed instructions, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app).

To create a new React application, run one of the following commands based on your preferred language:

**React with JavaScript**

```
npm create vite@latest my-app -- --template react
```

**React with TypeScript**

```
npm create vite@latest my-app -- --template react-ts
```

During the setup process, the CLI will prompt you for a few configuration options. Select the following:

- **Which linter to use?** → **ESLint**
- **Install with npm and start now?** → **Yes**

Selecting **Yes** automatically installs the project dependencies and starts the development server.

After verifying that the application starts successfully, terminate the development server in the terminal and proceed to the next step.

Then, navigate to the project directory:

```
cd my-app
```

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> React Progress Bar Package

All Syncfusion Essential® JS 2 packages are available in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

Install the React Progress Bar package using the following command:

```bash
npm install @syncfusion/ej2-react-progressbar
```

## Add the Progress Bar Component to the Project

Add the Progress Bar component to `src/App.tsx` using the following code to create a basic linear Progress Bar.

{% tabs %}
{% highlight ts tabtitle="~/src/App.tsx" %}

import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';
import * as React from 'react';

function App() {
  return (
    <ProgressBarComponent id="linear" type="Linear" value={40} />
  )
}
export default App;

{% endhighlight %}
{% endtabs %}

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

* [Progress Bar types](types)
* [Progress Bar accessibility](accessibility)
* [Progress Bar events](events)
* [Progress Bar API Reference](https://ej2.syncfusion.com/react/documentation/api/progressbar)
