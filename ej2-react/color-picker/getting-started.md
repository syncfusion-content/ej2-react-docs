---
layout: post
title: Getting Started with React ColorPicker | Syncfusion
description: Learn how to get started with the React ColorPicker component in Syncfusion, including installation with Vite, configuration, and required styles.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React ColorPicker Component

The following section explains the required steps to build the ColorPicker component with its basic usage in step-by-step procedure.

## Dependencies

The following list of dependencies are required to use the ColorPicker component in your application.

```javascript
|-- @syncfusion/ej2-react-inputs
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
```

## Installation and Configuration

To easily set up a React application, use Vite, which provides a fast development server, smaller bundles, and optimized builds compared to tools like Create React App. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide).

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

All Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published on the public npm registry at [npmjs.com](https://www.npmjs.com/~syncfusionorg). Choose the component to install. This guide uses the ColorPicker component.

To install the ColorPicker component, use the following command.

```bash
npm install @syncfusion/ej2-react-inputs --save
```

## Adding CSS Reference

Import the ColorPicker component's required CSS in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
```

You can check out the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) topic to know more about built-in themes and different ways to refer themes in a React application.

## Adding ColorPicker to the Application

Add the ColorPicker component to the application. Use the following code in `src/App.tsx`.

{% raw %}
```ts
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import './App.css';

function App() {
  return (<div style={{ marginTop: '150px' }}>
    <div id='container'>
      <div className='wrap'>
        <h4>Choose Color</h4>
        <ColorPickerComponent id='color-picker' />
      </div>
    </div>
  </div>
  );
};
export default App;
```
{% endraw %}

## Run the Application

Run the `npm run dev` command in the console to start the development server. This compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The following example shows the default ColorPicker.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/colorpicker/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/colorpicker/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/getting-started-cs2" %}

## See Also

* [Set color value](./mode-and-value#color-value)
* [ColorPicker customization](./how-to/customize-colorpicker)