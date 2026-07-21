---
layout: post
title: Getting started with React AI AssistView component | Syncfusion
description:  Checkout and learn about Getting started with React AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the React AI AssistView

This section explains the steps required to create a simple [React AI AssistView](https://www.syncfusion.com/react-components/react-ai-assistview) component and demonstrate its basic usage in a React environment.

To get started quickly with the React AI AssistView component, you can check out this video tutorial:
{% youtube "https://www.youtube.com/watch?v=rwXanLEHdFU" %}

## Prerequisites

| Requirement | Version |
|-------------|---------|
| React | 15.5.4 or higher |
| Node.js | 14.0.0 or above |
| Yarn (optional) | 0.25 or above |

### React supported versions

| React version | Minimum Syncfusion React Data AI AssistView version |
| ------------- | ------------------------------------------- |
| [React v19](https://react.dev/blog/2024/12/05/react-19) | 29.1.33 and above |
| [React v18](https://reactjs.org/blog/2022/03/29/react-v18.html) | 20.2.36 and above |
| [React v17](https://reactjs.org/blog/2020/10/20/react-v17.html) | 18.3.50 and above |
| [React v16](https://reactjs.org/blog/2017/09/26/react-v16.0.html) | 16.2.45 and above | |

### Browser support

| Browser | Supported versions |
|---|---|
| Chrome | Latest |
| Firefox | Latest |
| Opera | Latest |
| Edge | 13+ |
| Internet Explorer (IE) | 11+ |
| Safari | 9+ |
| iOS Safari | 9+ |
| Android Browser / Chrome for Android | 4.4+ |
| Windows Mobile | IE 11+ |


## Setup for local development

Easily set up a React application using `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run one of the following commands based on your preferred language:

***React with JavaScript***

```bash
npx create vite@latest my-app -- --template react
```

***React with TypeScript***

```bash
npx create vite@latest my-app -- --template react-ts
```

During the setup process, the CLI will prompt you for a few configuration options. Select the following:

- **Which linter to use?** → **ESLint**
- **Install with npm and start now?** → **Yes**

Selecting **Yes** automatically installs the project dependencies and starts the development server.

After verifying that the application starts successfully, terminate the development server in the terminal and proceed to the next step.

Then, navigate to the project directory:

```bash
cd my-app
```

## Adding React AI AssistView packages

To install the AI AssistView package, use the following command:

```bash
npm install @syncfusion/ej2-react-interactive-chat --save
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> AI AssistView component can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) documentation.

Install the **Tailwind 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/ai-assistview/index.css";

{% endhighlight %}
{% endtabs %}

## Adding AI AssistView component

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

## Registering your Syncfusion License

Generate a license key from the [Syncfusion License Dashboard](https://www.syncfusion.com/account/downloads) and register it before rendering your React application:

```tsx
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('YOUR_LICENSE_KEY');
```

> **Note:** A valid Syncfusion license is required for production use. Without a valid license, a trial license warning message will be displayed.

## Run the application

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

## Configure suggestions and asynchronous responses

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

### Production build

To create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Troubleshooting

- **AI AssistView not rendering styles:** Ensure the theme CSS is imported in `App.css` and that you removed the default Vite CSS in `index.css`.
- **Trial license warning banner:** Register a license key via `registerLicense()` from `@syncfusion/ej2-base`.
- **Port 5173 already in use:** Stop the conflicting process or run Vite on a different port with `npm run dev -- --port 3000`.
