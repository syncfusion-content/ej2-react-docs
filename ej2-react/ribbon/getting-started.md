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

This section explains how to create a simple Ribbon and configure its functionalities in a React application.

## Dependencies

The following list of dependencies are required to use the Ribbon component in your application.

```javascript
|-- @syncfusion/ej2-react-ribbon
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-ribbon
```

## Setup for Local Development

To get started, create a new React application using Vite. Vite offers a faster development server and optimized builds. For more details, refer to the official Vite [installation guide](https://vitejs.dev/guide/).

> **Note:** If you prefer to use `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for setup instructions.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set-up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set-up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Packages

All Syncfusion Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.

To install the Ribbon component package, use the following command:

```bash
npm install @syncfusion/ej2-react-ribbon --save
```

The above command installs [Ribbon dependencies](./getting-started#dependencies) which are required to render the component in the `React` environment.

## Adding Styles to the Application

To apply the necessary styling for the Ribbon, import the component's CSS files into your `src/App.css` file.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-ribbon/styles/material.css";
```

## Adding the Ribbon Component

Now, you can add the Ribbon component to your application. Open the `src/App.tsx` file and use the following code snippet to render a basic Ribbon.

{% raw %}

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
{% endraw %}

### Injecting required modules

Inject the Ribbon required modules in your `src/App.tsx` file using the following code snippet.

{% raw %}

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
{% endraw %}

## Defining Ribbon Tabs

In the Ribbon, commands are organized into tabs for easy access. Use the `RibbonTabDirective` to define each tab.

{% raw %}

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
{% endraw %}

## Defining Ribbon Groups

Each tab can contain one or more groups, which are defined using the `RibbonGroupDirective`. The `orientation` property specifies whether the items within the group are arranged in a row or a column.

{% raw %}

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
{% endraw %}

## Defining Ribbon Items

Use the `RibbonItemDirective` to add commands like buttons, combo boxes, and other controls to a group. Items are placed within a `RibbonCollectionDirective`. The `type` property of an item specifies which component to render.

{% raw %}

```ts
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonItemsDirective, RibbonItemDirective, RibbonItemSize } from "@syncfusion/ej2-react-ribbon";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";

function App() {
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
                            splitButtonSettings={{ iconCss: "e-icons e-paste", items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }], content: "Paste" }}>
                        </RibbonItemDirective>
                      </RibbonItemsDirective>
                  </RibbonCollectionDirective>
                  <RibbonCollectionDirective id="cutcopy-collection">
                      <RibbonItemsDirective>
                          <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
                          </RibbonItemDirective>
                          <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-copy", content: "Copy" }}>
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
{% endraw %}

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The following example illustrates how tabs, groups, collections, and items are used in a ribbon component to form the ribbon layout.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/ribbon/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/ribbon/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/getting-started-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/ribbon/getting-started-cs1" %}