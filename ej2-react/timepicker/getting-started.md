---
layout: post
title: Getting started with React Timepicker component | Syncfusion
description:  Checkout and learn about Getting started with React Timepicker component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React TimePicker component

This section explains the steps required to create a simple React TimePicker component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

To get started quickly with React TimePicker, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=YYu_33pJz9E" %}

## Setup for local development

Easily set up a React application using `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

![Initial_setup](images/Initial-setup.jpg)

To set up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> TimePicker packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the TimePicker component, use the following command

```bash
npm install @syncfusion/ej2-react-calendars --save
```

> The --save will instruct NPM to include the TimePicker package inside of the **dependencies** section of the package.json.

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> React components can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

By default, Vite projects include a `index.css` file with default styles. These default styles may conflict with Syncfusion component styles. Clear all content from the `index.css` file to prevent style conflicts.

The required styles for the component are imported in the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "@syncfusion/ej2-tailwind3-theme/styles/timepicker/index.css";

{% endhighlight %}
{% endtabs %}

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding TimePicker component

The React TimePicker component can be added to the application by following these steps. To get started, add the TimePicker component to the **src/App.tsx** file using the following code.

The following timepicker code should be placed in the **src/App.tsx** file.

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

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The output appears as follows.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/timepicker/default-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/timepicker/default-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/default-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/timepicker/default-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
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
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/timepicker/default-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/timepicker/default-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/default-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/timepicker/default-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/timepicker/default-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/default-cs4" %}

## Setting the time format

Time formats is a way of representing the time value in different string format in textbox and popup list. By default, the TimePicker's format is based on the culture. You can also customize the format by using the [`format`](https://ej2.syncfusion.com/react/documentation/api/timepicker#format) property. To know more about the time format standards, refer to the [Date and Time Format](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#custom-formats) section.

The following example demonstrates the TimePicker component in 24 hours format with 60 minutes interval. The time interval is set to 60 minutes by using the [`step`](https://ej2.syncfusion.com/react/documentation/api/timepicker#step) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/timepicker/default-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/timepicker/default-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/default-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/timepicker/default-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/timepicker/default-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/default-cs6" %}

> Once the time format property is defined, it will be applicable to all the cultures.

> Refer to the [React TimePicker](https://www.syncfusion.com/react-components/react-timepicker) feature tour page for its groundbreaking feature representations. You can also explore our [React TimePicker component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/timepicker/default) that shows how to render the TimePicker in React.

## See Also

* [Render TimePicker with min and max time](./time-range)
* [How to achieve validation with TimePicker](./how-to/client-side-validation-using-form-validator)
* [Render TimePicker with specific culture](./globalization)