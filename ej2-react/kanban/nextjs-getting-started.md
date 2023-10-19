---
layout: post
title: React getting started with Next.js | Syncfusion
description: Check out and learn about how to use Syncfusion React UI components in the Next.js project.
control: Next.js
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Creating a Next.js Application Using Syncfusion React Components

This section provides a step-by-step guide for setting up a Next.js application and integrating the Syncfusion React Kanban  component.

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

1.Define the project name: Users can specify the name of the project directly. Let's specify the name of the project as `ej2-nextjs-kanban`.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? » ej2-nextjs-kanban

{% endhighlight %}
{% endtabs %}

2.Select the required packages.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? ... ej2-nextjs-kanban
√ Would you like to use TypeScript? ... No / `Yes`
√ Would you like to use ESLint? ... No / `Yes`
√ Would you like to use Tailwind CSS? ... `No` / Yes
√ Would you like to use `src/` directory? ... No / `Yes`
√ Would you like to use App Router? (recommended) ... No / `Yes`
√ Would you like to customize the default import alias? ... `No`/ Yes
Creating a new Next.js app in D:\ej2-nextjs-kanban.

{% endhighlight %}
{% endtabs %}

3.Once complete the above mentioned steps to create `ej2-nextjs-kanban`, navigate to the directory using the below command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-nextjs-kanban

{% endhighlight %}
{% endtabs %}

The application is ready to run with default settings. Now, let's add Syncfusion components to the project.

## Install Syncfusion React packages

Syncfusion React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion React components in the project, install the corresponding npm package.

Here, the [React Kanban component](https://www.syncfusion.com/react-components/react-kanban-board) is used as an example. To install the React kanban component in the project, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-kanban --save

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-kanban

{% endhighlight %}
{% endtabs %}

## Import Syncfusion CSS styles

Syncfusion React components come with [built-in themes](https://ej2.syncfusion.com/react/documentation/appearance/theme/), which are available in the installed packages. It’s easy to adapt the Syncfusion React components to match the style of your application by referring to one of the built-in themes.

Import the `Material` theme into the **src/app/globals.css** file and removed the existing styles in that file, as shown below:

{% tabs %}
{% highlight css tabtitle="globals.css" %}

@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-kanban/styles/material.css";

{% endhighlight %}
{% endtabs %}

> To know more about built-in themes and CSS reference for individual components, refer to the [themes](https://ej2.syncfusion.com/react/documentation/appearance/theme/) section.

## Add Syncfusion React component

Follow the below steps to add the React Kanban component to the Next.js project:

1.Define the kanban component in the **src/app/page.tsx** file, as shown below:

{% tabs %}
{% highlight ts tabtitle="page.tsx" %}

'use client'
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
function App(this: any) {
    let data = new DataManager({
        url: 'https://ej2services.syncfusion.com/production/web-services/api/Kanban',
        adaptor: new ODataAdaptor
    });
    function DialogOpen(args: { cancel: boolean; }) {
        args.cancel = true;
    }
    return (<KanbanComponent id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }} allowDragAndDrop={false} dialogOpen={DialogOpen.bind(this)}>
        <ColumnsDirective>
              <ColumnDirective headerText="To Do" keyField="Open"/>
              <ColumnDirective headerText="In Progress" keyField="InProgress"/>
              <ColumnDirective headerText="Testing" keyField="Testing"/>
              <ColumnDirective headerText="Done" keyField="Close"/>
            </ColumnsDirective>
        </KanbanComponent>);
}
export default App;

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

To learn more about the functionality of the Kanban  component, refer to the [documentation](https://ej2.syncfusion.com/react/documentation/kanban/getting-started#module-injection).

> [View the NEXT.js Kanban  sample in the GitHub repository](https://github.com/SyncfusionExamples/syncfusion-react-kanban-component-in-nextjs).
