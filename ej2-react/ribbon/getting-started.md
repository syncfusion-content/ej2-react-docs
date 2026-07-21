---
layout: post
title: Getting started with React Ribbon component | Syncfusion
description:  Checkout and learn about Getting started with Syncfusion React Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the React Ribbon Component

This section explains how to create a simple [React Ribbon](https://www.syncfusion.com/react-components/react-ribbon) component and demonstrate its basic usage in a React environment.

## Prerequisites

| Requirement | Version |
|-------------|---------|
| React | 15.5.4 or higher |
| Node.js | 14.0.0 or above |
| Yarn (optional) | 0.25 or above |

### React supported versions

| React version | Minimum Syncfusion React Ribbon version |
| ------------- | --------------------------------------- |
| [React v19](https://react.dev/blog/2024/12/05/react-19) | 29.1.33 and above |
| [React v18](https://reactjs.org/blog/2022/03/29/react-v18.html) | 20.2.36 and above |
| [React v17](https://reactjs.org/blog/2020/10/20/react-v17.html) | 18.3.50 and above |
| [React v16](https://reactjs.org/blog/2017/09/26/react-v16.0.html) | 16.2.45 and above |

### Browser support

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

## Setup for local development

Easily set up a React application using `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide).

> **Note:** To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run one of the following commands based on your preferred language:

***React with JavaScript***

```bash
npx create vite@latest my-app -- --template react
```

***React with TypeScript***

```bash
npx create vite@latest my-app -- --template react-ts
```

During the setup process, the CLI will prompt you for a few configuration options. Select the following:

- **Which linter to use?** → **ESLint**
- **Install with npm and start now?** → **Yes**

Selecting **Yes** automatically installs the project dependencies and starts the development server.

After verifying that the application starts successfully, terminate the development server in the terminal and proceed to the next step.

Then, navigate to the project directory:

```bash
cd my-app
```

## Adding React Ribbon packages

All Syncfusion Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.

To install the Ribbon component package, use the following command:

```bash
npm install @syncfusion/ej2-react-ribbon --save
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Ribbon component can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) documentation.

Install the **Tailwind 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/ribbon/index.css";

{% endhighlight %}
{% endtabs %}

## Adding the Ribbon component

Now, you can add the Ribbon component to your application. Open the `src/App.tsx` file and use the following code snippet to render a basic Ribbon.

```ts
import { RibbonComponent } from "@syncfusion/ej2-react-ribbon";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";

function App() {
  return (
    <RibbonComponent id="ribbon"></RibbonComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById("element"));
root.render(<App />);
```

### Injecting required modules

Inject the Ribbon required modules in your `src/App.tsx` file using the following code snippet.

```ts
import { RibbonComponent, RibbonFileMenu, Inject, RibbonColorPicker } from "@syncfusion/ej2-react-ribbon";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";

function App() {
  return (
    <RibbonComponent id="ribbon">
        <Inject services={[RibbonFileMenu, RibbonColorPicker]} />
    </RibbonComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById("element"));
root.render(<App />);
```

## Defining Ribbon tabs

In the Ribbon, commands are organized into tabs for easy access. Use the `RibbonTabDirective` to define each tab.

```ts
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective } from "@syncfusion/ej2-react-ribbon";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";

function App() {
  return (
    <RibbonComponent id="ribbon">
      <RibbonTabsDirective>
        <RibbonTabDirective header="Home"></RibbonTabDirective>
      </RibbonTabsDirective>
    </RibbonComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById("element"));
root.render(<App />);
```

## Defining Ribbon groups

Each tab can contain one or more groups, which are defined using the `RibbonGroupDirective`. The `orientation` property specifies whether the items within the group are arranged in a row or a column.

```ts
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonGroupsDirective, RibbonGroupDirective } from "@syncfusion/ej2-react-ribbon";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";

function App() {
  return (
    <RibbonComponent id="ribbon">
      <RibbonTabsDirective>
        <RibbonTabDirective header="Home">
          <RibbonGroupsDirective>
            <RibbonGroupDirective header="Clipboard" orientation="Row"></RibbonGroupDirective>
          </RibbonGroupsDirective>
        </RibbonTabDirective>
      </RibbonTabsDirective>
    </RibbonComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById("element"));
root.render(<App />);
```

## Defining Ribbon items

Use the `RibbonItemDirective` to add commands like buttons, combo boxes, and other controls to a group. Items are placed within a `RibbonCollectionDirective`. The `type` property of an item specifies which component to render.

```ts
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonItemsDirective, RibbonItemDirective, RibbonItemSize } from "@syncfusion/ej2-react-ribbon";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";

function App() {
  const splitbuttonModel = { iconCss: "e-icons e-paste", items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }], content: "Paste" };
  const cutButton = { iconCss: "e-icons e-cut", content: "Cut" };
  const copyButton = { iconCss: "e-icons e-copy", content: "Copy" };
  return (
    <RibbonComponent id="ribbon">
      <RibbonTabsDirective>
        <RibbonTabDirective header="Home">
          <RibbonGroupsDirective>
            <RibbonGroupDirective header="Clipboard" orientation="Row">
              <RibbonCollectionsDirective>
                  <RibbonCollectionDirective id="paste-collection">
                      <RibbonItemsDirective>
                        <RibbonItemDirective type="SplitButton" allowedSizes={RibbonItemSize.Large}
                            splitButtonSettings={splitbuttonModel}>
                        </RibbonItemDirective>
                      </RibbonItemsDirective>
                  </RibbonCollectionDirective>
                  <RibbonCollectionDirective id="cutcopy-collection">
                      <RibbonItemsDirective>
                          <RibbonItemDirective type="Button" buttonSettings={cutButton}>
                          </RibbonItemDirective>
                          <RibbonItemDirective type="Button" buttonSettings={copyButton}>
                          </RibbonItemDirective>
                      </RibbonItemsDirective>
                  </RibbonCollectionDirective>
              </RibbonCollectionsDirective>
            </RibbonGroupDirective>
          </RibbonGroupsDirective>
        </RibbonTabDirective>
      </RibbonTabsDirective>
    </RibbonComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById("element"));
root.render(<App />);
```

## Registering your Syncfusion license

Generate a license key from the [Syncfusion License Dashboard](https://www.syncfusion.com/account/downloads) and register it before rendering your React application:

```ts
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('YOUR_LICENSE_KEY');
```

> **Note:** A valid Syncfusion license is required for production use. Without a valid license, a trial license warning message will be displayed.

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally.

```
npm run dev
```

The following example illustrates how tabs, groups, collections, and items are used in a ribbon component to form the ribbon layout.

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/ribbon/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/ribbon/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/getting-started-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/ribbon/getting-started-cs1" %}

### Production build

To create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Troubleshooting

- **Ribbon not rendering styles:** Ensure the theme CSS is imported in `App.css` and that you removed the default Vite CSS in `index.css`.
- **Trial license warning banner:** Register a license key via `registerLicense()` from `@syncfusion/ej2-base`.
- **Port 5173 already in use:** Stop the conflicting process or run Vite on a different port with `npm run dev -- --port 3000`.