---
layout: post
title: Getting started with React Inline AI Assist component | Syncfusion
description:  Checkout and learn about Getting started with React Inline AI Assist component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the React Inline AI Assist Component

This guide explains how to add a simple **Inline AI Assist** component and configure its basic functionality in a React application.

## Dependencies

The following dependencies are required to use the React `Inline AI Assist` component. The component is distributed as part of the `@syncfusion/ej2-react-interactive-chat` package.

```javascript
|-- @syncfusion/ej2-react-interactive-chat
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-popups
```

## Setup for Local Development

Create a new React application using `create-react-app` (or use an existing app).

```bash
npx create-react-app my-app
cd my-app
npm start
```

For a TypeScript template:

```bash
npx create-react-app my-app --template typescript
cd my-app
npm start
```

## Adding Syncfusion Packages

Install the interactive chat package that contains the Inline AI Assist component:

```bash
npm install @syncfusion/ej2-react-interactive-chat --save
```

## Adding the Inline AI Assist Component

Add the Inline AI Assist component to your application. In this example we use a functional component and render the component into the page.

```ts
import { InlineAIAssistComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    return (
        // specifies the tag to render the Inline AI Assist component
        <InlineAIAssistComponent id="inlineAiAssist"></InlineAIAssistComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

Use the `InlineAIAssistComponent` tag where you want the inline assistant to appear.

## Adding CSS References

Import the required theme files in your `src/App.css` (or equivalent) to apply styling. The example below uses the Tailwind3 theme; other themes are available.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-interactive-chat/styles/tailwind3.css";
```

## Run the Application

Start the development server to view the Inline AI Assist component.

```bash
npm start
```

`[Functional-componnet]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/getting-started/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/getting-started/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/getting-started" %}

## RelateTo and target configuration

You can use the `relateTo` property to position the Inline AI Assist relative to a specific DOM element. It accepts either a CSS selector string (e.g., '.container' or '#id') or an HTMLElement. The `target` property specifies the element or CSS selector where the Inline AI Assist will be appended. It accepts either a CSS selector string (e.g., '.container' or '#id') or an HTMLElement.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/relateTo-target/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/relateTo-target/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/relateTo-target" %}

## Response display modes

Responses can be shown in two modes: `Inline` (updates content in-place) and `Popup` (shows responses in a floating popup). Toggle this behavior with the `responseMode` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/response-mode/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/response-mode/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/response-mode" %}