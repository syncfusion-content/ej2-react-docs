---
layout: post
title: Getting started with React Combo box component | Syncfusion
description:  Checkout and learn about Getting started with React Combo box component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with the React ComboBox component

This section explains how to create a simple **ComboBox** component and configure its available functionalities in React.

To get start quickly with React ComboBox, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=o77F7gewC40" %}

## Dependencies

The following list of dependencies are required to use the `ComboBox` component in your application.

```javascript
|-- @syncfusion/ej2-react-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-dropdowns
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
```

## Installation and configuration

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

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

## Adding syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install.

To install ComboBox component, use the following command

```bash
npm install @syncfusion/ej2-react-dropdowns –save
```

## Adding ComboBox component

Now, you can start adding ComboBox component in the application. For getting started, add the ComboBox component in `src/App.tsx` file using following code.Now place the below ComboBox code in the `src/App.tsx`.

`[Class-component]`

```tsx

import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
       // specifies the tag for render the ComboBox component
      <ComboBoxComponent id='comboelement'/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('sample'));
```

`[Functional-component]`

```tsx
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    return (
    // specifies the tag for render the ComboBox component
        <ComboBoxComponent id='comboelement'/>
    );
}

ReactDOM.render(<App />, document.getElementById('sample'));
```

## Adding CSS reference

Import the ComboBox component required CSS references as follows in `src/App.css`.

```css

/* import the ComboBox dependency styles */

@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-dropdowns/styles/material.css";;

```

## Binding data source

After initialization, populate the ComboBox with data using the `dataSource` property. Here, an array of string values is passed to the ComboBox component.

`[Class-component]`

```tsx

import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
  // define the array of data
  private sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
  public render() {
    return (
        // specifies the tag for render the ComboBox component
      <ComboBoxComponent id="comboelement" dataSource={this.sportsData} />
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));
```

`[Functional-component]`

```tsx

import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  // define the array of data
  const sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
    return (
    // specifies the tag for render the ComboBox component
        <ComboBoxComponent id="comboelement" dataSource={sportsData} />
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

`[Class-componnet]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/basic-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/basic-cs21/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs21" %}

`[Functional-componnet]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/combobox/basic-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/combobox/basic-cs22/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs22" %}

## Custom values

The ComboBox allows the user to give input as custom value which is not required to present in predefined set of values. By default, this support is enabled by [allowCustom](https://ej2.syncfusion.com/react/documentation/api/combo-box/#allowcustom) property. In this case, both text field and value field considered as same. The custom value will be sent to post back handler when a form is about to be submitted.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/combobox/basic-cs23/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/combobox/basic-cs23/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs23" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/combobox/basic-cs24/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/combobox/basic-cs24/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs24" %}

## Configure the popup list

By default, the width of the popup list automatically adjusts according to the ComboBox input element's width, and the height of the popup list has '300px'.

The height and width of the popup list can also be customized using the [popupHeight](https://ej2.syncfusion.com/react/documentation/api/combo-box/#popupheight) &nbsp;and [popupWidth](https://ej2.syncfusion.com/react/documentation/api/combo-box/#popupwidth) property respectively.

In the following sample, popup list's width and height have configured.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/combobox/basic-cs25/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/combobox/basic-cs25/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs25" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/combobox/basic-cs26/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/combobox/basic-cs26/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs26" %}

## See Also

* [How to bind the data](./data-binding/)