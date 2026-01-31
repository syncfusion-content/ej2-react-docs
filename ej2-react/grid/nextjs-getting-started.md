---
layout: post
title: React Grid getting started with Next.js | Syncfusion
description: Check out and learn about how to use Syncfusion React UI components in the Next.js project.
control: Next.js
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Creating a Next.js Application Using Syncfusion<sup style="font-size:70%">&reg;</sup> React Components

This section provides a step-by-step guide for creating a Next.js application and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component.

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

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

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

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> React components come with [built-in themes](https://ej2.syncfusion.com/react/documentation/appearance/theme), which are available in the installed packages. It’s easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> React components to match the style of your application by referring to one of the built-in themes.

Import the `Material` theme into the **src/app/globals.css** file and remove the existing styles in that file, as shown below:

{% tabs %}
{% highlight css tabtitle="globals.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../../node_modules/@syncfusion/ej2-react-grids/styles/material.css";

{% endhighlight %}
{% endtabs %}

> Refer to the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme) for information about other available themes and component-specific CSS references.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React component

Follow the below steps to add the React Grid component to the Next.js project:

**Step 1: Create a datasource file**

Create a `datasource.tsx` file in the **src/app/** folder and add the sample data for the Grid component:

{% tabs %}
{% highlight ts tabtitle="datasource.tsx" %}

export let data: Object[] = [
    {
        OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
        ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
        ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
    },
    {
        OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
        ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
        ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
    },
    {
        OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
    },
    {
        OrderID: 10251, CustomerID: 'VICTE', EmployeeID: 3, OrderDate: new Date(8367642e5),
        ShipName: 'Victuailles en stock', ShipCity: 'Lyon', ShipAddress: '2, rue du Commerce',
        ShipRegion: 'CJ', ShipPostalCode: '69004', ShipCountry: 'France', Freight: 41.34, Verified: !0
    },
    {
        OrderID: 10252, CustomerID: 'SUPRD', EmployeeID: 4, OrderDate: new Date(8368506e5),
        ShipName: 'Suprêmes délices', ShipCity: 'Charleroi', ShipAddress: 'Boulevard Tirou, 255',
        ShipRegion: 'CJ', ShipPostalCode: 'B-6000', ShipCountry: 'Belgium', Freight: 51.3, Verified: !0
    },
    {
        OrderID: 10253, CustomerID: 'HANAR', EmployeeID: 3, OrderDate: new Date(836937e6),
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 58.17, Verified: !0
    },
    {
        OrderID: 10254, CustomerID: 'CHOPS', EmployeeID: 5, OrderDate: new Date(8370234e5),
        ShipName: 'Chop-suey Chinese', ShipCity: 'Bern', ShipAddress: 'Hauptstr. 31',
        ShipRegion: 'CJ', ShipPostalCode: '3012', ShipCountry: 'Switzerland', Freight: 22.98, Verified: !1
    },
    {
        OrderID: 10255, CustomerID: 'RICSU', EmployeeID: 9, OrderDate: new Date(8371098e5),
        ShipName: 'Richter Supermarkt', ShipCity: 'Genève', ShipAddress: 'Starenweg 5',
        ShipRegion: 'CJ', ShipPostalCode: '1204', ShipCountry: 'Switzerland', Freight: 148.33, Verified: !0
    },
    {
        OrderID: 10256, CustomerID: 'WELLI', EmployeeID: 3, OrderDate: new Date(837369e6),
        ShipName: 'Wellington Importadora', ShipCity: 'Resende', ShipAddress: 'Rua do Mercado, 12',
        ShipRegion: 'SP', ShipPostalCode: '08737-363', ShipCountry: 'Brazil', Freight: 13.97, Verified: !1
    },
    {
        OrderID: 10257, CustomerID: 'HILAA', EmployeeID: 4, OrderDate: new Date(8374554e5),
        ShipName: 'HILARION-Abastos', ShipCity: 'San Cristóbal', ShipAddress: 'Carrera 22 con Ave. Carlos Soublette #8-35',
        ShipRegion: 'Táchira', ShipPostalCode: '5022', ShipCountry: 'Venezuela', Freight: 81.91, Verified: !0
    },
    {
        OrderID: 10258, CustomerID: 'ERNSH', EmployeeID: 1, OrderDate: new Date(8375418e5),
        ShipName: 'Ernst Handel', ShipCity: 'Graz', ShipAddress: 'Kirchgasse 6',
        ShipRegion: 'CJ', ShipPostalCode: '8010', ShipCountry: 'Austria', Freight: 140.51, Verified: !0
    },
    {
        OrderID: 10259, CustomerID: 'CENTC', EmployeeID: 4, OrderDate: new Date(8376282e5),
        ShipName: 'Centro comercial Moctezuma', ShipCity: 'México D.F.', ShipAddress: 'Sierras de Granada 9993',
        ShipRegion: 'CJ', ShipPostalCode: '05022', ShipCountry: 'Mexico', Freight: 3.25, Verified: !1
    },
    {
        OrderID: 10260, CustomerID: 'OTTIK', EmployeeID: 4, OrderDate: new Date(8377146e5),
        ShipName: 'Ottilies Käseladen', ShipCity: 'Köln', ShipAddress: 'Mehrheimerstr. 369',
        ShipRegion: 'CJ', ShipPostalCode: '50739', ShipCountry: 'Germany', Freight: 55.09, Verified: !0
    },
    {
        OrderID: 10261, CustomerID: 'QUEDE', EmployeeID: 4, OrderDate: new Date(8377146e5),
        ShipName: 'Que Delícia', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua da Panificadora, 12',
        ShipRegion: 'RJ', ShipPostalCode: '02389-673', ShipCountry: 'Brazil', Freight: 3.05, Verified: !1
    },
    {
        OrderID: 10262, CustomerID: 'RATTC', EmployeeID: 8, OrderDate: new Date(8379738e5),
        ShipName: 'Rattlesnake Canyon Grocery', ShipCity: 'Albuquerque', ShipAddress: '2817 Milton Dr.',
        ShipRegion: 'NM', ShipPostalCode: '87110', ShipCountry: 'USA', Freight: 48.29, Verified: !0
    }
];

{% endhighlight %}
{% endtabs %}

**Step 2: Define the Grid component**

Import and configure the Grid component with the [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid#datasource) property, column definitions, and required modules in the **src/app/page.tsx** file: 

{% tabs %}
{% highlight ts tabtitle="page.tsx" %}

'use client'
import {
  ColumnDirective, ColumnsDirective, GridComponent,
  Inject, Page, Sort, Filter, Group
} from '@syncfusion/ej2-react-grids';
import { data } from "./datasource";

export default function Home() {
  const pageSettings: object = { pageSize: 6 };
  const filterSettings: object = { type: 'Excel' };
  return (
    <>
      <h2>Syncfusion React Grid Component</h2>
      <GridComponent
        dataSource={data}
        allowGrouping={true}
        allowSorting={true}
        allowFiltering={true}
        allowPaging={true}
        pageSettings={pageSettings}
        filterSettings={filterSettings}
        height={180}
      >
        <ColumnsDirective>
          <ColumnDirective field="OrderID" width="100" textAlign="Right" />
          <ColumnDirective field="CustomerID" width="100" />
          <ColumnDirective field="EmployeeID" width="100" textAlign="Right" />
          <ColumnDirective
            field="Freight"
            width="100"
            format="C2"
            textAlign="Right"
          />
          <ColumnDirective field="ShipCountry" width="100" />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group]} />
      </GridComponent>
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

To learn more about the functionality of the Grid component, refer to the [documentation](https://ej2.syncfusion.com/react/documentation/grid/getting-started#module-injection).

> [View the NEXT.js Grid sample in the GitHub repository](https://github.com/SyncfusionExamples/ej2-nextjs-grid).
