---
layout: post
title: Getting started with React Schedule component | Syncfusion
description:  Checkout and learn about Getting started with React Schedule component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Schedule Component

This section briefly explains how to create [**React Scheduler**](https://www.syncfusion.com/react-components/react-scheduler) and configure its available functionalities in React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview)

To get start quickly with React Scheduler using the Create React App, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=iNkryf_TtZw" %}

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](../system-requirement)

## Installation and configuration

To build a high-performance React application with a smooth development workflow, `Vite` is the recommended tool. Unlike traditional setups such as Create React App, Vite is designed for speed and simplicity, providing near-instant startup and lightning-fast updates during development. For detailed steps, refer to the Vite [installation instructions](https://vite.dev/guide/)

Run the following command to set up a React application:

**For TypeScript environment:**

```bash
npm create vite@latest my-app -- --template react-ts
```

**For JavaScript environment:**

```bash
npm create vite@latest my-app -- --template react
```

After running the above commands, the project will be created and all required dependencies will be installed automatically.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Schedule package

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install Scheduler component, use the following command

```
cd my-app
npm install @syncfusion/ej2-react-schedule --save
```

## Adding CSS reference from a theme package

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> React Schedule component can be applied with CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) documentation.

Install the **Tailwind 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/schedule/index.css";

{% endhighlight %}
{% endtabs %}

>To refer `App.css` in the application then import it in the `src/App.tsx` file.

## Initialize the Schedule and configure module injection

Import the Scheduler component into your app.tsx file and inject the required modules. Since each view in the Scheduler is maintained as a separate module, you need to inject the modules required for the desired views.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import './App.css';

function App () {
  return (
    <ScheduleComponent>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
};

export default App;
{% endhighlight %}
{% highlight js tabtitle="App.jsx" %}
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import './App.css';

function App () {
  return (
    <ScheduleComponent>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
};

export default App;
{% endhighlight %}
{% endtabs %}

Run the following command in the terminal to start the development server. This compiles the project, launches a local server, and allowing you to view changes in real time during development.

```
npm run dev
```

> Above demo will display the empty scheduler.

## Populating appointments

To populate the Schedule with appointments, you can use either a local JSON array or a remote data service. Assign the data to the dataSource property, which is part of the eventSettings configuration.

The StartTime and EndTime fields are mandatory for each appointment. The following example uses default fields like Id, Subject, StartTime, and EndTime.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, type EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import './App.css';

function App () {
  const data = [
    {
      Id: 1,
      Subject: 'Meeting - 1',
      StartTime: new Date(new Date().setHours(9,0,0)),
      EndTime: new Date(new Date().setHours(10,0,0)),
    }
  ];

  const eventSettings: EventSettingsModel = { dataSource: data };

  return (
    <ScheduleComponent eventSettings={eventSettings}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
};

export default App;
{% endhighlight %}
{% highlight js tabtitle="App.jsx" %}
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import './App.css';

function App () {
  const data = [
    {
      Id: 1,
      Subject: 'Meeting - 1',
      StartTime: new Date(new Date().setHours(9,0,0)),
      EndTime: new Date(new Date().setHours(10,0,0)),
    }
  ];

  const eventSettings = { dataSource: data };

  return (
    <ScheduleComponent eventSettings={eventSettings}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
};

export default App;
{% endhighlight %}
{% endtabs %}

## Setting date

Scheduler usually displays the system date as its current date. To change the current date of Scheduler with specific date, define the `selectedDate` property.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import './App.css';

function App () {
  return (
    <ScheduleComponent selectedDate={new Date(2026, 4, 18)}>
      <Inject services={[Day, Week, WorkWeek, Agenda, Month]} />
    </ScheduleComponent>
  )
};

export default App;
{% endhighlight %}
{% highlight js tabtitle="App.jsx" %}
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import './App.css';

function App () {
  return (
    <ScheduleComponent selectedDate={new Date(2026, 4, 18)}>
      <Inject services={[Day, Week, WorkWeek, Agenda, Month]} />
    </ScheduleComponent>
  )
};

export default App;
{% endhighlight %}
{% endtabs %}

## Setting view

Scheduler displays `week` view by default. To change the current view, define the applicable view name to the `currentView` property. The default applicable view names are,

* Day
* Week
* WorkWeek
* Month
* Agenda

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import './App.css';

function App () {
  return (
    <ScheduleComponent currentView='Day'>
      <Inject services={[Day, Week, WorkWeek, Agenda, Month]} />
    </ScheduleComponent>
  )
};

export default App;
{% endhighlight %}
{% highlight js tabtitle="App.jsx" %}
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import './App.css';

function App () {
  return (
    <ScheduleComponent currentView='Day'>
      <Inject services={[Day, Week, WorkWeek, Agenda, Month]} />
    </ScheduleComponent>
  )
};

export default App;
{% endhighlight %}
{% endtabs %}

N> Looking for the full React Scheduler component overview, features, pricing, and documentation? Visit the [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) page.

## See also

* [Explore available views and their customization options](./views.md)
* [Explore appointments and event data handling](./appointments.md)