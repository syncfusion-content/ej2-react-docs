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

## Dependencies

The following list of dependencies are required to use the TextArea component in your application.

```javascript
|-- @syncfusion/ej2-react-inputs
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
```

## Installation and configuration

* You can use [`create-react-app`](https://github.com/facebook/create-react-app) to setup the applications.
To install `create-react-app` run the following command.

   ```bash
     npm install -g create-react-app
   ```

* Start a new project using create-react-app command as follows.

    ```bash
       create-react-app quickstart --scripts-version=react-scripts-ts
       cd quickstart
    ```

* To install TextArea component, use the following command.

    ```bash
      npm install @syncfusion/ej2-react-inputs –save
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

Run the application in the browser using the following command:

   ```
   npm start
   ```

The following example shows a basic TextArea component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textarea/default-textarea-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
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
