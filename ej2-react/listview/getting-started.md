---
layout: post
title: Getting started with React ListView component | Syncfusion
description:  Checkout and learn about Getting started with React ListView component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

The following section explains the required steps to build the simple **ListView** component with its basic usage in step by step procedure.

## Dependencies

Install the following dependent packages that are required to render the ListView component.

```javascript
+-- @syncfusion/ej2-react-lists
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-data
```

## Installation and Configuration

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite configures the project using JavaScript and prepares it for production deployment.

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


## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. Now, we are going to render
`ListView` component from these packages.

To install `ListView` component, use the following command.

```bash
npm install @syncfusion/ej2-react-lists --save
```

The above command installs [ListView dependencies](#dependencies) which are required to render the component in the `React` environment.

## Adding ListView component

The `ListView` component can now be added to the application. To get started, include the `ListView` component in the `src/App.tsx` file using the following code snippets.

```ts
import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import './App.css';

function App() {
  return (
    //specifies the tag to render the ListView component
    <ListViewComponent id='list' />
  );
}
export default App;
```

```ts
import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import './App.css';
function App() {
    return (
    //specifies the tag to render the ListView component
    <ListViewComponent id='list'/>);
}
export default App;
```

## Adding CSS Reference

Import `ListView` component required theme references at the top of `src/App.css`.

```css
/* import the ListView dependency styles */
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-lists/styles/tailwind3.css";
```

If the `CheckList` behavior is used in the ListView, include the Button component styles as shown below in the `src/App.css` file.

```css
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
```

## Bind dataSource

Populate the data in ListView using [`dataSource`](https://helpej2.syncfusion.com/react/documentation/api/list-view#datasource) property. Here, an array of JSON values passed to `ListView` component.



```ts
import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import './App.css';

function App() {
  // define the array of Json
  let arts: { [key: string]: string }[] = [
    { text: 'Artwork', id: '01' },
    { text: 'Abstract', id: '02' },
    { text: 'Modern Painting', id: '03' },
    { text: 'Ceramics', id: '04' },
    { text: 'Animation Art', id: '05' },
    { text: 'Oil Painting', id: '06' }];
  return (
    // specifies the tag to render the ListView component
    <ListViewComponent id="list" dataSource={arts} />
  );
}
export default App;

```

```ts
import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import './App.css';
function App() {
    // define the array of Json
    let arts = [
        { text: 'Artwork', id: '01' },
        { text: 'Abstract', id: '02' },
        { text: 'Modern Painting', id: '03' },
        { text: 'Ceramics', id: '04' },
        { text: 'Animation Art', id: '05' },
        { text: 'Oil Painting', id: '06' }
    ];
    return (
    // specifies the tag to render the ListView component
    <ListViewComponent id="list" dataSource={arts}/>);
}
export default App;
```

## Running the application

Run the `npm run dev` command in the console to start the development server. This command compiles the application and serves it locally, allowing it to open in the browser.

```
npm run dev
```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/listview/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/listview/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/getting-started-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/getting-started-cs1" %}

> Refer to the [React ListView](https://www.syncfusion.com/react-components/react-listview) feature tour page to explore feature highlights. For practical implementation details and configuration options, see the [React ListView example](https://ej2.syncfusion.com/react/demos/#/tailwind3/listview/default) to know how to render and configure the listview.

## See Also

[Data Binding Types](./data-binding)

[ListView customization](./customizing-templates)

[Virtualization](./virtualization)
