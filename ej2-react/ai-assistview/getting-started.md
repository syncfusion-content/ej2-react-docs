---
layout: post
title: Getting started with React AI AssistView component | Syncfusion
description:  Checkout and learn about Getting started with React AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in React AI AssistView component

This section explains how to create a simple **AI AssistView** component and configure its available functionalities in React.

To get started quickly with React AI AssistView component, you can check out this video:
{% youtube "https://www.youtube.com/watch?v=rwXanLEHdFU" %}

## Dependencies

The list of dependencies required to use the `AI AssistView` component in your application is given as follows:

```javascript
|-- @syncfusion/ej2-react-interactive-chat
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
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

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install.

To install AI AssistView component, use the following command

```bash
npm install @syncfusion/ej2-react-interactive-chat --save
```

## Adding AI AssistView component

Now, you can start adding AI AssistView component in the application. For getting started, add the AI AssistView component by using `<AIAssistViewComponent>` tag directive in `src/App.tsx` file using following code. Now place the below AI AssistView code in the `src/App.tsx`.

`[Class-component]`

```ts

import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
        // specifies the tag for render the AI AssistView omponent
        <AIAssistViewComponent id="aiAssistView"></AIAssistViewComponent>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('aiAssistView'));
```

`[Functional-component]`

```ts
import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent id="aiAssistView"></AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('aiAssistView'));
```

## Adding CSS reference

Import the AI AssistView component required CSS references as follows in `src/App.css`.

```css

/* import the AI AssistView dependency styles */

@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-interactive-chat/styles/material.css";

```

## Run the application

After completing the configuration required to render a basic AI AssistView, run the following command to display the output in your default browser.

```
npm start
```

`[Class-componnet]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/getting-started-class/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/getting-started-class/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/getting-started-class" %}

`[Functional-componnet]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/getting-started/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/getting-started/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/getting-started" %}

## Configure suggestions and responses

You can use the [promptSuggestions](https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptsuggestions) property to add prompt suggestions and the [promptRequest](https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptrequest) event to add responses when the prompt matches the specified prompts data otherwise, the default response will be displayed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/defaultPrompts/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/defaultPrompts/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/defaultprompts" %}
