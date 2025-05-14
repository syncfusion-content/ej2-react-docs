---
layout: post
title: Getting Started with React SpeechToText Component | Syncfusion
description: Checkout and learn about getting started with React SpeechToText component of Syncfusion Essential JS 2 and more details.
control: SpeechToText
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started Started with React SpeechToText Component

This section explains how to create a simple SpeechToText and configure its available functionalities in the React environment.

## Dependencies

The following list of dependencies is required to use the SpeechToText component in your application.

```js
|-- @syncfusion/ej2-react-inputs
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
```

## Setup for Local Development

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

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install SpeechToText component, use the following command

```bash
npm install @syncfusion/ej2-react-inputs --save
```

## Adding SpeechToText component

Now, you can start adding SpeechToText component in the application. For getting started, add the SpeechToText component by using `<SpeechToTextComponent>` tag directive in `src/App.tsx` file using following code. Now place the below SpeechToText code in the `src/App.tsx`.

`[Class-component]`

```ts

import { SpeechToTextComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
        // specifies the tag for render the Speech to text component
        <SpeechToTextComponent id='speechToText'></SpeechToTextComponent>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('speech-to-text'));
```

`[Functional-component]`

```ts
import { SpeechToTextComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    return (
        // specifies the tag for render the Speech to text component
        <SpeechToTextComponent id="speechToText"></SpeechToTextComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('speech-to-text'));
```

## Adding CSS Reference

Import the SpeechToText component required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
```
## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The following example shows a basic SpeechToText component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speech-to-text/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speech-to-text/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/getting-started-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speech-to-text/getting-started-cs1" %}

> The [SpeechToText](../api/speech-to-text/) component requires an internet connection and using a browser that supports [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) from the Web Speech API.

 ## Adding button content

You can use the [content](../api/speech-to-text/buttonSettingsModel/#content) property to display the start listening text and [stopContent](../api/speech-to-text/buttonSettingsModel/#stopContent) to display the stop listening text by using the [buttonSettings](../api/speech-to-text/#buttonSettings) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speech-to-text/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speech-to-text/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/getting-started-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speech-to-text/getting-started-cs2" %}
 
