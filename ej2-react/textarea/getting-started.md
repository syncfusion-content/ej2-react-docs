---
layout: post
title: Getting Started with React TextArea | Syncfusion
description: Learn how to get started with the React TextArea component in Syncfusion Essential JS 2, including installation with Vite, configuration, and required styles.
control: Getting started  
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React TextArea Component

This section briefly explains how to create a simple TextArea and demonstrate the basic functionalities of the TextArea component in a React environment.

To get started quickly with React TextArea, watch this video:

{% youtube "https://www.youtube.com/watch?v=cVT42kWTyEQ" %}

## Dependencies

The following list of dependencies are required to use the TextArea component in your application.

```javascript
|-- @syncfusion/ej2-react-inputs
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-base
```

## Installation and Configuration

To easily set up a React application, use Vite, which provides a fast development server, smaller bundles, and optimized builds compared to tools like Create React App. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide).

> Note: To create a React application using Create React App, refer to the [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

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

All Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published on the public npm registry at [npmjs.com](https://www.npmjs.com/~syncfusionorg). This guide uses the TextArea component from these packages.

To install the TextArea component, use the following command.

```bash
npm install @syncfusion/ej2-react-inputs --save
```

The above command installs the required [Slider dependencies](#dependencies) to render the component in the React environment.

## Adding CSS Reference

* The TextArea CSS files are available in the `ej2-react-inputs` package. Reference them in your application using the following code.

`[src/App.css]`

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
```

You can check out the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) topic to know more about built-in themes and different ways to refer themes in a React application.

> Note: The Custom Resource Generator (CRG) at https://crg.syncfusion.com/ is an online tool used to generate custom scripts and styles for specific components. It helps combine the required component scripts and styles into a single file.

## Adding TextArea to the Application

To include the TextArea component in your application, import the `TextAreaComponent` from the `ej2-react-inputs` package in `App.tsx`.

Add the TextArea component to the application as shown in the following example.

```ts
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import './App.css';

function App() {
  return (
    <TextAreaComponent id='default'></TextAreaComponent>
  );
}
export default App;
```

## Run the Application

Run the `npm run dev` command in the console to start the development server. This compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The following example shows a basic TextArea component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/textarea/default-textarea-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/textarea/default-textarea-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/default-textarea-cs1" %}

## Getting and setting values

To set the initial value of the TextArea component, use the [`value`](https://ej2.syncfusion.com/react/documentation/api/textarea/index-default#value) property. Here's how you can achieve it:

```ts
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import './App.css';

function App() {
  return (
    <div className='wrap'>
      <TextAreaComponent id='default' value='Comments'></TextAreaComponent>
    </div>
  );
}
export default App;
```

* Alternatively, set the value of the TextArea using a state variable.

```ts
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import { useState } from 'react';
import * as React from 'react';
import './App.css';

function App() {
  // Declare state variable textValue and a function setTextValue to update it.
  const [textValue, setTextValue] = useState("comments");
  return (
    <div className='wrap'>
      <TextAreaComponent id='default' value={textValue}></TextAreaComponent>
    </div>
  );
}
export default App;
```

* Dynamically retrieve the value of the TextArea component using the state variable assigned to the `value` property.

```ts
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import { useState } from 'react';
import * as React from 'react';
import './App.css';

function App() {
  const [textValue, setTextValue] = useState("comments");
  function onButtonClick() {
    // Get the value of the TextArea using state variable.
    let value = textValue;
  }
  return (
    <div className='wrap'>
      <TextAreaComponent id='default' value={textValue}></TextAreaComponent>
      <button id="valuebtn" onClick={onButtonClick.bind(this)}>Get Value</button>
    </div>
  );
}
export default App;
```

* Retrieve the value of the TextArea by accessing it from the [`change`](https://ej2.syncfusion.com/react/documentation/api/textarea/index-default#change) event arguments.

```ts
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import type { ChangedEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import './App.css';

function App() {
  // triggers when the content of TextArea has changed and gets focus-out.
  function change(args: ChangedEventArgs) {
    // Get the value of the TextArea from event arguments.
    let value = args.value;
  }
  return (
    <div className='wrap'>
      <TextAreaComponent id='default' value='Comments' change={change}></TextAreaComponent>
    </div>
  );
}
export default App;
```
