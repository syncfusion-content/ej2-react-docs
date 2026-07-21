---
layout: post
title: React schedule getting started with Next.js | Syncfusion
description: Checkout and learn about Getting started with React Schedule component of Syncfusion Essential JS 2 in the Next.js project.
control: Next.js
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Next.js Application Using Syncfusion® React Components

This section provides a step-by-step guide for setting up a Next.js application and integrating the [React Schedule](https://www.syncfusion.com/react-components/react-scheduler) component.

## Prerequisites

Before getting started with the Next.js application, ensure the following prerequisites are met:

* [Node.js 18.17](https://nodejs.org/en) or later.
* `npm` (bundled with Node.js) or `yarn` installed.
* Next.js 14 or later (this guide uses the App Router).
* `@syncfusion/ej2-react-schedule` (latest version).

The application is compatible with macOS, Windows, and Linux operating systems.

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

> The exact prompts vary between major versions of `create-next-app`. The example below reflects Next.js 14+.

1. Define the project name: Users can specify the name of the project directly. Let's specify the name of the project as `ej2-nextjs-schedule`.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? » ej2-nextjs-schedule

{% endhighlight %}
{% endtabs %}

2. Select the required packages. This guide assumes the choices shown in **bold**:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? ... ej2-nextjs-schedule
√ Would you like to use TypeScript? ... No / **Yes**
√ Would you like to use ESLint? ... No / **Yes**
√ Would you like to use Tailwind CSS? ... **No** / Yes
√ Would you like to use `src/` directory? ... No / **Yes**
√ Would you like to use App Router? (recommended) ... No / **Yes**
√ Would you like to customize the default import alias? ... **No** / Yes
Creating a new Next.js app in ./ej2-nextjs-schedule.

{% endhighlight %}
{% endtabs %}

3. Once you have completed the above steps to create `ej2-nextjs-schedule`, navigate to the directory using the following command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-nextjs-schedule

{% endhighlight %}
{% endtabs %}

The application is ready to run with default settings. Now, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-react). This example uses the [React Schedule component](https://www.syncfusion.com/react-components/react-scheduler), so navigate into the project directory and run one of the following commands:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

cd ej2-nextjs-schedule
npm install @syncfusion/ej2-react-schedule --save

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

cd ej2-nextjs-schedule{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-schedule

{% endhighlight %}
{% endtabs %}

## Importing Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles from a theme package

Themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> React Schedule component can be applied with CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) documentation.

Install the **Tailwind 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the **src/app/globals.css** file:

```css
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/schedule/index.css";
```

## Adding the Syncfusion<sup style="font-size:70%">&reg;</sup> React Schedule component

Follow the steps below to add the React Schedule component to the Next.js project. The Schedule component relies on browser-only APIs, so the page must be rendered as a client component using the `'use client'` directive.

### 1. Create the data source

Before adding the Schedule component to your markup, create a `datasource.tsx` file inside the **src/app/** folder and add the Schedule data.

The example below uses a typed `Appointment` interface. Each record requires `Id`, `Subject`, `StartTime`, and `EndTime` (the last two being `Date` instances). The `ProjectId` and `TaskId` fields are used for resource grouping, which is configured in the next step.

{% tabs %}
{% highlight ts tabtitle="datasource.tsx" %}

interface Appointment {
    Id: number;
    Subject: string;
    StartTime: Date;
    EndTime: Date;
    IsAllDay: boolean;
    ProjectId: number;
    TaskId: number;
}

export const scheduleData: Appointment[] = [
    {
        Id: 61,
        Subject: 'Decoding',
        StartTime: new Date(2026, 6, 20, 9, 30),
        EndTime: new Date(2026, 6, 20, 10, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 62,
        Subject: 'Bug Automation',
        StartTime: new Date(2026, 6, 20, 13, 30),
        EndTime: new Date(2026, 6, 20, 16, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 63,
        Subject: 'Functionality testing',
        StartTime: new Date(2026, 6, 20, 9),
        EndTime: new Date(2026, 6, 20, 10, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 64,
        Subject: 'Resolution-based testing',
        StartTime: new Date(2026, 6, 20, 12),
        EndTime: new Date(2026, 6, 20, 13),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 65,
        Subject: 'Test report Validation',
        StartTime: new Date(2026, 6, 20, 15),
        EndTime: new Date(2026, 6, 20, 18),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 66,
        Subject: 'Test case correction',
        StartTime: new Date(2026, 6, 20, 14),
        EndTime: new Date(2026, 6, 20, 16),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 67,
        Subject: 'Bug fixing',
        StartTime: new Date(2026, 6, 20, 14, 30),
        EndTime: new Date(2026, 6, 20, 18, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 68,
        Subject: 'Run test cases',
        StartTime: new Date(2026, 6, 20, 17, 30),
        EndTime: new Date(2026, 6, 20, 19, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 70,
        Subject: 'Bug Automation',
        StartTime: new Date(2026, 6, 20, 18, 30),
        EndTime: new Date(2026, 6, 20, 20),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }
];

{% endhighlight %}
{% endtabs %}

### 2. Add the Schedule component to the page

Then, import and define the Schedule component in the **src/app/page.tsx** file, as shown below.

The example below does the following:

* Injects `Week`, `Month`, and `Agenda` views via `ViewsDirective`/`ViewDirective`.
* Injects the `Resize` and `DragAndDrop` services, which enable appointment resizing and drag-and-drop.
* Defines two resources (`Projects` and `Categories`) bound to the `ProjectId` and `TaskId` fields in the data source. See [resources.md](./resources.md) for details on resource configuration.
* Uses the `group` prop to group appointments by resource.

{% tabs %}
{% highlight ts tabtitle="page.tsx" %}

'use client'
import {
  Week, Month, Agenda, ScheduleComponent, ViewsDirective, ViewDirective, EventSettingsModel, ResourcesDirective, ResourceDirective, Inject, Resize, DragAndDrop
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

export default function Home() {
  const eventSettings: EventSettingsModel = { dataSource: scheduleData }
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
      <ScheduleComponent width='100%' height='550px' currentView='Month' selectedDate={new Date(2026, 6, 20)} eventSettings={eventSettings} group={group} >
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

Once the dev server is running, open `http://localhost:3000` in your browser to view the Schedule.

To learn more about the functionality of the Schedule component, refer to the [Schedule documentation](https://ej2.syncfusion.com/react/documentation/schedule/getting-started).

## Troubleshooting

* **The Schedule is not visible** — make sure `width` and `height` are set on `ScheduleComponent`, the theme CSS has been imported, and the page is marked with `'use client'`.
* **Appointments don't render** — confirm each item in `dataSource` has valid `StartTime` and `EndTime` `Date` objects.
* **A view (Week/Month/Agenda) is missing** — verify the corresponding module is included in `Inject services` and that a matching `ViewDirective` is declared.
* **Server-rendering errors** — the Schedule component depends on browser APIs; the containing page must be a client component (`'use client'`).

## See also

* [Module injection](./module-injection.md)
* [Resources](./resources.md)
* [Views](./views.md)
* [Appointments and event data handling](./appointments.md)

N> Looking for the full React Schedule component overview, features, pricing, and documentation? Visit the [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) page.