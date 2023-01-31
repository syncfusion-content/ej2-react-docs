---
layout: post
title: Getting started with React Appbar component | Syncfusion
description:  Checkout and learn about Getting started with React Appbar component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple AppBar, and configure its available functionalities in React.

## Dependencies

The following list of dependencies are required to use the AppBar component in your application.

```javascript
|-- @syncfusion/ej2-react-navigations
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-base
```

## Setup your development environment

You can use [`Create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications.

To install `create-react-app` run the following command.

```bash
npm install -g create-react-app
```

Start a new project using create-react-app command as follows

<div class='tsx'>

```bash
create-react-app quickstart --scripts-version=react-scripts-ts
cd quickstart
```

</div>

<div class='jsx'>

```bash
create-react-app quickstart
cd quickstart
```

</div>

> 'react-scripts-ts' is used for creating React app with typescript.

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install `AppBar` component, use the following command

```bash
npm install @syncfusion/ej2-react-navigations --save
```

The above command installs [AppBar dependencies](./getting-started#dependencies)
which are required to render the component in the `React` environment.

## Adding Style sheet to the Application

Add AppBar component's styles as given below in `App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
```

## Add AppBar to the project

Now, you can create `AppBar` component in the application. Add `AppBar` component in `src/App.tsx` file using the following code snippet.



```ts
import { AppBarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
  return (
    <div className='control-container'>
      <AppBarComponent colorMode="Primary">
        <ButtonComponent cssClass='e-inherit menu' iconCss='e-icons e-menu'></ButtonComponent>
        <span className="regular">React AppBar</span>
        <div className="e-appbar-spacer"></div>
        <ButtonComponent cssClass='e-inherit login'>FREE TRIAL</ButtonComponent>
      </AppBarComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);
```

```ts
import { AppBarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return (<div className='control-container'>
      <AppBarComponent colorMode="Primary">
        <ButtonComponent cssClass='e-inherit menu' iconCss='e-icons e-menu'></ButtonComponent>
        <span className="regular">React AppBar</span>
        <div className="e-appbar-spacer"></div>
        <ButtonComponent cssClass='e-inherit login'>FREE TRIAL</ButtonComponent>
      </AppBarComponent>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);
```

## Run the application

Run the application in the browser using the following command:

```
npm start
```

The following example shows a basic AppBar component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/appbar/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/appbar/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/appbar/getting-started-cs1" %}