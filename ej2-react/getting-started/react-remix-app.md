---
layout: post
title: React remix app with React Getting started component | Syncfusion
description:  Checkout and learn about React remix app with React Getting started component of Syncfusion Essential JS 2 and more details.
control: React remix app 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion® React Components in a Remix

This guide provides a step-by-step workflow for integrating Syncfusion<sup style="font-size:70%">&reg;</sup> React components into a new Remix application.

## Prerequisites

Ensure the following requirements are met before starting:

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](../system-requirement)


## Create Remix application

To set up a basic Remix sample, run the following command:

```
npx create-react-router@latest
```

The `create-react-router@latest` command create a remix app using the latest package versions.

When you run this command, you will be asked the following questions.

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

Navigate into the project directory with:

```
cd quick-start
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Grid package

Syncfusion<sup style="font-size:70%">&reg;</sup> React packages are available at [npmjs.com](https://www.npmjs.com/~syncfusionorg). To include the React Grid component in your project, use the following command:

```
npm install @syncfusion/ej2-react-grids --save
```

## Adding CSS reference

Syncfusion<sup style="font-size:70%">&reg;</sup> React component provide built-in themes, which are available through both [theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme) and individual component packages. You can apply styles using either approach based on your project setup; however, using the theme package is the recommended approach, as it automatically includes all required dependency styles and simplifies maintenance.

This example uses the `Tailwind 3` theme for the Grid component from the theme package. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/@syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

Import the Syncfusion<sup style="font-size:70%">&reg;</sup> component themes in the `~/app/routes/home.tsx` file as shown below:

{% tabs %}
{% highlight css tabtitle="Theme Package" %}

@import "@syncfusion/ej2-tailwind3-theme/styles/grid/index.css";

{% endhighlight %}
{% highlight css tabtitle="Component Package" %}

@import "@syncfusion/ej2-base/styles/tailwind3.css";
@import "@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "@syncfusion/ej2-calendars/styles/tailwind3.css";
@import "@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "@syncfusion/ej2-popups/styles/tailwind3.css";
@import "@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "@syncfusion/ej2-react-grids/styles/tailwind3.css";

{% endhighlight %}
{% endtabs %}

> **Note:** The Grid component requires CSS from multiple packages because it depends on other Syncfusion components for its full functionality.

## Configure Server-Side Rendering (SSR)

For Syncfusion<sup style="font-size:70%">&reg;</sup> React packages to function with Remix server-side rendering (via Vite), update your `vite.config.ts` file as shown:

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

This configuration ensures Syncfusion modules are properly transpiled for SSR compatibility.

## Adding React Grid component

Now, you can add Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the Remix application. Add the React Grid component in `~/app/routes/home.tsx` file using the following code:

{% tabs %}
{% highlight ts tabtitle="~/app/routes/home.tsx" %}
{% raw %}

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';

export let meta = () => {
  return [{
    title: "Syncfusion Grid Remix",
    description: "Syncfusion Grid components with Remix",
  }];
};

export default function Index() {
    let data: Object[] = [
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
      }
  ];
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


## Run the application

Start your Remix application in development mode:

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
