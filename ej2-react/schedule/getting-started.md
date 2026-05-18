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

This section briefly explains how to create [**React Scheduler**](https://www.syncfusion.com/react-components/react-scheduler) component and configure its available functionalities in React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview)

To get start quickly with React Scheduler using the Create React App, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=iNkryf_TtZw" %}

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](../system-requirement)

## Installation and configuration

To build a high-performance React application with a smooth development workflow, Vite is the recommended tool. Unlike traditional setups such as Create React App, Vite is designed for speed and simplicity, providing near-instant startup and lightning-fast updates during development. For detailed steps, refer to the Vite [installation instructions](https://vite.dev/guide/)

### Option 1: Interactive Setup (Recommended for beginners)

To create a new React application with interactive prompts, run the following command:

```bash
npm create vite@latest my-app
```

or

```bash
yarn create vite my-app
```

Using one of the above commands will prompt you to configure your project interactively:

**Step 1:** Select `React` as the framework. This will create a React project.

```bash
? Select a framework: » - Use arrow-keys. Return to submit.
  Vanilla
  Vue
> React
  Preact
  Lit
  Svelte
  Solid
  Qwik
  Angular
  Others
```

**Step 2:** Choose `TypeScript` as the framework variant to build this React project using TypeScript.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> TypeScript
  TypeScript + React Compiler
  TypeScript + SWC 
  JavaScript  
  JavaScript + React Compiler
  JavaScript + SWC
  React Router v7
  TanStack Router
  RedwoodSDK
  RSC
  Vike
```

**Step 3:** If prompted for experimental options, choose according to your needs. In this guide, **No** option is selected.
```bash
? Use rolldown-vite (Experimental)?:
  Yes
> No
```

**Step 4:** When prompted to install dependencies and start the development server, choose the option that suits your workflow.  
In this guide, **Yes** is selected to install the dependencies and start the app immediately.

```bash
? Install with npm and start now?
  > Yes /   No
```

### Option 2: Direct Command-Line Setup

Alternatively, you can skip the interactive prompts and directly create your project using template flags.

**For TypeScript environment:**

```bash
npm create vite@latest my-app -- --template react-ts
```

or

```bash
yarn create vite my-app --template react-ts
```

**For JavaScript environment:**

```bash
npm create vite@latest my-app -- --template react
```

or

```bash
yarn create vite my-app --template react
```

After running the above commands, the project will be created and all required dependencies will be installed automatically.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install Scheduler component, use the following command

```
cd my-app
npm install @syncfusion/ej2-react-schedule --save
```

## Adding CSS reference

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

## Initialize the Schedule

To render the Scheduler, import the required ScheduleComponent module into your `App.tsx` file.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
import { ScheduleComponent } from '@syncfusion/ej2-react-schedule';
import './App.css';

const App = () => {
	return (
		<ScheduleComponent></ScheduleComponent>
	);
};

export default App;
{% endhighlight %}
{% highlight js tabtitle="App.jsx" %}
import { ScheduleComponent } from '@syncfusion/ej2-react-schedule';
import './App.css'; 

const App = () => {
	return (
		<ScheduleComponent></ScheduleComponent>
	);
};

export default App;
{% endhighlight %}
{% endtabs %}

## Module injection

The Scheduler follows a modular architecture where each view is provided as an individual module.
To enable a specific view, inject only the corresponding module using the `Inject` directive.

Injecting only the necessary modules ensures that the Scheduler loads efficiently and remains easy to maintain.

### Available Scheduler view modules
Use the appropriate module based on the Scheduler view you want to display:

* `Day` - Inject this module to work with the day view.
* `Week` - Inject this module to work with the week view.
* `WorkWeek` - Inject this module to work with the work week view.
* `Month` - Inject this module to work with the month view.
* `Year` - Inject this module to work with the year view.
* `Agenda` - Inject this module to work with the agenda view.
* `MonthAgenda` - Inject this module for displaying month agenda view.
* `TimelineViews` - Inject this module to work with the timeline day, timeline week, timeline work week view.
* `TimelineMonth` - Inject this module to work with the timeline month view.
* `TimelineYear` - Inject this module to work with the timeline year view.

### Injecting modules

Modules are injected into the Scheduler using the `Inject` directive inside the component configuration.

The following example injects the commonly used Scheduler views:

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import './App.css';

const App = () => {
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

const App = () => {
	return (
		<ScheduleComponent>
			<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
		</ScheduleComponent>
	);
};

export default App;
{% endhighlight %}
{% endtabs %}

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

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda,  Inject } from '@syncfusion/ej2-react-schedule';
import './App.css';

const App = () => {
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

const App = () => {
	return (
		<ScheduleComponent currentView='Day'>
			<Inject services={[Day, Week, WorkWeek, Agenda, Month]} />
		</ScheduleComponent>
	)
};

export default App;
{% endhighlight %}
{% endtabs %}

For more advanced view configurations and additional supported views, refer to the [View](./views.md) documentation.

## Setting date

Scheduler usually displays the system date as its current date. To change the current date of Scheduler with specific date, define the `selectedDate` property.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import './App.css';

const App = () => {
	return (
		<ScheduleComponent currentView='Day' selectedDate={new Date()}>
			<Inject services={[Day, Week, WorkWeek, Agenda, Month]} />
		</ScheduleComponent>
	)
};

export default App;
{% endhighlight %}
{% highlight js tabtitle="App.jsx" %}
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import './App.css';

const App = () => {
	return (
		<ScheduleComponent currentView='Day' selectedDate={new Date()}>
			<Inject services={[Day, Week, WorkWeek, Agenda, Month]} />
		</ScheduleComponent>
	)
};

export default App;
{% endhighlight %}
{% endtabs %}

## Populating appointments

To populate the Schedule with appointments, you can use either a local JSON array or a remote data service. Assign the data to the dataSource property, which is part of the eventSettings configuration.

The StartTime and EndTime fields are mandatory for each appointment. The following example uses default fields like Id, Subject, StartTime, and EndTime.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, type EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import './App.css';

const App = () => {
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
		<ScheduleComponent currentView='Day' selectedDate={new Date()} eventSettings={eventSettings}>
			<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
		</ScheduleComponent>
	);
};

export default App;
{% endhighlight %}
{% highlight js tabtitle="App.jsx" %}
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import './App.css';

const App = () => {
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
		<ScheduleComponent currentView='Day' selectedDate={new Date()} eventSettings={eventSettings}>
			<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
		</ScheduleComponent>
	);
};

export default App;
{% endhighlight %}
{% endtabs %}

The other fields available in Scheduler can be referred from [here](./appointments#event-fields).

## Run the application

Run the application using the following command and open the application in the browser to view the Scheduler.

```bash
npm run dev
```

or

```bash
yarn dev
```