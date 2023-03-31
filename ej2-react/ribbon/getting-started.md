---
layout: post
title: Getting started with React Ribbon component | Syncfusion
description:  Checkout and learn about Getting started with React Ribbon component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple Ribbon, and configure its available functionalities in React.

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

## Setup your development environment

To set-up a React application, choose any of the following ways. The best and easiest way is to use the [create-react-app](https://github.com/facebook/create-react-app). It sets up your development environment in JavaScript and improvise your application for production. Refer to the [installation instructions](https://github.com/facebook/create-react-app#creating-an-app) of `create-react-app`.

```bash
npx create-react-app my-app
cd my-app
npm start
```

or

```bash
yarn create react-app my-app
cd my-app
yarn start
```

To set-up a React application in `TypeScript` environment, run the following command.

```bash
npx create-react-app my-app --template typescript
cd my-app
npm start
```

Besides using the [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) package runner tool, also create an application from the `npm init`. To begin with the `npm init`, upgrade the `npm` version to `npm 6+`.

```bash
npm init react-app my-app
cd my-app
npm start
```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install `Ribbon` component, use the following command

```bash
npm install @syncfusion/ej2-react-ribbon --save
```

The above command installs [Ribbon dependencies](./getting-started#dependencies) which are required to render the component in the `React` environment.

## Adding Style sheet to the Application

Add Ribbon component's styles as given below in `App.css`.

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

## Add Ribbon to the project

Now, you can create `Ribbon` component in the application. Add `Ribbon` component in `src/App.tsx` file using the following code snippet.

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

## Adding Ribbon Tab

In Ribbon, the options are arranged in tabs for easy access. You can use the `RibbonTabDirective` to define the ribbon tab like below.

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

## Adding Ribbon Group

To define a ribbon group under each tab, you can use the `RibbonGroupDirective` like below. The `orientation` property of ribbon group defines whether the collection of items will be rendered column-wise or row-wise.

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

## Adding Ribbon Item

You can use the `RibbonCollectionDirective` to define each ribbon collection that contains one or more items. To define each ribbon item, you can use the `RibbonItemDirective` and the `type` property to specify the type of control to be rendered, like a button, a drop-down button, a combo box, and more.

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

Run the application in the browser using the following command:

```
npm start
```

The following example illustrates how tabs, groups, collections, and items are used in a ribbon control to form the ribbon layout.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/ribbon/getting-started" %}
