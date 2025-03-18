---
layout: post
title: Getting started with React SpeechToText component | Syncfusion
description: Checkout and learn about Getting started with React SpeechToText component of Syncfusion Essential JS 2 and more details.
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

To set-up a React application, choose any of the following ways. The best and easiest way is to use the [create-react-app](https://github.com/facebook/create-react-app). It sets up your development environment in JavaScript and improvise your application for production. Refer to the [installation instructions](https://github.com/facebook/create-react-app#creating-an-app) of `create-react-app`.

```bash
npx create-react-app my-app
cd my-app
npm start
```

or

```bash
yarn create react-app my-app
cd my-app
yarn start
```

To set-up a React application in `TypeScript` environment, run the following command.

```bash
npx create-react-app my-app --template typescript
cd my-app
npm start
```

Besides using the [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) package runner tool, also create an application from the `npm init`. To begin with the `npm init`, upgrade the `npm` version to `npm 6+`.

```bash
npm init react-app my-app
cd my-app
npm start
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

After completing the configuration required to render a basic SpeechToText, run the following command to display the output in your default browser.

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

 ## Adding button content

 You can use the `content` property to display the start listening text and `stopContent` to display the stop listening text by using the `buttonSettings` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/speech-to-text/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/speech-to-text/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speech-to-text/getting-started-cs2" %}