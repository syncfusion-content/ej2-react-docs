---
layout: post
title: React remix app with React Getting started component | Syncfusion
description:  Checkout and learn about React remix app with React Getting started component of Syncfusion Essential JS 2 and more details.
control: React remix app 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Create React Remix App with Syncfusion<sup style="font-size:70%">&reg;</sup> Components

This document helps you to create a simple Remix application with React Framework and Syncfusion<sup style="font-size:70%">&reg;</sup> React components.

## Prerequisites

Before getting started with Syncfusion<sup style="font-size:70%">&reg;</sup> React Components with Remix project, check whether the following are installed in the developer machine.

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](../system-requirement)

## Benefits to using Remix

### Nested pages

The pages inside `./routes` folder is nested in the route where you can embed these components into the parent page. It reduces the loading time of the page.

### Error boundaries

If you get an error in a nested route or a Remix component, the errors are limited and the component will fail to render, but it doesn't break the entire page.

### Transition

Remix automatically handles all loading states, you have to do is tell Remix what to show when the app is loading.

## Create Remix application

To setup basic Remix sample, use the following commands.

```
npx create-remix@latest
```

`create-remix@latest` command create the remix app with latest version of packages.

When you run this command, You will be asked the following questions.

```
dir  :: Where should we create your new project?
        quick-start

        ◼  Using basic template See https://remix.run/guides/templates for more
        ✔  Template copied

git  :: Initialize a new git repository?
        No

deps :: Install dependencies with npm?
        Yes
```

Then run the following command to jump into the project directory:

```
cd quick-start
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Grid packages

All the available Syncfusion<sup style="font-size:70%">&reg;</sup> React packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. To install React Grid component, use the following command

```
npm install @syncfusion/ej2-react-grids --save
```

> The --save will instruct NPM to include the Grid package inside of the dependencies section of the `package.json`.

## Adding CSS reference

Reference themes for Syncfusion<sup style="font-size:70%">&reg;</sup> components in the `~/app/routes/_index.tsx` as CSS reference.

```ts
import '@syncfusion/ej2-base/styles/material3.css';
import '@syncfusion/ej2-buttons/styles/material3.css';
import '@syncfusion/ej2-calendars/styles/material3.css';
import '@syncfusion/ej2-dropdowns/styles/material3.css';
import '@syncfusion/ej2-inputs/styles/material3.css';
import '@syncfusion/ej2-navigations/styles/material3.css';
import '@syncfusion/ej2-popups/styles/material3.css';
import '@syncfusion/ej2-splitbuttons/styles/material3.css';
import '@syncfusion/ej2-notifications/styles/material3.css';
import '@syncfusion/ej2-react-grids/styles/material3.css';
```

## Adding SSR configuration

To use Syncfusion<sup style="font-size:70%">&reg;</sup> packages in Server-Side Rendering (SSR) with Vite, you'll need to update the `vite.config.ts` file. This ensures that the Syncfusion<sup style="font-size:70%">&reg;</sup> packages are properly transpiled to be compatible with the server environment.

```ts
import { defineConfig } from "vite";

export default defineConfig({
  ...
  ssr: {
    noExternal: [/@syncfusion/]
  },
  ...
});
```

## Adding React Grid component

Now, you can add Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the Remix application. For getting started, add the React Grid component in `~/app/routes/_index.tsx` file using following code.

{% tabs %}
{% highlight ts tabtitle="~/app/routes/_index.tsx" %}
{% raw %}

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import { data } from '../datasource';

export let meta = () => {
  return [{
    title: "Syncfusion Grid Remix",
    description: "Syncfusion Grid components with Remix",
  }];
};

export default function Index() {
  return (
    <GridComponent dataSource={data} allowPaging={true}>
      <ColumnsDirective>
        <ColumnDirective field="OrderID" width="100" textAlign="Right" />
        <ColumnDirective field="CustomerID" width="100" />
        <ColumnDirective field="EmployeeID" width="100" textAlign="Right" />
        <ColumnDirective field="Freight" width="100" format="C2" textAlign="Right"/>
        <ColumnDirective field="ShipCountry" width="100" />
      </ColumnsDirective>
      <Inject services={[Page, Sort]} />
    </GridComponent>
  );
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

Create a data source file in `~/app/datasource.tsx` and add the following data for the grid component.

```ts
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
```

## Run the application

Run your Remix application in development mode using the following command,

```
npm run dev
```

For deployment, build your app for production,

```
npm run build
```

Then run the app in production mode:

```
npm run start
```

> [View source code](https://stackblitz.com/edit/node-hffebx?file=app/datasource.tsx)
