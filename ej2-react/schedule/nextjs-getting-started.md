---
layout: post
title: React schedule getting started with Next.js | Syncfusion
description: Checkout and learn about Getting started with React Schedule component of Syncfusion Essential JS 2 in the Next.js project.
control: Next.js
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Creating a Next.js Application Using Syncfusion<sup style="font-size:70%">&reg;</sup> React Components 

This section provides a step-by-step guide for setting up a Next.js application and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> React Schedule component.

## What is Next.js?

[Next.js](https://nextjs.org/) is a React framework that makes it easy to build fast, SEO-friendly, and user-friendly web applications. It provides features such as server-side rendering, automatic code splitting, routing, and API routes, making it an excellent choice for building modern web applications.

## Prerequisites

Before getting started with the Next.js application, ensure the following prerequisites are met:

* [Node.js 18.17](https://nodejs.org/en) or later.

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

1.Define the project name: Users can specify the name of the project directly. Let's specify the name of the project as `ej2-nextjs-schedule`.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? » ej2-nextjs-schedule

{% endhighlight %}
{% endtabs %}

2.Select the required packages.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? ... ej2-nextjs-schedule
√ Would you like to use TypeScript? ... No / `Yes`
√ Would you like to use ESLint? ... No / `Yes`
√ Would you like to use Tailwind CSS? ... `No` / Yes
√ Would you like to use `src/` directory? ... No / `Yes`
√ Would you like to use App Router? (recommended) ... No / `Yes`
√ Would you like to customize the default import alias? ... `No`/ Yes
Creating a new Next.js app in D:\ej2-nextjs-schedule.

{% endhighlight %}
{% endtabs %}

3.Once complete the above mentioned steps to create `ej2-nextjs-schedule`, navigate to the directory using the below command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-nextjs-schedule

{% endhighlight %}
{% endtabs %}

The application is ready to run with default settings. Now, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the project, install the corresponding npm package.

Here, the [React Schedule component](https://www.syncfusion.com/react-components/react-scheduler) is used in the project. To install the React Schedule component, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-schedule --save

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-schedule

{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> React components come with [built-in themes](https://ej2.syncfusion.com/react/documentation/appearance/theme/), which are available in the installed packages. It’s easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> React components to match the style of your application by referring to one of the built-in themes.

Import the `Material` theme into the **src/app/globals.css** file and removed the existing styles in that file, as shown below:

{% tabs %}
{% highlight css tabtitle="globals.css" %}

@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";

{% endhighlight %}
{% endtabs %}

> To know more about built-in themes and CSS reference for individual components, refer to the [themes](https://ej2.syncfusion.com/react/documentation/appearance/theme/) section.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React component

Follow the below steps to add the React Schedule component to the Next.js project:

1.Before adding the Schedule component to your markup, create a `datasource.tsx` file within the **src/app/** folder and add the Schedule component data.

{% tabs %}
{% highlight ts tabtitle="datasource.tsx" %}

export let timelineResourceData: Object[] = [
    {
        Id: 61,
        Subject: 'Decoding',
        StartTime: new Date(2018, 3, 4, 9, 30),
        EndTime: new Date(2018, 3, 4, 10, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 62,
        Subject: 'Bug Automation',
        StartTime: new Date(2018, 3, 4, 13, 30),
        EndTime: new Date(2018, 3, 4, 16, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 63,
        Subject: 'Functionality testing',
        StartTime: new Date(2018, 3, 4, 9),
        EndTime: new Date(2018, 3, 4, 10, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 64,
        Subject: 'Resolution-based testing',
        StartTime: new Date(2018, 3, 4, 12),
        EndTime: new Date(2018, 3, 4, 13),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 65,
        Subject: 'Test report Validation',
        StartTime: new Date(2018, 3, 4, 15),
        EndTime: new Date(2018, 3, 4, 18),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 66,
        Subject: 'Test case correction',
        StartTime: new Date(2018, 3, 4, 14),
        EndTime: new Date(2018, 3, 4, 16),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 67,
        Subject: 'Bug fixing',
        StartTime: new Date(2018, 3, 4, 14, 30),
        EndTime: new Date(2018, 3, 4, 18, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 68,
        Subject: 'Run test cases',
        StartTime: new Date(2018, 3, 4, 17, 30),
        EndTime: new Date(2018, 3, 4, 19, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 70,
        Subject: 'Bug Automation',
        StartTime: new Date(2018, 3, 4, 18, 30),
        EndTime: new Date(2018, 3, 4, 20),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }
];

{% endhighlight %}
{% endtabs %}

2.Then, import and define the Schedule component in the **src/app/page.tsx** file, as shown below: 

{% tabs %}
{% highlight ts tabtitle="page.tsx" %}

'use client'
import {
  Week, Month, Agenda, ScheduleComponent, ViewsDirective, ViewDirective, EventSettingsModel, ResourcesDirective, ResourceDirective, Inject, Resize, DragAndDrop
} from '@syncfusion/ej2-react-schedule';
import { timelineResourceData } from './datasource';

export default function Home() {
  const eventSettings: EventSettingsModel = { dataSource: timelineResourceData }
  const group = { byGroupID: false, resources: ['Projects', 'Categories'] }

  const projectData: Object[] = [
    { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
    { text: 'PROJECT 2', id: 2, color: '#56ca85' },
    { text: 'PROJECT 3', id: 3, color: '#df5286' },
  ];
  const categoryData: Object[] = [
    { text: 'Development', id: 1, color: '#1aaa55' },
    { text: 'Testing', id: 2, color: '#7fa900' }
  ];
  return (
    <>
      <h2>Syncfusion React Schedule Component</h2>
      <ScheduleComponent width='100%' height='550px' currentView='Month' selectedDate={new Date(2018, 3, 4)} eventSettings={eventSettings} group={group} >
        <ViewsDirective>
          <ViewDirective option='Week' />
          <ViewDirective option='Month' />
          <ViewDirective option='Agenda' />
        </ViewsDirective>
        <ResourcesDirective>
          <ResourceDirective field='ProjectId' title='Choose Project' name='Projects' allowMultiple={false}
            dataSource={projectData} textField='text' idField='id' colorField='color'>
          </ResourceDirective>
          <ResourceDirective field='TaskId' title='Category' name='Categories' allowMultiple={true}
            dataSource={categoryData} textField='text' idField='id' colorField='color'>
          </ResourceDirective>
        </ResourcesDirective>
        <Inject services={[Week, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
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

To learn more about the functionality of the Schedule component, refer to the [documentation](https://ej2.syncfusion.com/react/documentation/schedule/getting-started#module-injection).

> [View the NEXT.js Schedule sample in the GitHub repository](https://github.com/SyncfusionExamples/ej2-nextjs-schedule).