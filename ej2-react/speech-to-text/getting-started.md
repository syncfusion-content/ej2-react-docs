---
layout: post
title: Getting started with React SpeechToText component | Syncfusion
description:  Checkout and learn about Getting started with React SpeechToText component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple SpeechToText and configure its available functionalities in the React environment.

## Dependencies

The following list of dependencies is required to use the SpeechToText component in your application.

```js
|-- @syncfusion/ej2-react-inputs
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-react-base

```

## Installation and configuration

You can use [`Create-react-app`](https://github.com/facebook/create-react-app) to setup the applications. To install `create-react-app` run the following command.

   ```bash 
      npm install -g create-react-app
   ```

Start a new project using create-react-app command as follows

    ```
     create-react-app quickstart --scripts-version=react-scripts-ts
     cd quickstart
    ```
    ```
    create-react-app quickstart
    cd quickstart
    ```

> 'react-scripts-ts' is used for creating React app with typescript.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install SpeechToText component, use the following command

```bash
npm install @syncfusion/ej2-react-inputs --save

## Adding SpeechToText component to the application

To include the SpeechToText component in your application import the `SpeechToTextComponent` from `ej2-react-inputs` package in `App.tsx`.

Add the SpeechToText component in application as shown in below code example.

```ts
{ /* Import the SpeechToText.*/ }
import { SpeechToTextComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import './App.css';

{ /* To render SpeechToText. */ }
function App() {
    return (
        <SpeechToTextComponent id='speechToText'></SpeechToTextComponent>
    );
}
export default App;
```

## Adding CSS Reference

Import the SpeechToText component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
```
## Run the application

Run the application in the browser using the following command:

```
npm start
```

The following example shows a basic SpeechToText component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/speech-to-text/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/speech-to-text/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speech-to-text/getting-started-cs1" %}

 ## Add button content

 You can use the `Content` property to display the start listening text and `StopContent` to display the stop listening text by using the ButtonSettings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/speech-to-text/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/speech-to-text/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speech-to-text/getting-started-cs2" %}