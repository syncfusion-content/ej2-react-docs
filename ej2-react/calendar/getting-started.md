---
layout: post
title: Getting Started with React Calendar Component | Syncfusion
description: Checkout and learn about getting started with Syncfusion Essential React Calendar component, it's elements, and more.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Calendar

This section explains you the steps required to create a simple Calendar and demonstrate the basic usage of the Calendar component.

To get start quickly with React Calendars, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=wgqX295fGkY" %}

## Dependencies

The below list of dependencies are required to use the `Calendar` component in your application.

```javascript
|-- @syncfusion/ej2-react-calendars
    |-- @syncfusion/ej2-react-base
        |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Installation and configuration

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

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install. For this application, we are going to use `Calendar` component.

To install Calendar component, use the following command

```bash
npm install @syncfusion/ej2-react-calendars –save
```

## Adding Style sheet to the Application

To render the Calendar component, need to import Calendar and its dependent component's styles as given below in `App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";
```

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Adding Calendar component to the Application

* To include the Calendar component in application import the `CalendarComponent` from `ej2-react-calendars` package in `App.tsx`.

* Then add the Calendar component as shown in below code example.

`[src/App.tsx]`

`[Class-component]`

```ts
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import './App.css';

export default class App extends React.Component<{}, {}> {
    public render() {
        return <CalendarComponent id="calendar" />
    }
};
```

`[Functional-component]`

```ts
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    return <CalendarComponent id="calendar" />;
}
ReactDOM.render(<App />, document.getElementById('element'));
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

   ```
    npm run dev
   ```

The below examples shows the basic calendar component.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/calendar/default-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/calendar/default-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/default-cs13" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/calendar/default-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/calendar/default-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/default-cs14" %}

## Setting the value, min and max dates

The following example demonstrates how to set the value,  min and max dates on initializing the Calendar. Here the Calendar allows to select a date within a range from 9th to 15th in a month of May 2017. To know more about range restriction in Calendar, please refer this [page](./date-range).

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/calendar/default-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/calendar/default-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/default-cs15" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/calendar/default-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/calendar/default-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/default-cs16" %}

## See Also

* [Select multiple dates in the Calendar](./multi-select)
* [Render Calendar with specific culture](./globalization)
* [How to change the initial view of the Calendar](./calendar-views)
* [Render Calendar with week numbers](./how-to/render-the-calendar-with-week-numbers)
* [Show other month dates](./how-to/show-dates-of-other-months)

N> You can refer to our [React Calendar](https://www.syncfusion.com/react-components/react-calenda) feature tour page for its groundbreaking feature representations. You can also explore our [React Calendar example](https://ej2.syncfusion.com/react/demos/#/bootstrap5/calendar/default) to knows how to present and manipulate data.

