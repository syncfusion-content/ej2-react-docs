---
layout: post
title: React Pivot Table getting started with Next.js | Syncfusion
description: Check out and learn here all about how to use the Syncfusion React UI components in the Next.js project.
control: Next.js
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Creating a Next.js Application Using Syncfusion React Components 

This section explains how to set up a Next.js application and add the Syncfusion<sup style="font-size:70%">&reg;</sup> React [Pivot Table](https://www.syncfusion.com/react-components/react-pivot-table) component. Follow these steps to create a user-friendly web application with the Pivot Table for data analysis.

## What is Next.js?

[Next.js](https://nextjs.org/) is a React framework that makes it easy to build fast, SEO-friendly, and user-friendly web applications. It provides features such as server-side rendering, automatic code splitting, routing, and API routes, making it an excellent choice for building modern web applications.

## Prerequisites

To begin building a Next.js application with the Syncfusion<sup style="font-size:70%">&reg;</sup> React [Pivot Table](https://ej2.syncfusion.com/react/documentation/pivotview/getting-started), ensure the following requirements are met:

- [Node.js 18.17.0](https://nodejs.org/en) or later (LTS recommended).
- A compatible operating system, such as macOS, Windows, or Linux.

## Create a Next.js application

To start a new Next.js application, run one of the following commands using either NPM or Yarn. These commands set up a new project with the necessary files and structure.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx create-next-app@latest

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create next-app

{% endhighlight %}
{% endtabs %}

After running the command, you will be prompted to configure your project with the following steps:

1. **Name your project**: Users can specify the name of the project directly. Let's specify the name of the project as `ej2-nextjs-pivotview`.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? » ej2-nextjs-pivotview

{% endhighlight %}
{% endtabs %}

2. **Select the required packages**: Choose the configuration options for your project. Select **Yes** to use default packages in the application.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? ... ej2-nextjs-pivotview
? Would you like to use the recommended Next.js defaults?
>   Yes, use recommended defaults - TypeScript, ESLint, Tailwind CSS, App Router
    No, reuse previous settings
    No, customize settings

{% endhighlight %}
{% endtabs %}

After running the above commands, the project will be created and all required dependencies will be installed automatically.

3. **Navigate to the project folder**: Once the setup is complete, move to the project directory using the command below:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-nextjs-pivotview

{% endhighlight %}
{% endtabs %}

Your Next.js application is now set up and ready to include Syncfusion<sup style="font-size:70%">&reg;</sup> React components, such as the Pivot Table.

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

To use the Syncfusion<sup style="font-size:70%">&reg;</sup> React Pivot Table component, you need to install its npm package. The package is available on [npmjs.com](https://www.npmjs.com/search?q=ej2-react) and provides the necessary files to add the [Pivot Table component](https://www.syncfusion.com/react-components/react-pivot-table) to your Next.js application. Run one of the following commands to install the package:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-pivotview --save

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-pivotview

{% endhighlight %}
{% endtabs %}

The provided code installs the Syncfusion React Pivot Table package. The `--save` flag in the npm command ensures the package is added to your project's dependencies. Using yarn achieves the same result with a different package manager.

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> React components include [built-in themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) that you can easily apply to style your Pivot Table. These themes are available in the installed Syncfusion packages and can be imported to match your application's look. To use the **Tailwind 3** theme, import its CSS files into the **app/globals.css** file after removing any existing styles, as shown below:

{% tabs %}
{% highlight css tabtitle="globals.css" %}

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

> To know more about built-in themes and CSS reference for individual components, refer to the [themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) section.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React component

This section guides you through adding the Syncfusion<sup style="font-size:70%">&reg;</sup> React Pivot Table component to your Next.js project. Follow these steps to set up the data and display the component in your application.

1. First, create a file named `datasource.tsx` in the **app/** folder. This file will hold the data for the Pivot Table component. Add the following sample data to populate the table:

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

2. Next, update the **app/page.tsx** file to import and set up the Pivot Table component. This step connects the data and configures the table’s report settings. Use the following code to define the component:

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

> NOTE: When using the Next.js App Router, the **app/page.tsx** file must be a client component to use Syncfusion interactive features. So the code includes `'use client'` at the top of the file.

## Run the application

To start your Next.js application with the Syncfusion React Pivot Table, run the following command in your project directory:

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
