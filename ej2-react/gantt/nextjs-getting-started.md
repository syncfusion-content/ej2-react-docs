---
layout: post
title: React Gantt getting started with Next.js | Syncfusion
description: Check out and learn here all about how to use the Syncfusion React UI components in the Next.js project.
control: Next.js
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion React Gantt Component in Next.js

This section outlines the process of creating a Next.js application and integrating Syncfusion<sup style="font-size:70%">&reg;</sup> React Gantt Chart component.

## What is Next.js?

[Next.js](https://nextjs.org/) is a React framework designed for building fast, SEO-friendly web applications. It provides server-side rendering, automatic code splitting, routing, and API routes.

## Prerequisites

Before getting started with the Next.js application, ensure the following prerequisites are met:

* [Node.js 18.17.0](https://nodejs.org/en) or later (LTS recommended).

* Compatible with macOS, Windows, and Linux

## Create a Next.js application

Generate a new Next.js application using npm or yarn:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx create-next-app@latest

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create next-app

{% endhighlight %}
{% endtabs %}

Using one of the above commands will lead you to set up additional configurations for the project as below:

**Step 1: Define the project name** - You can specify the name of the project directly. Let's specify the name of the project as `ej2-nextjs-gantt`.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? » ej2-nextjs-gantt

{% endhighlight %}
{% endtabs %}

**Step 2: Select the required packages** - Choose the configuration options for your project. Select **Yes** to use default packages in the application.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? ... ej2-nextjs-gantt
? Would you like to use the recommended Next.js defaults?
>   Yes, use recommended defaults - TypeScript, ESLint, Tailwind CSS, App Router
    No, reuse previous settings
    No, customize settings

{% endhighlight %}
{% endtabs %}

After running the above commands, the project will be created and all required dependencies will be installed automatically.

**Step 3: Navigate to the project directory** - Once you complete the above steps to create `ej2-nextjs-gantt`, navigate to the directory using the below command:
{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-nextjs-gantt

{% endhighlight %}
{% endtabs %}

The application is ready to run with default settings. Now, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the project, install the corresponding npm package.

This guide uses the [React Gantt Chart component](https://www.syncfusion.com/react-components/react-gantt-chart) as an example. To install the React Gantt Chart component in the project, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-gantt --save

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-gantt

{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> React components come with [built-in themes](https://ej2.syncfusion.com/react/documentation/appearance/theme), which are available in the installed packages. It’s easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> React components to match the style of your application by referring to one of the built-in themes.

Import the **Tailwind 3** CSS styles for the Gantt Chart component and its dependent components in the **src/app/globals.css** file and remove the existing styles in that file, as shown below:

{% tabs %}
{% highlight css tabtitle="globals.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';  
@import '../../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';  
@import '../../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';  
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';  
@import '../../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-treegrid/styles/tailwind3.css';
@import "../../node_modules/@syncfusion/ej2-react-gantt/styles/tailwind3.css";

{% endhighlight %}
{% endtabs %}

> **Note:** To learn more about built-in themes, refer to the [themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) section.

## Add a Syncfusion<sup style="font-size:70%">&reg;</sup> React component

Follow the below steps to add the React Gantt Chart component to the Next.js project:

**Step 1:** Create a `datasource.tsx` file within the **src/app/** folder and add the Gantt Chart component data.

{% tabs %}
{% highlight ts tabtitle="datasource.tsx" %}

export const projectResources: object[] = [
    { ResourceId: 1, ResourceName: 'Project Manager' },
    { ResourceId: 2, ResourceName: 'Software Analyst' },
    { ResourceId: 3, ResourceName: 'Developer' },
    { ResourceId: 4, ResourceName: 'Testing Engineer' }
];

export const data: object[] = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
    },
    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentId: 1, Progress: 50, Resources: [2, 3] },
   { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentId:1, Progress: 50, Resources: [2] },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentId: 1, Predecessor: '3FS', Progress: 50, Resources: [1] },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
    },
   { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentId: 5, Progress: 50 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentId: 5,Progress: 50, Resources: [1, 3, 5] },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentId: 5, Predecessor: '7SS', Progress: 50 }
];

{% endhighlight %}
{% endtabs %}

**Step 2:** Import and define the Gantt Chart component with the [dataSource](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#datasource) property and column definitions in the **src/app/page.tsx** file, as shown below:

{% tabs %}
{% highlight ts tabtitle="page.tsx" %}

'use client'
import { GanttComponent, Inject, Edit, Filter, Sort } from '@syncfusion/ej2-react-gantt';
import { projectResources, data } from './datasource';

export default function Home() {
  const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID:'ParentId',
    dependency: 'Predecessor',
    resourceInfo: 'Resources'
  };
  const labelSettings: any = {
    rightLabel: 'Resources'
  };
  const editSettings: any = {
    allowEditing: true,
    editMode: 'Auto',
    allowTaskbarEditing: true
  };
  const resourceFields: any = {
    id: 'ResourceId',
    name: 'ResourceName',
  };
  return (
    <>
      <h2>Syncfusion React Gantt Component</h2>
      <GanttComponent dataSource={data} allowFiltering={true} allowSorting={true} taskFields={taskFields} editSettings={editSettings} labelSettings={labelSettings}
        resourceFields={resourceFields} resources={projectResources} height='400px'>
        <Inject services={[Edit, Filter, Sort]} />
      </GanttComponent>
    </>
  )
}

{% endhighlight %}
{% endtabs %}

> NOTE: When using the Next.js App Router, the **src/app/page.tsx** file must be a client component to use Syncfusion interactive features. So the code includes `'use client'` at the top of the file.

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

To learn more about the functionality of the Gantt Chart component, refer to the [documentation](https://ej2.syncfusion.com/react/documentation/gantt/getting-started#module-injection).

> [View the Next.js Gantt sample in the GitHub repository](https://github.com/SyncfusionExamples/ej2-nextjs-gantt).
