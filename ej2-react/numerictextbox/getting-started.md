---
layout: post
title: Getting started with React Numerictextbox component | Syncfusion
description:  Checkout and learn about Getting started with React Numerictextbox component of Syncfusion Essential JS 2 and more details.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React NumericTextBox component

This section explains the steps required to create a simple React NumericTextBox component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

To get started quickly with React NumericTextBox, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=CCcvKHTlydI" %}

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> NumericTextBox packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the NumericTextBox component, use the following command

```bash
npm install @syncfusion/ej2-react-inputs --save
```

> The --save will instruct NPM to include the NumericTextBox package inside of the **dependencies** section of the package.json.

## Adding CSS reference

The following CSS files are available in the **../node_modules/@syncfusion** package folder. Add these as references in **src/App.css**.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/tailwind3.css";
```

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding NumericTextBox component

The React NumericTextBox component can be added to the application by following these steps. To get started, add the NumericTextBox component to the **src/App.tsx** file using the following code.

The following numerictextbox code should be placed in the **src/App.tsx** file.

`[Class-component]`

```ts
import * as React from "react";
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './App.css';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <NumericTextBoxComponent value={10} />
    );
  }
}
```

`[Functional-component]`

```ts
import * as React from 'react';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './App.css';

export default function App(){
  return (
    <NumericTextBoxComponent value={10} />
  );
}
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
{% include code-snippet/numeric-textbox/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/numeric-textbox/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/getting-started-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/numeric-textbox/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/numeric-textbox/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/getting-started-cs4" %}

## Range validation

You can set the minimum and maximum range of values in the NumericTextBox using the [`min`](https://ej2.syncfusion.com/react/documentation/api/numerictextbox/index-default#min) and [`max`](https://ej2.syncfusion.com/react/documentation/api/numerictextbox/index-default#max) properties, so the numeric value should be in the min and max range.

The validation behavior depends on the [`strictMode`](https://ej2.syncfusion.com/react/documentation/api/numerictextbox/index-default#strictmode) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/numeric-textbox/getting-started-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/numeric-textbox/getting-started-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/getting-started-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/numeric-textbox/getting-started-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/numeric-textbox/getting-started-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/getting-started-cs6" %}

## Formatting the value

User can set the format of the NumericTextBox component using [`format`](https://ej2.syncfusion.com/react/documentation/api/numerictextbox/index-default#format) property. The value will be displayed in the specified format, when the component is in focused out state. For more information about
formatting the value, refer to this [link](./formats).

The below example demonstrates format the value by using currency format value `c2`.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/numeric-textbox/getting-started-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/numeric-textbox/getting-started-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/getting-started-cs7" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/numeric-textbox/getting-started-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/numeric-textbox/getting-started-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/getting-started-cs8" %}

## Precision of numbers

You can restrict the number of decimals to be entered in the NumericTextBox by using the [`decimals`](https://ej2.syncfusion.com/react/documentation/api/numerictextbox/index-default#decimals) and [`validateDecimalOnType`](https://ej2.syncfusion.com/react/documentation/api/numerictextbox/index-default#validatedecimalontype) properties.
So, you can't enter the number whose precision is greater than the mentioned decimals.

* If `validateDecimalOnType` is false, number of decimals will not be restricted.
Else, number of decimals will be restricted while typing in the NumericTextBox.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/numeric-textbox/precision-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/numeric-textbox/precision-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/precision-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/numeric-textbox/precision-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/numeric-textbox/precision-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/precision-cs2" %}

> Refer to the [React NumericTextBox](https://www.syncfusion.com/react-components/react-numeric-textbox) feature tour page for its groundbreaking feature representations. You can also explore our [React NumericTextBox component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/numerictextbox/default) that shows how to render the NumericTextBox in React.

## See Also

* [How to perform custom validation using FormValidator](./how-to/perform-custom-validation-using-form-validator)
* [How to customize the UI appearance of the control](./how-to/customize-the-ui-appearance-of-the-control)
* [How to customize the spin button’s up and down arrow](./how-to/customize-the-spin-buttons-up-and-down-arrow)
* [How to customize the step value and hide spin buttons](./how-to/customize-the-step-value-and-hide-spin-buttons)
* [How to prevent nullable input in NumericTextBox](./how-to/prevent-nullable-input-in-numerictextbox)
* [How to maintain trailing zeros in NumericTextBox](./how-to/maintain-trailing-zeros-in-numerictextbox)