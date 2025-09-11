---
layout: post
title: Getting started with React Chat UI component | Syncfusion
description:  Checkout and learn about Getting started with React Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Chat UI component

This section explains how to create a simple **Chat UI** component and configure its essential functionalities in React.

## Dependencies

The `Chat UI` component requires the following dependencies in your application:

```javascript
|-- @syncfusion/ej2-react-interactive-chat
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-dropdowns
```

## Setup for Local Development

To set up a React application, choose any of the following approaches. The recommended method is using [create-react-app](https://github.com/facebook/create-react-app), which configures your development environment and optimizes your application for production. Refer to the [installation instructions](https://github.com/facebook/create-react-app#creating-an-app) for detailed guidance.

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

To install Chat UI component, use the following command

```bash
npm install @syncfusion/ej2-react-interactive-chat --save
```

## Adding Chat UI component

Now, you can start adding Chat UI component in the application. For getting started, add the Chat UI component by using `<ChatUIComponent>` tag directive in `src/App.tsx` file using following code. Now place the below Chat UI code in the `src/App.tsx`.

`[Functional-component]`

```ts
import { ChatUIComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent id="chat-ui"></ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('chat-ui'));
```

## Adding CSS reference

Import the Chat UI component required CSS references as follows in `src/App.css`.

```css

/* import the Chat UI dependency styles */

@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-react-interactive-chat/styles/material.css";

```

## Run the application

After completing the basic configuration, run the following command to display the Chat UI component in your default browser:

```
npm start
```

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/getting-started/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/getting-started/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/getting-started" %}

## Configure messages and user

Enhance your Chat UI by configuring messages and users. Use the `MessagesDirective` to group all messages and `MessageDirective` to define individual messages. The [user](../api/chat-ui/#user) property configures the current user for the chat interface.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/defaultMessage/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/defaultMessage/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/defaultMessage" %}
