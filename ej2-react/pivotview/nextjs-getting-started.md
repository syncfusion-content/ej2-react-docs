---
layout: post
title: React Pivot Table getting started with Next.js | Syncfusion
description: Check out and learn here all about how to use the Syncfusion React UI components in the Next.js project.
control: Next.js
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Creating a Next.js Application Using Syncfusion<sup style="font-size:70%">&reg;</sup> React Components 

This section provides a step-by-step guide for setting up a Next.js application and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> React Pivot Table component.

## What is Next.js?

[Next.js](https://nextjs.org/) is a React framework that makes it easy to build fast, SEO-friendly, and user-friendly web applications. It provides features such as server-side rendering, automatic code splitting, routing, and API routes, making it an excellent choice for building modern web applications.

## Prerequisites

Before getting started with the Next.js application, ensure the following prerequisites are met:

* [Node.js 16.8](https://nodejs.org/en) or later.

* The application is compatible with macOS, Windows, and Linux operating systems.

## Create a Next.js application

To create a new `Next.js` application, use one of the commands that are specific to either NPM or Yarn.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx create-next-app@latest

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create next-app

{% endhighlight %}
{% endtabs %}

Using one of the above commands will lead you to set up additional configurations for the project as below:

1.Define the project name: Users can specify the name of the project directly. Let's specify the name of the project as `ej2-nextjs-pivotview`.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? » ej2-nextjs-pivotview

{% endhighlight %}
{% endtabs %}

2.Select the required packages.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? ... ej2-nextjs-pivotview
√ Would you like to use TypeScript? ... No / `Yes`
√ Would you like to use ESLint? ... No / `Yes`
√ Would you like to use Tailwind CSS? ... `No` / Yes
√ Would you like to use `src/` directory? ... No / `Yes`
√ Would you like to use App Router? (recommended) ... No / `Yes`
√ Would you like to customize the default import alias? ... `No`/ Yes
Creating a new Next.js app in D:\ej2-nextjs-pivotview.

{% endhighlight %}
{% endtabs %}

3.Once complete the above mentioned steps to create `ej2-nextjs-pivotview`, navigate to the directory using the below command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-nextjs-pivotview

{% endhighlight %}
{% endtabs %}

The application is ready to run with default settings. Now, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the project, install the corresponding npm package.

Here, the [React Pivot Table component](https://www.syncfusion.com/react-components/react-pivot-table) is used in the project. To install the React Pivot Table component, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

 npm install @syncfusion/ej2-react-pivotview --save

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-pivotview

{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> React components come with [built-in themes](https://ej2.syncfusion.com/react/documentation/appearance/theme/), which are available in the installed packages. It’s easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> React components to match the style of your application by referring to one of the built-in themes.

Import the `Material` theme into the **src/app/globals.css** file and removed the existing styles in that file, as shown below:

{% tabs %}
{% highlight css tabtitle="globals.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import '../../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-react-pivotview/styles/material.css';

{% endhighlight %}
{% endtabs %}

> To know more about built-in themes and CSS reference for individual components, refer to the [themes](https://ej2.syncfusion.com/react/documentation/appearance/theme/) section.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React component

Follow the below steps to add the React Pivot Table component to the Next.js project:

1.Before adding the Pivot Table component to your markup, create a `datasource.tsx` file within the **src/app/** folder and add the Pivot Table component data.

{% tabs %}
{% highlight ts tabtitle="datasource.tsx" %}

export let pivotData: object[] = [
    { 'In_Stock': 42, 'Sold': 80, 'Amount': 2460, 'Country': 'Germany', 'Product_Categories': 'Accessories', 'Products': 'Hydration Packs', 'Order_Source': 'Retail Outlets', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'In_Stock': 19, 'Sold': 16, 'Amount': 184, 'Country': 'Germany', 'Product_Categories': 'Accessories', 'Products': 'Fenders', 'Order_Source': 'Retail Outlets', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'In_Stock': 36, 'Sold': 25, 'Amount': 188, 'Country': 'Germany', 'Product_Categories': 'Accessories', 'Products': 'Bottles and Cages', 'Order_Source': 'Retail Outlets', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'In_Stock': 6, 'Sold': 51, 'Amount': 229.5, 'Country': 'Germany', 'Product_Categories': 'Accessories', 'Products': 'Cleaners', 'Order_Source': 'Retail Outlets', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'In_Stock': 47, 'Sold': 337, 'Amount': 1110, 'Country': 'Germany', 'Product_Categories': 'Clothing', 'Products': 'Vests', 'Order_Source': 'App Store', 'Year': 'FY 2017', 'Quarter': 'Q4' },
    { 'In_Stock': 14, 'Sold': 535, 'Amount': 10165, 'Country': 'United States', 'Product_Categories': 'Accessories', 'Products': 'Tires and Tubes', 'Order_Source': 'App Store', 'Year': 'FY 2017', 'Quarter': 'Q4' },
    { 'In_Stock': 47, 'Sold': 405, 'Amount': 3037.5, 'Country': 'United States', 'Product_Categories': 'Accessories', 'Products': 'Bottles and Cages', 'Order_Source': 'App Store', 'Year': 'FY 2017', 'Quarter': 'Q4' },
    { 'In_Stock': 14, 'Sold': 385, 'Amount': 11646.25, 'Country': 'United States', 'Product_Categories': 'Accessories', 'Products': 'Hydration Packs', 'Order_Source': 'App Store', 'Year': 'FY 2017', 'Quarter': 'Q4' },
    { 'In_Stock': 11, 'Sold': 426, 'Amount': 1704, 'Country': 'United States', 'Product_Categories': 'Accessories', 'Products': 'Cleaners', 'Order_Source': 'App Store', 'Year': 'FY 2017', 'Quarter': 'Q4' },
    { 'In_Stock': 13, 'Sold': 392, 'Amount': 5989.76, 'Country': 'United States', 'Product_Categories': 'Accessories', 'Products': 'Helmets', 'Order_Source': 'App Store', 'Year': 'FY 2017', 'Quarter': 'Q4' },
    { 'In_Stock': 9, 'Sold': 426, 'Amount': 4686, 'Country': 'United States', 'Product_Categories': 'Accessories', 'Products': 'Fenders', 'Order_Source': 'App Store', 'Year': 'FY 2017', 'Quarter': 'Q4' }
];

{% endhighlight %}
{% endtabs %}

2.Then, import and define the Pivot Table component in the **src/app/page.tsx** file, as shown below: 

{% tabs %}
{% highlight ts tabtitle="page.tsx" %}

'use client'
import { CalculatedField, FieldList, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { pivotData } from './datasource';

export default function Home() {
  const dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['Germany'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  };

  return (
    <>
      <h2>Syncfusion React Pivot Table Component</h2>
      <PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} allowCalculatedField={true} showFieldList={true}><Inject services={[CalculatedField, FieldList]} />
      </PivotViewComponent>
    </>
  )
}

{% endhighlight %}
{% endtabs %}

## Run the application

To run the application, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn run dev

{% endhighlight %}
{% endtabs %}

To learn more about the functionality of the Pivot Table component, refer to the [documentation](https://ej2.syncfusion.com/react/documentation/pivotview/getting-started#module-injection).

> [View the NEXT.js Pivot Table sample in the GitHub repository](https://github.com/SyncfusionExamples/ej2-nextjs-pivotview).
