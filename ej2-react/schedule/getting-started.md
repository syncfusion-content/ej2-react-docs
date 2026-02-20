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

This section briefly explains how to create [**React Scheduler**](https://www.syncfusion.com/react-components/react-scheduler) component and configure its available functionalities in React environment, using Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart.git) seed repository.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview)

To get start quickly with React Scheduler using the Create React App, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=iNkryf_TtZw" %}

## Dependencies

The following list of dependencies are required to use the Scheduler component in your application.

```ts
|-- @syncfusion/ej2-react-schedule
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-schedule
        |-- @syncfusion/ej2-compression
        |-- @syncfusion/ej2-excel-export
        |-- @syncfusion/ej2-file-utils
        |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-calendars
          |-- @syncfusion/ej2-inputs
            |-- @syncfusion/ej2-split-buttons
          |-- @syncfusion/ej2-lists
          |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
        |-- @syncfusion/ej2-dropdowns
```

## Installation and configuration

### Setup for local development

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set-up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set-up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install Scheduler component, use the following command

```
npm install @syncfusion/ej2-react-schedule --save
```

### Adding CSS reference

Add scheduler component's styles as given below in `src/App.css`.

```
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-schedule/styles/tailwind3.css";
```
>To refer `App.css` in the application then import it in the `src/App.tsx` file.

## Module injection

Each view types available in scheduler are maintained as individual modules and to work with those views, it is necessary to inject the required modules. The following modules are available in scheduler namely,

* `Day` - Inject this module to work with the day view.
* `Week` - Inject this module to work with the week view.
* `WorkWeek` - Inject this module to work with the work week view.
* `Month` - Inject this module to work with the month view.
* `Agenda` - Inject this module to work with the agenda view.
* `MonthAgenda` - Inject this module for displaying month agenda view.
* `TimelineViews` - Inject this module to work with the timeline day, timeline week, timeline work week view.
* `TimelineMonth` - Inject this module to work with the timeline month view.

These modules should be injected into the schedule using the `Inject` method within the `app.tsx` file as shown below. On doing so, only the injected views will be loaded and displayed on the schedule.

`[src/app/app.tsx]`

```ts
<Inject services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth ]} />
```

## Initialize the schedule

Import the Scheduler component to your `app.tsx` file using following code.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/schedule/local-data-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/schedule/local-data-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs11" %}

> Above demo will display the empty scheduler.

## Populating appointments

* To populate the empty Scheduler with appointments, bind the event data to it by assigning the `dataSource` property either with valid JSON data or else with remote URL, from where the data will be fetched.

Here, the local JSON data is assigned to Scheduler's dataSource.

`[src/app/app.tsx]`



```ts
import * as React from 'react';
import {
  ScheduleComponent } from '@syncfusion/ej2-react-schedule';

const App = () => {
  const data: object [] = [
    {
      Id: 1,
      Subject: 'Meeting - 1',
      StartTime: new Date(2018, 1, 15, 10, 0),
      EndTime: new Date(2018, 1, 16, 12, 30),
      IsAllDay: false
    },
  ];
  const eventSettings = { dataSource: data }

  return (
    <ScheduleComponent height='550px' selectedDate= {new Date(2018, 1, 15)}
      eventSettings={eventSettings}>
    </ScheduleComponent>
  );
}
export default App;
```


You can also provide different names to these default fields, for which the custom names of those fields must be mapped appropriately within fields property as shown below.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/schedule/local-data-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/schedule/local-data-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs12" %}

The other fields available in Scheduler can be referred from [here](./appointments#event-fields).

## Setting date

Scheduler usually displays the system date as its current date. To change the current date of Scheduler with specific date, define the `selectedDate` property.

`[src/app/app.tsx]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/schedule/local-data-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/schedule/local-data-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs13/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.tsx" %}
{% include code-snippet/schedule/local-data-cs13/app/datasource.tsx %}
{% endhighlight %}
{% highlight html tabtitle="datasource.jsx" %}
{% include code-snippet/schedule/local-data-cs13/app/datasource.jsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs13" %}

## Setting view

Scheduler displays `week` view by default. To change the current view, define the applicable view name to the `currentView` property. The applicable view names are,

* Day
* Week
* WorkWeek
* Month
* Year
* Agenda
* MonthAgenda
* TimelineDay
* TimelineWeek
* TimelineWorkWeek
* TimelineMonth
* TimelineYear

```ts
import * as React from 'react';
import {
  ScheduleComponent, Day, Week, WorkWeek, Agenda, Month, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import './App.css';

const App = () => {
    return (
      <ScheduleComponent width='100%' height='550px' currentView='Month'
      selectedDate={new Date(2017, 11, 15)}>
          <ViewsDirective>
            <ViewDirective option='Day' />
            <ViewDirective option='Week' />
            <ViewDirective option='WorkWeek' />
            <ViewDirective option='Month' />
            <ViewDirective option='Agenda' />
          </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Agenda, Month]} />
      </ScheduleComponent>
    )
};
export default App;
```

## Individual view customization

Each individual Scheduler views can be customized with its own options such as setting different start and end hour on Week and Work Week views, whereas hiding the weekend days on Month view alone. This can be achieved by defining views property to accept the array of object type, where each object depicts the individual view customization.

The output will display the Scheduler with the specified view configuration.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/schedule/views-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/schedule/views-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs1" %}

> You can also explore our [React Scheduler example](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) that shows how to use the toolbar buttons to play with Scheduler functionalities.
