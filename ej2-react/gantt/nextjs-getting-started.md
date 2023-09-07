---
layout: post
title: React Gantt getting started with Next.js | Syncfusion
description: Check out and learn about how to use Syncfusion React UI components in the Next.js project.
control: Next.js
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Creating a Next.js Application Using Syncfusion React Components 

This section provides a step-by-step guide for setting up a Next.js application and integrating the Syncfusion React Gantt component.

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

1.Define the project name: Users can specify the name of the project directly. Let's specify the name of the project as `ej2-nextjs-gantt`.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? » ej2-nextjs-gantt

{% endhighlight %}
{% endtabs %}

2.Select the required packages.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? ... ej2-nextjs-gantt
√ Would you like to use TypeScript? ... No / `Yes`
√ Would you like to use ESLint? ... No / `Yes`
√ Would you like to use Tailwind CSS? ... `No` / Yes
√ Would you like to use `src/` directory? ... No / `Yes`
√ Would you like to use App Router? (recommended) ... No / `Yes`
√ Would you like to customize the default import alias? ... `No`/ Yes
Creating a new Next.js app in D:\ej2-nextjs-gantt.

{% endhighlight %}
{% endtabs %}

3.Once complete the above mentioned steps to create `ej2-nextjs-gantt`, navigate to the directory using the below command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-nextjs-gantt

{% endhighlight %}
{% endtabs %}

The application is ready to run with default settings. Now, let's add Syncfusion components to the project.

## Install Syncfusion React packages

Syncfusion React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion React components in the project, install the corresponding npm package.

Here, the [React Gantt component](https://www.syncfusion.com/react-components/react-gantt-chart) is used in the project. To install the React Gantt component, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-gantt --save

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-gantt

{% endhighlight %}
{% endtabs %}

## Import Syncfusion CSS styles

Syncfusion React components come with [built-in themes](https://ej2.syncfusion.com/react/documentation/appearance/theme/), which are available in the installed packages. It’s easy to adapt the Syncfusion React components to match the style of your application by referring to one of the built-in themes.

Import the `Material` theme into the **src/app/globals.css** file and removed the existing styles in that file, as shown below:

{% tabs %}
{% highlight css tabtitle="globals.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-treegrid/styles/material.css';
@import "../../node_modules/@syncfusion/ej2-react-gantt/styles/material.css";

{% endhighlight %}
{% endtabs %}

> To know more about built-in themes and CSS reference for individual components, refer to the [themes](https://ej2.syncfusion.com/react/documentation/appearance/theme/) section.

## Add Syncfusion React component

Follow the below steps to add the React Gantt component to the Next.js project:

1.Before adding the Gantt component to your markup, create a `datasource.tsx` file within the **src/app/** folder and add the Gantt component data.

{% tabs %}
{% highlight ts tabtitle="datasource.tsx" %}

export const projectResources: object[] = [
    { resourceId: 1, resourceName: 'Project Manager' },
    { resourceId: 2, resourceName: 'Software Analyst' },
    { resourceId: 3, resourceName: 'Developer' },
    { resourceId: 4, resourceName: 'Testing Engineer' }
];

export const data: object[] = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, resources: [2, 3] },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, resources: [2] },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '3FS', Progress: 50, resources: [1] },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, resources: [1, 3, 5] },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '7SS', Progress: 50 }
        ]
    },
];

{% endhighlight %}
{% endtabs %}

2.Then, import and define the Gantt component in the **src/app/page.tsx** file, as shown below: 

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
    child: 'subtasks',
    dependency: 'Predecessor',
    resourceInfo: 'resources'
  };
  const labelSettings: any = {
    rightLabel: 'resources'
  };
  const editSettings: any = {
    allowEditing: true,
    editMode: 'Auto',
    allowTaskbarEditing: true
  };
  const resourceFields: any = {
    id: 'resourceId',
    name: 'resourceName',
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

To learn more about the functionality of the Gantt component, refer to the [documentation](https://ej2.syncfusion.com/react/documentation/gantt/getting-started#module-injection).

> [View the NEXT.js Gantt sample in the GitHub repository](https://github.com/SyncfusionExamples/ej2-nextjs-gantt).
