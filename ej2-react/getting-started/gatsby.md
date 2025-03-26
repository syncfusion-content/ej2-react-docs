---
layout: post
title: React getting started with Gatsby | Syncfusion
description: Check out and learn about how to create an application with Syncfusion React UI components in Gatsby framework.
control: Gatsby
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion React Components in the Gatsby project

This article provides a step-by-step guide for setting up a [Gatsby](https://www.gatsbyjs.com/) project and integrating the Syncfusion React components.

`Gatsby` is an open-source framework built on React that enables developers to create fast, modern websites and web applications. It combines the finest elements of React, GraphQL, and modern JavaScript to build a fast and scalable website.

## Prerequisites

[System requirements for Syncfusion React UI components](../system-requirement)

## Set up the Gatsby project

To create a new `Gatsby` project, use one of the commands that are specific to either NPM or Yarn.

```bash
npm create gatsby
```

or

```bash
yarn create gatsby
```

Using one of the above commands will lead you to set up additional configurations for the project, as below:

Define the project name: We can specify the name of the project directly. Let's specify the name of the project as `my-project` for this article.

```bash
What would you like to call your site?
√ · my-project
What would you like to name the folder where your site will be created?
√ / my-project
√ Will you be using JavaScript or TypeScript?       
· TypeScript
√ Will you be using a CMS?
· No (or I'll add it later)
√ Would you like to install a styling system?
· No (or I'll add it later)
√ Would you like to install additional features with other plugins?No items were selected


Thanks! Here's what we'll now do:

    Create a new Gatsby site in the folder my-project

? Shall we do this? (Y/n) » Yes
```

Upon completing the aforementioned steps to create `my-project`, run the following command to jump into the project directory:

```bash
cd my-project
```

Now that `my-project` is ready to run with default settings, let's add Syncfusion components to the project.

## Add Syncfusion React packages

Syncfusion React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion React components in the project, install the corresponding npm package.

This article uses the [React Grid component](https://www.syncfusion.com/react-components/react-data-grid) as an example. To use the React Grid component in the project, the `@syncfusion/ej2-react-grids` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-react-grids --save
```

or

```bash
yarn add @syncfusion/ej2-react-grids
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion React component in various ways, such as using CSS or SASS styles from npm packages, CDN, CRG and [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/react/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to theme's in a React project.

In this article, the `Material 3` theme is applied using CSS styles, which are available in installed packages. The necessary `Material 3` CSS styles for the Grid component and its dependents were imported into the **src/pages/style.css** file.

{% tabs %}
{% highlight css tabtitle="~/src/pages/style.css" %}

@import "../../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../../node_modules/@syncfusion/ej2-react-grids/styles/material3.css";

{% endhighlight %}
{% endtabs %}

> The order of importing CSS styles should be in line with its dependency graph.

## Add Syncfusion React component

Follow the below steps to add the React Grid component to the Vite project:

1\. Before adding the Grid component to your markup, import the Grid component in the **src/pages/index.tsx** file.

{% tabs %}
{% highlight js tabtitle="~/src/pages/index.tsx" %}

import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';

{% endhighlight %}
{% endtabs %}

2\. Then, define the Grid component with the [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid#datasource) property and column definitions. Declare the values for the `dataSource` property.

{% tabs %}
{% highlight js tabtitle="~/src/pages/index.tsx" %}

import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
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
        <ColumnDirective field='OrderID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' width='100' />
        <ColumnDirective field='EmployeeID' width='100' textAlign="Right" />
        <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right" />
        <ColumnDirective field='ShipCountry' width='100' />
      </ColumnsDirective>
    </GridComponent>
  );
}

export default App;

{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run develop
```

or

```bash
yarn run develop
```

The output will appear as follows:

![gatsby](../appearance/images/gatsby.png)

## See also

[Getting Started with the Syncfusion React UI Component](../getting-started/quick-start)
