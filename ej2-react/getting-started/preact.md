---
layout: post
title: React getting started with Preact | Syncfusion
description: Check out and learn about how to create and integrate Syncfusion React UI components in Preact project.
control: Preact
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion® React Components in Preact

This article outlines the steps required to set up a [Preact](https://preactjs.com/) project and integrate Syncfusion<sup style="font-size:70%">&reg;</sup> React components.

`Preact` is a fast, lightweight JavaScript library that provides a modern API similar to React. It is optimized for minimal file size and fast performance, making it well-suited for projects where load time and bundle size are important.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](../system-requirement)

## Set up the Preact project

To create a new `Preact` project, use one of the following npm or yarn commands.

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm init preact@latest

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn create preact

{% endhighlight %}
{% endtabs %}

After running one of the above commands, you'll be prompted to configure the project as follows:

**Step 1: Define the project name** - You can specify the name of the project directly. Let's specify the name of the project as `my-project` for this article.

```bash
T  Preact - Fast 3kB alternative to React with the same modern API
|
*  Project directory:
|  my-project
—      
```

**Step 2: Choose the project language** - Select `JavaScript` as the project language to build this Preact project.

```bash
T  Preact - Fast 3kB alternative to React with the same modern API
|
*  Project language:
|  > JavaScript
|    TypeScript
—
```

**Step 3: Configure project options** - Configure the project as shown below for this article.

```bash
T  Preact - Fast 3kB alternative to React with the same modern API
|
*  Use router?
|    Yes / > No
—
|
*  Prerender app (SSG)?
|    Yes / > No
—
|
*  Use ESLint?
|    Yes / > No
—
```

**Step 4: Navigate to the project directory** - After completing the above steps to create `my-project`, navigate to the project directory using the following command:

```bash
cd my-project
```

Ensure your HTML has a mount point for the app. For example, in `index.html` add:
```html
<div id="app"></div>
```

Now that `my-project` is ready to run with default settings, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the project, install the corresponding npm package.

This guide uses the [React Grid component](https://www.syncfusion.com/react-components/react-data-grid) as an example. To install the React Grid component package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-react-grids --save

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-react-grids

{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> React components can be applied using CSS or SASS from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages). Additionally, themes can be loaded via CDN or customized using the [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, refer to the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

This example uses the Tailwind 3 theme for the Grid component from the theme package. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

The required styles for the Grid component are imported in the **src/style.css** file:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/grid/index.css";

{% endhighlight %}
{% endtabs %}

## Add a Syncfusion<sup style="font-size:70%">&reg;</sup> React component

Follow these steps to add the React Grid component to the Preact project:

**Step 1:** Import the Grid component and its required directives in the **src/index.jsx** file.

{% tabs %}
{% highlight js tabtitle="~/src/index.jsx" %}

import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';

{% endhighlight %}
{% endtabs %}

**Step 2:** Define the Grid component with the [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid#datasource) property and column definitions. Declare the values for the `dataSource` property.

{% tabs %}
{% highlight js tabtitle="~/src/index.jsx" %}

import { render } from 'preact';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import './style.css';

export function App() {
  const data = [
    {
      OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, ShipCountry: 'France', Freight: 32.38
    },
    {
      OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, ShipCountry: 'Germany', Freight: 11.61
    },
    {
      OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, ShipCountry: 'Brazil', Freight: 65.83
    }
  ];
  return (
    <GridComponent dataSource={data}>
      <ColumnsDirective>
          <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
          <ColumnDirective field='CustomerID' width='100'/>
          <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
          <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
          <ColumnDirective field='ShipCountry' width='100'/>
      </ColumnsDirective>
    </GridComponent>
  );
}

render(<App />, document.getElementById('app'));

{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn run dev

{% endhighlight %}
{% endtabs %}

The output will appear as follows:

![preact](../appearance/images/preact.png)

## See also

[Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> React UI Components](./vite)
