---
layout: post
title: Getting started with React Maskedtextbox component | Syncfusion
description:  Checkout and learn about Getting started with React Maskedtextbox component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

The following section explains the required steps to build the MaskedTextBox component with its basic usage in step-by-step procedure.

## Dependencies

The following list of dependencies are required to use the MaskedTextBox component in your application.

```javascript
|-- @syncfusion/ej2-react-inputs
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-react-base
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

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.
You can choose the component that you want to install. For this application, we are going to use MaskedTextBox component.

To install MaskedTextBox component, use the following command

   ```bash
     npm install @syncfusion/ej2-react-inputs –save
   ```

## Adding MaskedTextBox to the application

Now, you can start adding MaskedTextBox component to the application. We have added MaskedTextBox component in `src/App.tsx` file using following code.

`[Class-component]`

```ts
import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";

// initializes MaskedTextBox component
ReactDOM.render(<MaskedTextBoxComponent/>,document.getElementById('maskedContainer'));
```

`[Functional-component]`

```ts
import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// initializes MaskedTextBox component
// sets mask format to the MaskedTextBox
function App() {
  return <MaskedTextBoxComponent />;
}
ReactDOM.render(<App />, document.getElementById('maskedContainer'));
```

## Set the mask

You can set the mask to the MaskedTextBox to validate the user input by using the [mask](https://ej2.syncfusion.com/react/documentation/api/maskedtextbox/#mask) property. To know more about the usage of mask and configuration, refer to this [link](./mask-configuration/).

The following example demonstrates the usage of mask element 0 that allows any single digit from 0 to 9.

`[Class-component]`

```ts
import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";

// initializes MaskedTextBox component
// sets mask format to the MaskedTextBox
ReactDOM.render(<MaskedTextBoxComponent mask={'000-000-0000'} />,document.getElementById('maskedContainer'));
```

`[Functional-component]`

```ts
import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// initializes MaskedTextBox component
// sets mask format to the MaskedTextBox
function App() {
  return <MaskedTextBoxComponent mask={'000-000-0000'} />;
}
ReactDOM.render(<App />, document.getElementById('maskedContainer'));
```

## Adding CSS reference

Import the MaskedTextBox component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
```

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

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