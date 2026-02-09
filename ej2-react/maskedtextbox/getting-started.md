---
layout: post
title: Getting Started with React MaskedTextBox | Syncfusion
description: Learn how to get started with the React MaskedTextBox component in Syncfusion, including installation with Vite, configuration, masking, and styles.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React MaskedTextBox Component

The following section explains the required steps to build the MaskedTextBox component with its basic usage in step-by-step procedure.

## Dependencies

The following list of dependencies are required to use the MaskedTextBox component in your application.

```javascript
|-- @syncfusion/ej2-react-inputs
  |-- @syncfusion/ej2-react-base
  |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
```

## Installation and Configuration

To quickly set up a React application, use Vite, which provides a fast development server, smaller bundles, and optimized builds compared to tools like Create React App. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide).

> Note: To create a React application using Create React App, refer to the [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run one of the following commands based on the desired template.

```bash
npm create vite@latest my-app
```

To set up a React application in a TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```

To set up a React application in a JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Packages

All Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published on the public npm registry at [npmjs.com](https://www.npmjs.com/~syncfusionorg). Choose the component to install. This guide uses the MaskedTextBox component.

To install the MaskedTextBox component, use the following command.

```bash
npm install @syncfusion/ej2-react-inputs --save
```

## Adding MaskedTextBox to the Application

Add the MaskedTextBox component to the application. Use the following code in `src/App.tsx`.

`[Class-component]`

```ts
import * as React from "react";
import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './App.css';

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <MaskedTextBoxComponent placeholder="Enter Name"></MaskedTextBoxComponent>
    );
  }
};
```

`[Functional-component]`

```ts
import * as React from "react";
import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './App.css';

export default function App() {
  return (
    <MaskedTextBoxComponent placeholder="Enter Name"></MaskedTextBoxComponent>
  );
};
```

## Set the Mask

Set the input mask using the [mask](https://ej2.syncfusion.com/react/documentation/api/maskedtextbox/index-default#mask) property to validate user input. For details about mask tokens and configuration, see the mask configuration guide at ./mask-configuration/.

The following example demonstrates the `0` mask token, which requires a single digit from 0 to 9 for each position.

`[Class-component]`

```ts
import * as React from "react";
import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './App.css';

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <MaskedTextBoxComponent mask={'000-000-0000'}></MaskedTextBoxComponent>
    );
  }
};
```

`[Functional-component]`

```ts
import * as React from "react";
import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './App.css';

export default function App() {
  return (
    <MaskedTextBoxComponent mask={'000-000-0000'}></MaskedTextBoxComponent>
  );
};
```

## Adding CSS Reference

Import the MaskedTextBox component's required CSS in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
```

You can check out the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) topic to know more about built-in themes and different ways to refer themes in a React application.

> Note: To reference combined component styles, use the Custom Resource Generator (CRG) at https://crg.syncfusion.com/ in your application.

## Run the Application

Run the `npm run dev` command in the console to start the development server. This compiles the code and serves the application locally, opening it in the browser.

```
npm run dev
```

The following example shows the MaskedTextBox.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/masked-textbox/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/masked-textbox/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/masked-textbox/getting-started-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/masked-textbox/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/masked-textbox/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/masked-textbox/getting-started-cs2" %}

## See Also

* [How to perform custom validation using FormValidator](./how-to/perform-custom-validation-using-form-validator)
* [How to customize the UI appearance of the control](./how-to/customize-the-ui-appearance-of-the-control)
* [How to set cursor position while focus on the input textbox](./how-to/set-cursor-position-while-focus-on-the-input-textbox)
* [How to display numeric keypad when focus on mobile devices](./how-to/display-numeric-keypad-when-focus-on-mobile-devices)