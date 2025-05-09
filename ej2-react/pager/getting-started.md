---
layout: post
title: Getting started with React Pager component | Syncfusion
description:  Checkout and learn about Getting started with React Pager component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started

This section explains you the steps required to create a simple Pager and demonstrate the basic usage of the Pager component in React environment.

## Dependencies

Below is the list of minimum dependencies required to use the Pager.

```javascript
|-- @syncfusion/ej2-react-grids
    |-- @syncfusion/ej2-grids
```

## Setup for Local Development

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


## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install Pager component, use the following command

```
npm install @syncfusion/ej2-react-grids --save
```

## Adding CSS reference

 Add Pager component's styles as given below in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-react-grids/styles/material.css";
```

> To refer `App.css` in the application then import it in the `src/App.tsx` file.

## Adding Pager component

Now, you can start adding Pager component in the application. For getting started, add the Pager component in `src/App.tsx` file using following code.

Now place the below Pager code in the `src/App.tsx`.
Here the Pager is rendered with `totalRecordsCount` which is used to render numeric container.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import { PagerComponent } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
class App extends React.Component<{}, {}>{
    render() {
        return <PagerComponent totalRecordsCount = {20}>
        </PagerComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('pager'));
```

## Page Size

`pageSize` value defines the number of records to be displayed per page. The default value for the `pageSize` is 12.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/pager/pager-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/pager/pager-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pager/pager-cs1" %}

## Page sizes

The [pageSizes](https://ej2.syncfusion.com/react/documentation/api/pager/#pagesizes) property in the Syncfusion<sup style="font-size:70%">&reg;</sup> Pager component allows you to control the number of records displayed per page through a `DropDownList` integrated into the pager. This feature enhances the experience by providing flexibility in data viewing.

**Enabling Page Sizes**

To enable the `pageSizes` property, follow these steps:

1. Import the `PagerDropDown` and `Pager` modules from the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid package.

2. Inject the `PagerDropDown` into the `Pager` module to enable the `DropDownList` in the pager.

3. Configure the `pageSizes` property by setting it to either **true** or providing an array of custom values to define the available page size options.

The following example demonstrates how to include the `pageSizes` property in the pager component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/pager/pager-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/pager/pager-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pager/pager-cs4" %}

> When the `pageSizes` property is set to **true**, it utilizes the default values.

## Page Count

`pageCount` value defines the number of pages to be displayed in the pager component for navigation.
The default value for `pageCount` is 10 and value will be updated based on [`totalRecordsCount`](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel/#totalrecordscount) and [`pageSize`](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel/#pagesize) values.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/pager/pager-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/pager/pager-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pager/pager-cs2" %}

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

Output will be appears as follows.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/pager/pager-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/pager/pager-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pager/pager-cs3" %}