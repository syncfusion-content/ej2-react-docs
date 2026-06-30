---
layout: post
title: React Grid - Next.js Getting Started | Syncfusion
description: React Grid Next.js getting started guides server-side rendering, dynamic imports, and setup steps to use the Grid component in Next.js applications.
control: Next.js
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Grid Component in the Next.js

<<<<<<< HEAD
This section provides a step-by-step guide for creating a Next.js application and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component.
=======
This section provides a step-by-step guide for creating a Next.js application and integrating the React Data Grid component.
>>>>>>> 8f3c51b893fb30a2292cc772a92ba38135a0569f

## What is Next.js?

[Next.js](https://nextjs.org) is a React framework that makes it easy to build fast, SEO-friendly, and user-friendly web applications. It provides features such as server-side rendering, automatic code splitting, routing, and API routes, making it an excellent choice for building modern web applications.

## Prerequisites

Before starting with Next.js, ensure the following prerequisites are met:

* [Node.js 16.8](https://nodejs.org/en) or later (verify your installed version using `node --version`).
* A compatible operating system: macOS, Windows, or Linux.

## Create a Next.js application

Use one of the following commands to create a new Next.js application (select either NPM or Yarn based on your package manager):

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx create-next-app@latest

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create next-app

{% endhighlight %}
{% endtabs %}

### Project configuration

The setup process will prompt for project configuration. Provide the following responses:

**Define the project name:**
Specify the project name as `ej2-nextjs-grid`.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? » ej2-nextjs-grid

{% endhighlight %}
{% endtabs %}

**Select the required packages:**

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? ... ej2-nextjs-grid
√ Would you like to use the recommended Next.js defaults? » No, customize settings
√ Would you like to use TypeScript? ... No / `Yes`
√ Which linter would you like to use? » ESLint
√ Would you like to use React Compiler? ... `No` / Yes
√ Would you like to use Tailwind CSS? ... `No` / Yes
√ Would you like your code inside a `src/` directory? ... No / `Yes`
√ Would you like to use App Router? (recommended) ... No / `Yes`
√ Would you like to customize the import alias (`@/*` by default)? ... `No` / Yes 
Creating a new Next.js app in D:\ej2-nextjs-grid.

{% endhighlight %}
{% endtabs %}

**Navigate to the project directory:**
After completing the above mentioned steps to create `ej2-nextjs-grid`, navigate to the directory using the below command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-nextjs-grid

{% endhighlight %}
{% endtabs %}

Once the setup is complete, the application is ready to be configured with Syncfusion<sup style="font-size:70%">&reg;</sup> components.

<<<<<<< HEAD
## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid packages
=======
## Adding React Data Grid packages
>>>>>>> 8f3c51b893fb30a2292cc772a92ba38135a0569f

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the project, install the corresponding npm package.

Here, the [React Grid component](https://www.syncfusion.com/react-components/react-data-grid) is used as an example. To install the React Grid component in the project, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-grids --save

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-grids

{% endhighlight %}
{% endtabs %}

## Adding CSS reference

Syncfusion<sup style="font-size:70%">&reg;</sup> React components come with [built-in themes](https://ej2.syncfusion.com/react/documentation/appearance/theme), which are available in the installed packages. It's easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> React components to match the style of your application by referring to one of the built-in themes.

Import the `Tailwind 3` theme into the **src/app/globals.css** file and remove the existing styles in that file, as shown below:

{% tabs %}
{% highlight css tabtitle="globals.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';  
@import '../../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';  
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';  
@import '../../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';  
@import '../../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import "../../node_modules/@syncfusion/ej2-react-grids/styles/tailwind3.css";

{% endhighlight %}
{% endtabs %}

> Refer to the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme) for information about other available themes and component-specific CSS references.

## Adding Grid component

The grid code should be added to the **src/app/page.tsx** file.

{% tabs %}
{% highlight ts tabtitle="page.tsx" %}

'use client'
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';

// Defines the data to be displayed in the Grid.
const data: object[] = [
    { OrderID: 10248, CustomerName: 'Ana Trujillo', OrderDate: new Date(2025, 0, 12), ShipCountry: 'France', Freight: 32.38 },
    { OrderID: 10249, CustomerName: 'Martin Sommer', OrderDate: new Date(2025, 0, 15), ShipCountry: 'Germany', Freight: 11.61 },
    { OrderID: 10250, CustomerName: 'Thomas Hardy', OrderDate: new Date(2025, 1, 5), ShipCountry: 'Brazil', Freight: 65.83 },
    { OrderID: 10251, CustomerName: 'Elizabeth Lincoln', OrderDate: new Date(2025, 1, 18), ShipCountry: 'France', Freight: 41.34 },
    { OrderID: 10252, CustomerName: 'Victoria Ashworth', OrderDate: new Date(2025, 2, 10), ShipCountry: 'Belgium', Freight: 51.30 },
    { OrderID: 10253, CustomerName: 'Martine Rance', OrderDate: new Date(2025, 2, 22), ShipCountry: 'Brazil', Freight: 58.17 },
]; 

export default function Home() {

    return (
    <>
      <h2>Syncfusion React Grid Component</h2>
      {/* Assigns the dataset to the Grid component */}
      <GridComponent dataSource={data} >
        {/* Define the columns to be displayed */}
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign='Right'/>
            <ColumnDirective field='CustomerName' headerText='Customer Name' width='100'/>
            <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format='yMd' textAlign='Right'/>
            <ColumnDirective field='Freight' width='100' format='C2' textAlign='Right'/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'/>
        </ColumnsDirective>     
      </GridComponent>
    </>
  )
}

{% endhighlight %}
{% endtabs %}

## Run the application

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn run dev

{% endhighlight %}
{% endtabs %}

> [View the NEXT.js Grid sample in the GitHub repository](https://github.com/SyncfusionExamples/ej2-nextjs-grid).

## See also

* [Grid Feature Modules](./module)
