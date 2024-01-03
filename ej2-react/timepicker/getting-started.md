---
layout: post
title: Getting started with React Timepicker component | Syncfusion
description:  Checkout and learn about Getting started with React Timepicker component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started

This section explains you the steps required to create a simple TimePicker and demonstrate the basic usage of the TimePicker component.

To get start quickly with React TimePicker, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=YYu_33pJz9E" %}

## Dependencies

The below list of dependencies are required to use the `TimePicker` component in your application.

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

You can use [`create-react-app`](https://github.com/facebook/create-react-app) to setup the applications. To install `create-react-app` run the following command.

   ```
     npm install -g create-react-app
   ```

* To setup basic `React` sample use following commands.

    ```
      create-react-app quickstart --scripts-version=react-scripts-ts
      cd quickstart
    ```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install. For this application, we are going to use `TimePicker` component.

To install TimePicker component, use the following command

```bash
npm install @syncfusion/ej2-react-calendars –save
```

## Adding Style sheet to the Application

To render the TimePicker component, need to import TimePicker and its dependent component's styles as given below in `App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";
```

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Adding TimePicker component to the Application

* To include the TimePicker component in application import the `TimePickerComponent` from `ej2-react-calendars` package in `App.tsx`.

* Then add the TimePicker component as shown in below code example.

`[src/App.tsx]`

`[Class-component]`

```ts
import { enableRipple } from '@syncfusion/ej2-base';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import './App.css';
// enable ripple effect
enableRipple(true);

export default class App extends React.Component<{}, {}> {
    public render() {
        return <TimePickerComponent id="time" />
    }
};
```

`[Functional-component]`

```ts
import { enableRipple } from '@syncfusion/ej2-base';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import './App.css';
// enable ripple effect
enableRipple(true);

function App() {
    return <TimePickerComponent id="time" />
};
```

## Run the application

Now run the `npm start` command in the console, it will run your application and open the browser window.

```
npm start
```

The following examples shows the basic TimePicker component.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timepicker/default-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timepicker/default-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/default-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timepicker/default-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timepicker/default-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/default-cs2" %}

Now, the TimePicker renders with  default culture as `American English`('en-US'). For a different culture, refer to the
[`Globalization`](./globalization) section.

## Setting the value, min, and max time

The following example demonstrates how to set the value, min and max time on initializing the TimePicker. Here the TimePicker allows you to select the time value within a range from `7:00 AM` to `4:00 PM`.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timepicker/default-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timepicker/default-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/default-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timepicker/default-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timepicker/default-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/default-cs4" %}

## Setting the time format

Time formats is a way of representing the time value in different string format in textbox and popup list. By default, the TimePicker's format is based on the culture. You can also customize the format by using the [`format`](https://ej2.syncfusion.com/react/documentation/api/timepicker#format) property. To know more about the time format standards, refer to the [Date and Time Format](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#custom-formats) section.

The following example demonstrates the TimePicker component in 24 hours format with 60 minutes interval. The time interval is set to 60 minutes by using the [`step`](https://ej2.syncfusion.com/react/documentation/api/timepicker#step) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timepicker/default-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timepicker/default-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/default-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timepicker/default-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timepicker/default-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/default-cs6" %}

> Once the time format property is defined, it will be applicable to all the cultures.

## See Also

* [Render TimePicker with min and max time](./time-range)
* [How to achieve validation with TimePicker](./how-to/client-side-validation-using-form-validator)
* [Render TimePicker with specific culture](./globalization)