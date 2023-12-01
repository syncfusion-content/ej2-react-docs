---
layout: post
title: Getting started with React Color picker component | Syncfusion
description:  Checkout and learn about Getting started with React Color picker component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

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

## Installation and configuration

You can use [Create-react-app](https://github.com/facebook/create-react-app) to setup the applications.
To install `create-react-app` run the following command.

```bash
    npm install -g create-react-app
```

To set-up a React application in TypeScript environment, run the following command.

<div class='tsx'>

```
npx create-react-app my-app --template typescript

cd my-app

npm start

```

</div>

To set-up a React application in JavaScript environment, run the following command.

<div class='jsx'>

```
npx create-react-app my-app

cd my-app

npm start

```

</div>

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.
You can choose the component that you want to install. For this application, we are going to use ColorPicker component.

To install ColorPicker component, use the following command

```bash
npm install @syncfusion/ej2-react-inputs –save
```


## Adding CSS reference

Import the ColorPicker component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
```

## Adding ColorPicker to the application

Now, you can start adding ColorPicker component to the application. We have added ColorPicker component in `src/App.tsx` file using following code.

```ts
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
import './App.css';
// initializes ColorPicker component
function App() {
    return ( <div style={{marginTop: '150px'}}>
        <div id='container'>
        <div className='wrap'>
            <h4>Choose Color</h4>
            <ColorPickerComponent id='color-picker'/>
        </div>
        </div>
        </div>
    );
};
export default App;
```

## Run the application

Use the `npm run start` command to run the application in the browser.

```
npm run start
```

The following example shows the default ColorPicker.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/getting-started-cs2" %}

## See Also

* [Set color value](./mode-and-value#color-value)
* [ColorPicker customization](./how-to/customize-colorpicker)