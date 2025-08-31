---
layout: post
title: Getting started with React AI AssistView component | Syncfusion
description:  Checkout and learn about Getting started with React AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the React AI AssistView Component

This section explains how to create a simple **AI AssistView** component and configure its available functionalities in React.

To get started quickly with the React AI AssistView component, you can check out this video tutorial:
{% youtube "https://www.youtube.com/watch?v=rwXanLEHdFU" %}

## Dependencies

The following list of dependencies is required to use the React `AI AssistView` component in your application. The component is distributed as part of the `@syncfusion/ej2-react-interactive-chat` package.

```javascript
|-- @syncfusion/ej2-react-interactive-chat
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
```

## Setup for Local Development

The recommended way to create a new React application is by using [create-react-app](https://github.com/facebook/create-react-app).This tool sets up a development environment with everything you need to build, test, and optimize your application for production. Refer to the [installation instructions](https://github.com/facebook/create-react-app#creating-an-app) of `create-react-app`.

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

To create a React application with `TypeScript` environment, run the following command.

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Packages

All Syncfusion Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are available on the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install.

To install the AI AssistView component package, run the following command:

```bash
npm install @syncfusion/ej2-react-interactive-chat --save
```

## Adding the AI AssistView Component

Now, you can start adding AI AssistView component in the application. For getting started, add the AI AssistView component by using `<AIAssistViewComponent>` tag directive in `src/App.tsx` file using following code. Now place the below AI AssistView code in the `src/App.tsx`.

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

## Adding CSS References

To apply styling to the AI AssistView component, import the required CSS theme files into your `src/App.css` file. The following example uses the Material theme, but other themes like Bootstrap 5, Tailwind CSS, or Fluent are also available.

```css

/* import the AI AssistView dependency styles */

@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-interactive-chat/styles/material.css";

```

## Run the Application

With the configuration complete, run the application to see the AI AssistView component rendered in your browser.

```
npm start
```

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

## Configure Suggestions and Asynchronous Responses

The AI AssistView component can be configured to guide user interactions and provide dynamic content from an AI backend.

*   **[promptSuggestions](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#promptsuggestions)**: Use this property to display a list of predefined suggestion chips that users can click to submit a prompt.
*   **[promptRequest](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#promptrequest)**: This event is triggered when a user sends a prompt. You can use its event handler to make an asynchronous API call to an AI service and stream the response back to the component.

The following example demonstrates how to define prompt suggestions and handle the `promptRequest` event to simulate fetching a response from a backend.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/defaultPrompts/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/defaultPrompts/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/defaultprompts" %}