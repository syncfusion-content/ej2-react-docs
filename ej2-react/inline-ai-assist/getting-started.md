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

This section explains how to create a simple [React Inline AI Assist](https://www.syncfusion.com/react-components/react-inline-ai-assist) component and demonstrate its basic usage in a React environment.

## Prerequisites

| Requirement | Version |
|-------------|---------|
| React | 15.5.4 or higher |
| Node.js | 14.0.0 or above |
| Yarn (optional) | 0.25 or above |

### React supported versions

| React version | Minimum Syncfusion React Inline AI Assist version |
| ------------- | -------------------------------------------------- |
| [React v19](https://react.dev/blog/2024/12/05/react-19) | 29.1.33 and above |
| [React v18](https://reactjs.org/blog/2022/03/29/react-v18.html) | 20.2.36 and above |
| [React v17](https://reactjs.org/blog/2020/10/20/react-v17.html) | 18.3.50 and above |
| [React v16](https://reactjs.org/blog/2017/09/26/react-v16.0.html) | 16.2.45 and above |

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

Easily set up a React application using `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide).

> **Note:** To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

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

## Adding React Inline AI Assist packages

Install the interactive chat package that contains the Inline AI Assist component:

```bash
npm install @syncfusion/ej2-react-interactive-chat --save
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Inline AI Assist component can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) documentation.

Install the **Tailwind 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/inline-ai-assist/index.css";

{% endhighlight %}
{% endtabs %}

## Adding the Inline AI Assist component

Now, you can start adding the Inline AI Assist component to the application. For getting started, add the component by using the `<InlineAIAssistComponent>` tag directive in the `src/App.tsx` file. Place the following code in `src/App.tsx`.

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

## Registering your Syncfusion license

Generate a license key from the [Syncfusion License Dashboard](https://www.syncfusion.com/account/downloads) and register it before rendering your React application:

```tsx
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('YOUR_LICENSE_KEY');
```

> **Note:** A valid Syncfusion license is required for production use. Without a valid license, a trial license warning message will be displayed.

## Run the application

With the configuration complete, run the application to see the Inline AI Assist component rendered in your browser.

```bash
npm start
```

{% tabs %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/getting-started/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/getting-started/app/index.jsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/getting-started" %}

## RelateTo and target configuration

You can use the `relateTo` property to position the Inline AI Assist relative to a specific DOM element. It accepts either a CSS selector string such as `.container` or `#id`, or an `HTMLElement`. The `target` property specifies the element or CSS selector where the Inline AI Assist will be appended. It accepts either a CSS selector string or an `HTMLElement`.

{% tabs %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/relateTo-target/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/relateTo-target/app/index.jsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/relateTo-target" %}

## Response display modes

Responses can be shown in two modes: `Inline`, which updates the content in place, and `Popup`, which displays responses in a floating popup. Toggle this behavior with the `responseMode` property.

{% tabs %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/response-mode/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/response-mode/app/index.jsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/response-mode" %}

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

- **Inline AI Assist not rendering styles:** Ensure the theme CSS is imported in `App.css` and that you removed the default Vite CSS in `index.css`.
- **Trial license warning banner:** Register a license key via `registerLicense()` from `@syncfusion/ej2-base`.
- **Port 5173 already in use:** Stop the conflicting process or run Vite on a different port with `npm run dev -- --port 3000`.