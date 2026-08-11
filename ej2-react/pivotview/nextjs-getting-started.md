---
layout: post
title: Getting Started with React Pivot Table in Next.js | Syncfusion
description: Learn how to get started with the React Pivot Table in a Next.js application. Explore setup, features, examples, and customization options.
control: Pivot Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Pivot Table in Next.js

This section explains how to set up a Next.js application and add the Syncfusion<sup style="font-size:70%">&reg;</sup> React [Pivot Table](https://www.syncfusion.com/react-components/react-pivot-table) component. Follow these steps to create a user-friendly web application with the Pivot Table for data analysis.

## What is Next.js?

[Next.js](https://nextjs.org/) is a React framework for building fast, SEO-friendly web applications. It provides server-side rendering, automatic code splitting, routing, and API routes. See the [Next.js documentation](https://nextjs.org/docs) for the full feature set.

## Prerequisites

> **Compatibility:** The Pivot Table component is provided by the `@syncfusion/ej2-react-pivotview` package (React 17+ supported). Verify the installed version matches the API surface you target.

To begin building a Next.js application with the Syncfusion<sup style="font-size:70%">&reg;</sup> React [Pivot Table](https://ej2.syncfusion.com/react/documentation/pivotview/getting-started), ensure the following requirements are met:

- [Node.js 18.17.0](https://nodejs.org/en) or later (LTS recommended). Verify your version with `node -v`.
- npm 9+ (bundled with Node.js 18.17+) or Yarn 1.22+.
- A compatible operating system, such as macOS, Windows, or Linux.
- This guide targets the Next.js App Router (Next.js 14 or later).

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

1. **Name your project**: You can specify the name of the project directly. For this guide, specify the project name as `ej2-nextjs-pivotview`.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? » ej2-nextjs-pivotview

{% endhighlight %}
{% endtabs %}

2. **Select the required packages**: Choose the configuration options for your project. Select **Yes, use recommended defaults** to use the recommended Next.js defaults (TypeScript, ESLint, Tailwind CSS, and the App Router). This guide assumes you select this option.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? » ej2-nextjs-pivotview
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

4. **Verify the installation**: Confirm Node.js and npm versions inside the new project.

```bash
node -v
npm -v
```

Your Next.js application is now set up and ready to include Syncfusion<sup style="font-size:70%">&reg;</sup> React components, such as the Pivot Table.

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

To use the Syncfusion<sup style="font-size:70%">&reg;</sup> React Pivot Table component, you need to install its npm package. The package is available on [npmjs.com](https://www.npmjs.com/search?q=ej2-react) and provides the necessary files to add the [Pivot Table component](https://www.syncfusion.com/react-components/react-pivot-table) to your Next.js application. Run one of the following commands to install the package:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-pivotview

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-pivotview

{% endhighlight %}
{% endtabs %}

The command installs the latest version of the Syncfusion React Pivot Table package and records it in your project's `dependencies` (the `--save` flag is the default since npm v5). Using Yarn achieves the same result with a different package manager.

> **Note:** The `@syncfusion/ej2-pivotview` core package is a dependency of `@syncfusion/ej2-react-pivotview` and is installed automatically. You can pin a specific version by appending `@<version>` to the package name (e.g., `@syncfusion/ej2-react-pivotview@20.x.x`).

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> React Pivot Table can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). Other supported themes include Material, Bootstrap 5, Fluent 2, and Tailwind 3. For more information, refer to the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

The following example demonstrates the installation of the `Tailwind 3` theme package from npm. Each component in this theme package includes an `index.css` file that automatically loads all required dependency styles.

To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

Import the `Tailwind 3` CSS styles for the Pivot Table component in the **app/globals.css** file. Remove any existing styles in that file before adding the import:

{% tabs %}
{% highlight css tabtitle="app/globals.css" %}

@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pivotview/index.css';

{% endhighlight %}
{% endtabs %}

> **App Router note:** The `@import` statement must be in a global stylesheet that Next.js can pick up. `app/globals.css` is the recommended location, imported once from `app/layout.tsx`.

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> React Pivot Table component

1. First, create the file `app/datasource.ts`. This file will hold the data for the Pivot Table component. Add the following sample data to populate the table:

{% tabs %}
{% highlight ts tabtitle="datasource.ts" %}

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

2. Next, update the **app/page.tsx** file to import and set up the Pivot Table component. This step connects the data and configures the table's report settings.

> **Note:** Remove all existing code in the **app/page.tsx** file and replace it with the code below to avoid conflicts with default Next.js template code. When using the Next.js App Router, the **app/page.tsx** file must be a client component to use Syncfusion interactive features. The `'use client'` directive at the top of the file enables this.

> **About `Inject`:** Optional services such as the field list and calculated field are registered through the `<Inject services={...} />` element. Top-level props like `showFieldList` and `allowCalculatedField` toggle the corresponding features. Both must be configured together.

{% tabs %}
{% highlight ts tabtitle="page.tsx" %}

'use client';

import { CalculatedField, FieldList, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { pivotData } from './datasource';

export default function Home() {
  const dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    drilledMembers: [{ name: 'Country', items: ['Germany'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  };

  return (
    <>
      <h2>Syncfusion React Pivot Table Component</h2>
      <PivotViewComponent id="PivotView" height={350} dataSourceSettings={dataSourceSettings} allowCalculatedField={true} showFieldList={true}>
        <Inject services={[CalculatedField, FieldList]} />
      </PivotViewComponent>
    </>
  );
}

{% endhighlight %}
{% endtabs %}

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

Open your browser and navigate to `http://localhost:3000` to view the running application. By default, the dev server listens on port `3000`; pass `-p <port>` (for example, `npm run dev -- -p 4000`) to use a different port.

> **Troubleshooting:** If the dev server fails to start, check the terminal for compile errors, ensure all dependencies are installed (`npm install` again if needed), and confirm that Node.js 18.17.0+ is on your `PATH` (`node -v`). For more information about the functionality of the Pivot Table component, refer to the [Pivot Table getting started](https://ej2.syncfusion.com/react/documentation/pivotview/getting-started) page.

## Resources

* [Next.js Pivot Table sample on GitHub](https://github.com/SyncfusionExamples/ej2-nextjs-pivotview) — Full source of the application built in this guide.
* [Live Next.js Pivot Table demos](https://ej2.syncfusion.com/react/demos/#/tailwind3/pivot-table/overview) — Browse interactive samples and customize them.
* [Next.js documentation](https://nextjs.org/docs) — Reference for App Router, layouts, and server actions.

## See Also

* [Getting started with the React Pivot Table](./getting-started) — Generic setup (not Next.js specific).
* [Data binding in React Pivot Table](./data-binding) — Configure relational and OLAP data sources.
* [Performance best practices](./performance-best-practices) — Tips for large datasets and server-side rendering.
