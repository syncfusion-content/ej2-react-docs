---
layout: post
title: Getting started with React List box component | Syncfusion
description:  Checkout and learn about Getting started with React List box component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section briefly explains how to create a simple **ListBox** component and configure its available functionalities in React.

## Dependencies

The following list of dependencies are required to use the `ListBox` component in your application.

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

You can use [`Create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications. To install `create-react-app` run the following command.

   ```bash
     npm install -g create-react-app
   ```

To set-up a React application in TypeScript environment, run the following command.

<div class='tsx'>

```
npx create-react-app my-app --template typescript

cd my-app

npm start

```

</div>

To set-up a React application in JavaScript environment, run the following command.

<div class='jsx'>

```
npx create-react-app my-app

cd my-app

npm start

```

</div>

## Adding syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install.

To install ListBox component, use the following command

```bash
npm install @syncfusion/ej2-react-dropdowns --save
```

## Adding CSS reference

Import the ListBox component required CSS references as follows in `src/App.css`.

```css

/* import the ListBox dependency styles */

@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-dropdowns/styles/material.css";

```

## Adding ListBox component

Now, you can start adding ListBox component in the application. For getting started, add the ListBox component in `src/App.tsx` file using following code.

Add the below code in the `src/App.tsx` to initialize the ListBox.

```ts

import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import './App.css';

function App() {
  return (
      // specifies the tag for render the ListBox component
    <ListBoxComponent id='listbox'></ListBoxComponent>
  );
}
export default App;

```

## Binding data source

After initialization, populate the ListBox with data using the [dataSource](https://ej2.syncfusion.com/react/documentation/api/list-box/#datasource) property. Here, an array of object is passed to the ListBox component.

```ts

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ListBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import './App.css';

function App() {
  // define the array of object
  let data: { [key: string]: Object }[] = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04' },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' },
  ];
  return (
      // specifies the tag for render the ListBox component
    <ListBoxComponent dataSource={data} />
  );
}
export default App;

```

## Run the application

After completing the configuration required to render a basic ListBox, run the following command to display the output in your default browser.

```
npm start
```

The following example shows a basic Listbox component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/basic-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/basic-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/basic-cs7" %}