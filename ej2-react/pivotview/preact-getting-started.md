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

Ensure [Node.js](https://nodejs.org/en) LTS and a package manager (`npm` or `yarn`) are installed before starting.

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

Choose `JavaScript` as the project language.

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

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-react). This article uses the [React Pivot Table component](https://www.syncfusion.com/react-components/react-pivot-table) as an example. To use the React Pivot Table component in the project, install the `@syncfusion/ej2-react-pivotview` package using the following command:

```bash
npm install @syncfusion/ej2-react-pivotview --save
```

or

```bash
yarn add @syncfusion/ej2-react-pivotview
```

## Adding CSS reference

Themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> React Pivot Table can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, refer to the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

The following example demonstrates the installation of the `Tailwind 3` theme package from npm. Each component in this theme package includes an `index.css` file that automatically loads all required dependency styles.

To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

By default, Preact projects include a `src/style.css` file with default styles. These default styles may conflict with Syncfusion component styles. Replace the contents of `src/style.css` with the following import to apply the Pivot Table theme styles:

{% tabs %}
{% highlight css tabtitle="~/src/style.css" %}

@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pivotview/index.css';

{% endhighlight %}
{% endtabs %}

## Adding Pivot Table component

The Pivot Table code should be placed in the **src/index.jsx** file.

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

Once the dev server starts, open `http://localhost:5173` in your browser to view the rendered Pivot Table, which displays sales data grouped by Country/Products on rows and Year/Quarter on columns with Sold Amount and Units Sold values.

## See also

* [React Pivot Table Getting Started](./getting-started)
* [Getting Started with Next.js](./nextjs-getting-started)
* [Data Binding](./data-binding)
* [Field List](./field-list)
* [Grouping Bar](./grouping-bar)
