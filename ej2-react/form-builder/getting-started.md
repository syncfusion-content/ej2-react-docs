---
layout: post
title: React Form Builder component Getting started | Syncfusion
description: Check out how to get started with the Syncfusion React Form Builder component, including installation, setup, and a basic example.
control: Getting Started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Form Builder component

The Form Builder is an intuitive, visual form designer that lets you create and customize forms interactively by dragging and dropping fields—no code required. You can visually design forms, configure field properties, and preview the generated form in real time. The Form Builder also allows you to export the form schema for use with the [Form Renderer](https://ej2.syncfusion.com/react/documentation/form-renderer/getting-started) control.

This guide provides step-by-step instructions for setting up a Vite + React project with TypeScript and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> React Form Builder component. For other setup flows (Create React App, framework host setups), see [See Also](#see-also).

## Prerequisites

- Install a supported [Node.js](https://nodejs.org/en) LTS release and npm (or another Node package manager) before continuing.
- Ensure your environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI Components](https://ej2.syncfusion.com/react/documentation/system-requirement).
- Supported React and Syncfusion package combinations are listed in the [Version Compatibility](https://ej2.syncfusion.com/react/documentation/upgrade/version-compatibility) guide. This walkthrough assumes React 18+ with the default Vite + React + TypeScript scaffolding.

## Set up the Vite project

To create a new React application, run one of the following commands based on your preferred language:

**React with JavaScript**

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm create vite@latest my-project -- --template react
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
yarn create vite my-project --template react
{% endhighlight %}
{% endtabs %}

**React with TypeScript**

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm create vite@latest my-project -- --template react-ts
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
yarn create vite my-project --template react-ts
{% endhighlight %}
{% endtabs %}

During the setup process, the CLI will prompt you for a few configuration options. Select the following:

- **Which linter to use?** → **ESLint**
- **Install with npm and start now?** → **Yes**

Selecting **Yes** automatically installs the project dependencies and starts the development server.

After verifying that the application starts successfully, terminate the development server in the terminal and proceed to the next step.

Then, navigate to the project directory:

```bash
cd my-project
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

All Syncfusion Essential® JS 2 packages are published to the [npm registry](https://www.npmjs.com/~syncfusionorg).

To install the React Form Builder package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-react-form-builder

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-react-form-builder

{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> React components can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

This guide uses the `Material 3` theme as an example, sourced from the theme package. To install the [Material 3](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-material3-theme

{% endhighlight %}
{% endtabs %}

By default, Vite projects include a `src/index.css` file with default styles. These default styles may conflict with Syncfusion component styles. Clear all content from the `src/index.css` file to prevent style conflicts.

The required styles for the Form Builder are imported in the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "@syncfusion/ej2-material3-theme/styles/material3.css";

{% endhighlight %}
{% endtabs %}

## Adding the Form Builder component

Now, add the React Form Builder component to the **src/App.tsx** file by importing and using it within the application.

Add the following code to the **src/App.tsx** file:

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}

import { FormBuilderComponent, Schema } from '@syncfusion/ej2-react-form-builder';
import './App.css';

function App() {
  return (
    <FormBuilderComponent />
  );
}

export default App;

{% endhighlight %}
{% highlight js tabtitle="App.jsx" %}

import { FormBuilderComponent } from '@syncfusion/ej2-react-form-builder';
import './App.css';

function App() {
  return (
    <FormBuilderComponent />
  );
}

export default App;

{% endhighlight %}
{% endtabs %}

## Run the application

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

When the build succeeds, Vite reports a local URL (default: `http://localhost:5173`). Open that URL in a browser to view the Form Builder. If the port is already in use, Vite automatically picks the next free port and prints the new URL in the terminal.

The output will appear as follows:

![React Form Builder](./images/form-builder.png)

## Basic components of the Form Builder

The Form Builder control consists of the following sections:

1. **Left Pane / Toolbox** — Displays all the supported form fields, which can be dragged and dropped.
2. **Central design canvas** — Holds the dropped form fields to construct the form.
3. **Right Pane** — Provides options to customize the form settings as well as the selected form fields.
4. **Code view** — Displays the form schema during the form design process.
5. **Form Preview** — Allows you to preview and interact with the generated form in real time once it is created.

## Adding form fields to the design canvas

Form fields can be added to the central design canvas in the following ways:

* **Form Components Panel** — A toolbox of form fields is available in the left-side pane to drag and drop them onto the design canvas.
* **Context Menu in the Design Canvas** — After the first form field is dropped, a button at the end of the central canvas can be used to add additional form fields using a context menu that appears when the button is clicked.

![Form Builder with context menu](./images/form-builder-drag-drop.gif)

## See Also

* [Getting Started with Vite + React](./vite) — alternative Vite-focused walkthrough
* [Getting Started with Create React App](./create-react-app) — using CRA as the bundler
* [Getting Started with React and ASP.NET Core](./aspnet-core) — server-side integration
* [Getting Started with Next.js](../frameworks-and-feature/nextjs)
* [Getting Started with React and Electron](../frameworks-and-feature/electron)
* [Upgrade Guide](../upgrade/upgrading-syncfusion)
