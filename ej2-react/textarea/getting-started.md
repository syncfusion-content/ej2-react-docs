---
layout: post
title: Getting started with React TextArea component | Syncfusion
description:  Checkout and learn about Getting started with React TextArea component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React TextArea Component

This section briefly explains how to create a simple TextArea and demonstrate the basic functionalities of the TextArea component in an React environment.

To get start quickly with React TextArea, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=cVT42kWTyEQ" %}

## Dependencies

The following list of dependencies are required to use the TextArea component in your application.

```javascript
|-- @syncfusion/ej2-react-inputs
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
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

* The above package installs [Input dependencies](./getting-started/#dependencies) which are required to render the TextArea component in React environment.

* The TextArea CSS files are available in the `ej2-react-inputs` package folder. This can be referenced in your application using the following code.

`[src/App.css]`

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

## Adding TextArea to the application

To include the TextArea component in your application import the `TextAreaComponent` from `ej2-react-inputs` package in `App.tsx`.

Add the TextArea component in application as shown in below code example.

```ts
{ /* Import the TextArea.*/ }
import { TextAreaComponent  } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import './App.css';

{ /* To render TextArea. */ }
function App() {
    return (
        <TextAreaComponent id='default'></TextAreaComponent>
    );
}
export default App;
```

## Running the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

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

To set the initial value of the TextArea component, you can utilize the [`value`](https://ej2.syncfusion.com/react/documentation/api/textarea/#value) property. Here's how you can achieve it:

```ts
{/* Import the TextArea. */}
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render TextArea.*/}
function App() {
  
    return (
        <div className='wrap'>
            <TextAreaComponent id='default' value='Comments'></TextAreaComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('input-container'));
```

* Alternatively, you can set the value of the TextArea using a state variable.

```ts
{/* Import the TextArea. */}
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import { useState } from 'react';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render TextArea.*/}
function App() {
    // Declare state variable textValue and a function setTextValue to update it.
    const [textValue, setTextValue] = useState("comments");
    return (
        <div className='wrap'>
            {/* Render TextArea with value property set to textValue state variable. */}
            <TextAreaComponent id='default' value={textValue}></TextAreaComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('input-container'));
```

* You can dynamically retrieve the value of the TextArea component using the state variable assigned to the `value` property of the TextArea component.

```ts
{/* Import the TextArea. */}
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import { useState } from 'react';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render TextArea.*/}
function App() {
    const [textValue, setTextValue] = useState("comments");
    function onButtonClick () {
        // Get the value of the TextArea using state variable.
        let value = textValue; 
    }
    return (
        <div className='wrap'>
            <TextAreaComponent id='rating' value={textValue}></TextAreaComponent>
            <button id="valuebtn" onclick={onButtonClick.bind(this)}>Get Value</button>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('input-container'));
```

* You can retrieve the value of the TextArea by accessing it as an argument from the [`change`](https://ej2.syncfusion.com/react/documentation/api/textarea/#change) event.

```ts
{/* Import the TextArea. */}
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render TextArea.*/}
function App() {
    // triggers when the content of TextArea has changed and gets focus-out.
    function change(args) {
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
ReactDom.render(<App />,document.getElementById('input-container'));
```
