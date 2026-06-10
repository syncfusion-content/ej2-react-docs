---
layout: post
title: React Pivot Table in Preact | Syncfusion
description: Set up React Pivot Table in Preact. Lightweight framework alternative, step-by-step guide, npm install, CSS, full features, code examples.
control: Preact
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# React Pivot Table in Preact

This article provides a step-by-step guide for setting up a [Preact](https://preactjs.com) project and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> React Pivot Table component.

`Preact` is a fast and lightweight JavaScript library for building user interfaces. It's often used as an alternative to larger frameworks like React. The key difference is that Preact is designed to be smaller in size and faster in performance, making it a good choice for projects where file size and load times are critical factors. 

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](../system-requirement)

## Set up the Preact project

Create a new Preact project using the initialization command:

```bash
npm init preact
```

or

```bash
yarn init preact
```

Using one of the above commands will lead you to set up additional configurations for the project, as below:

**Project name**

Specify the project name as `my-project`.

```bash
T  Preact - Fast 3kB alternative to React with the same modern API
|
*  Project directory:
|  my-project
—      
```

**Project language**

Choose `JavaScript` as the framework variant to build this Preact project using JavaScript and React.

```bash
T  Preact - Fast 3kB alternative to React with the same modern API
|
*  Project language:
|  > JavaScript
|    TypeScript
—
```
**Configuration options**

Respond to the following prompts with the default selections:

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

**Navigate to project**

Once setup is complete, navigate to your project directory:

```bash
cd my-project
```

Now that `my-project` is ready to run with default settings, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> React Pivot Table packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-react). This article uses the [React Pivot Table component](https://www.syncfusion.com/react-components/react-pivot-table) as an example. To use the React Pivot Table component in the project, the `@syncfusion/ej2-react-pivotview` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-react-pivotview --save
```

or

```bash
yarn add @syncfusion/ej2-react-pivotview
```

>Before including Syncfusion styles, make sure to remove the default styles defined in **index.css**. This helps prevent unintended style overrides and ensures that Syncfusion components render correctly.

## Adding CSS reference

You can import themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> React component in various ways, such as using CSS or SASS styles from npm packages, CDN, CRG and [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/react/documentation/appearance/theme) to know more about built-in themes and different ways to refer to theme's in a React project.

In this article, the `Material 3` theme is applied using CSS styles, which are available in installed packages. The necessary `Material 3` CSS styles for the Pivot Table component and its dependents were imported into the **src/style.css** file.

{% tabs %}
{% highlight css tabtitle="~/src/style.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-react-pivotview/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

## Adding Pivot Table component

The pivot table code should be added to the **src/index.jsx** file.

{% tabs %}
{% highlight js tabtitle="~/src/index.jsx" %}

import { render } from 'preact';

import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import './style.css';

let pivotData = [
	{ 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q1' },
	{ 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q2' },
	{ 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q3' },
	{ 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q4' }
];

export function App() {
	const dataSourceSettings = {
		columns: [{ name: 'Year' }, { name: 'Quarter' }],
		dataSource: pivotData,
		expandAll: true,
		formatSettings: [{ name: 'Amount', format: 'C0' }],
		rows: [{ name: 'Country' }, { name: 'Products' }],
		values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }]
	};
	return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings}>
	</PivotViewComponent>);
}

render(<App />, document.getElementById('app'));

{% endhighlight %}
{% endtabs %}

## Run the project

```bash
npm run dev
```

or

```bash
yarn run dev
```

## See also

* [Getting Started with Next.js](./nextjs-getting-started)
* [Data Binding](./data-binding)
* [Field List](./field-list)
* [Grouping Bar](./grouping-bar)
