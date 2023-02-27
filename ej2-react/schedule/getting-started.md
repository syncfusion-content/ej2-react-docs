---
layout: post
title: Getting started with React Schedule component | Syncfusion
description:  Checkout and learn about Getting started with React Schedule component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section briefly explains how to create [**React Scheduler**](https://www.syncfusion.com/react-ui-components/react-scheduler) component and configure its available functionalities in React environment, using Essential JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart.git) seed repository.

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

You can use create-react-app to setup the applications. To install create-react-app run the following command.

```
npm install -g create-react-app
```

To setup basic React sample use following commands.


```
create-react-app quickstart --scripts-version=react-scripts-ts
cd quickstart
```



```
create-react-app quickstart
cd quickstart
```


### Adding Syncfusion packages

All the available Essential JS 2 packages are published in `npmjs.com` public registry. To install Scheduler component, use the following command.

```
npm install @syncfusion/ej2-react-schedule --save
```

### Adding CSS reference

Add scheduler component's styles as given below in `src/App.css`.

```
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";
```

>To refer `App.css` in the application then import it in the `src/App.tsx` file.

In case, if you want to make use of the combined CSS files of entire components, then you can avail it from the root folder of Essential JS 2 package and reference it with the code shown below.

```css
@import '../../node_modules/@syncfusion/ej2/material.css';
```

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

Add the HTML div tag defined with an `id` attribute in your `index.html` file, where the scheduler element is initialized.

`[src/index.html]`

```
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Syncfusion React Schedule</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Essential JS 2 for React Components" />
    <meta name="author" content="Syncfusion" />
    <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
     <style>
        #loader {
            color: #008cff;
            height: 40px;
            left: 45%;
            position: absolute;
            top: 45%;
            width: 30%;
        }
    </style>
</head>
<body>
    <!--Element where the scheduler will be rendered-->
    <div id="schedule"></div>
</body>
</html>
```

Import the Scheduler component to your `app.tsx` file as shown below, and initialize it to the element defined with an id `schedule` in the `index.html` file.


```ts
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

function App() {
  return (
    <ScheduleComponent>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />)
```
        

Now, run the application in the browser using the following command.

```
npm start
```

{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs11" %}

> Above demo will display the empty scheduler.

## Populating appointments

* To populate the empty Scheduler with appointments, bind the event data to it by assigning the `dataSource` property either with valid JSON data or else with remote URL, from where the data will be fetched.

Here, the local JSON data is assigned to Scheduler's dataSource.

`[src/app/app.tsx]`



```ts
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent } from '@syncfusion/ej2-react-schedule';

function App() {
  const data: object [] = [
    {
      Id: 1,
      Subject: 'Meeting - 1',
      StartTime: new Date(2018, 1, 15, 10, 0),
      EndTime: new Date(2018, 1, 16, 12, 30),
      IsAllDay: false
    },
  ];

  return (
    <ScheduleComponent height='550px' selectedDate= {new Date(2018, 1, 15)}
      eventSettings={{ dataSource: data }}>
    </ScheduleComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
```


You can also provide different names to these default fields, for which the custom names of those fields must be mapped appropriately within fields property as shown below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
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
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs13/index.html %}
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
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Agenda, Month, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';

function App() {
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
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
```

## Individual view customization

Each individual Scheduler views can be customized with its own options such as setting different start and end hour on Week and Work Week views, whereas hiding the weekend days on Month view alone. This can be achieved by defining views property to accept the array of object type, where each object depicts the individual view customization.

The output will display the Scheduler with the specified view configuration.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs1" %}

> You can also explore our [React Scheduler example](https://ej2.syncfusion.com/react/demos/#/material/schedule/overview) that shows how to use the toolbar buttons to play with Scheduler functionalities.
