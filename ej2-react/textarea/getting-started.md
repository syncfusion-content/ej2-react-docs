---
layout: post
title: Getting Started with React TextArea | Syncfusion
description: Learn how to get started with the React TextArea component in Syncfusion Essential JS 2, including installation with Vite, configuration, and required styles.
control: Getting started  
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React TextArea component

This section explains the steps required to create a simple React TextArea component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

To get started quickly with React TextArea, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=cVT42kWTyEQ" %}

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> TextArea packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the TextArea component, use the following command

```bash
npm install @syncfusion/ej2-react-inputs --save
```

> The --save will instruct NPM to include the TextArea package inside of the **dependencies** section of the package.json.

## Adding CSS reference

The following CSS files are available in the **../node_modules/@syncfusion** package folder. Add these as references in **src/App.css**.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/tailwind3.css";
```

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding TextArea component

The React TextArea component can be added to the application by following these steps. To get started, add the TextArea component to the **src/App.tsx** file using the following code.

The following textarea code should be placed in the **src/App.tsx** file.

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

## Run the application

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The output appears as follows.

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

> Refer to the [React TextArea](https://www.syncfusion.com/react-components/react-textarea) feature tour page for its groundbreaking feature representations. You can also explore our [React TextArea component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/textarea/default) that shows how to render the TextArea in React.