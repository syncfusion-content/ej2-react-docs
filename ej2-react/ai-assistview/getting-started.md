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

## Create a React Application

Run the following commands to set up a React application:

```bash
npm create vite@latest my-app -- --template react-ts
```

This command will prompt you to install the required packages and start the application. Select the options as shown below.

![Assistview Initial setup](images/initial_setup.png)

As Syncfusion packages are not installed yet, currently, the `No` option will be selected. Then, navigate to the project directory and install the dependencies using the following commands:

```
cd my-app
npm install
```

> **Note:** To set up a React application with Nextjs or Remix, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/quick-start) for more details.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Packages

All Syncfusion Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are available on the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install.

To install the AI AssistView component package, run the following command:

```bash
npm install @syncfusion/ej2-react-interactive-chat --save
```

## Adding CSS References

To apply styling to the AI AssistView component, import the required CSS theme files into your `src/App.css` file. The following example uses the Tailwind3 theme, but other themes like Bootstrap 5, Tailwind CSS, or Fluent are also available.

```css

/* import the AI AssistView dependency styles */

@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-interactive-chat/styles/tailwind3.css";

```

## Adding the AI AssistView Component

Now, you can start adding AI AssistView component in the application. For getting started, add the AI AssistView component by using `<AIAssistViewComponent>` tag directive in `src/App.tsx` file using following code. Now place the below AI AssistView code in the `src/App.tsx`.

```ts
import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent ></AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('aiAssistView'));
```

## Run the Application

With the configuration complete, run the application to see the AI AssistView component rendered in your browser.

```
npm start
```

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/ai-assistview/getting-started/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/ai-assistview/getting-started/app/index.jsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/getting-started" %}

> **Note:** Starting from version 33.1x, when a user submits a prompt to the AI AssistView, the component automatically scrolls and focuses on the latest prompt and response. This behavior eliminates the need for users to manually scroll down to see the new response, ensuring they always view the most recent AI response without interruption. Prior to version 33.1x, the previous responses remained visible when new responses were added.

## Configure Suggestions and Asynchronous Responses

The AI AssistView component can be configured to guide user interactions and provide dynamic content from an AI backend.

*   **[promptSuggestions](https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptsuggestions)**: Use this property to display a list of predefined suggestion chips that users can click to submit a prompt.
*   **[promptRequest](https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptrequest)**: This event is triggered when a user sends a prompt. You can use its event handler to make an asynchronous API call to an AI service and stream the response back to the component.

The following example demonstrates how to define prompt suggestions and handle the `promptRequest` event to simulate fetching a response from a backend.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/ai-assistview/defaultPrompts/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/ai-assistview/defaultPrompts/app/index.jsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/defaultprompts" %}