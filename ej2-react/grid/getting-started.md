---
layout: post
title: React Data Grid Getting Started (Quick Setup Guide) | Syncfusion
description: Learn how to install and configure the Syncfusion React Data Grid. Set up a new React app and enable paging, sorting, filtering, and grouping.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Data Grid

This section explains the steps required to create a simple [React Data Grid](https://www.syncfusion.com/react-components/react-data-grid) component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

To get started quickly with React Data Grid, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=IGLlZiuFdbA" %}

## Prerequisites

| Requirement | Version |
|-------------|---------|
| React | 15.5.4 or higher |
| Node.js | 14.0.0 or above |
| Yarn (optional) | 0.25 or above |

### React supported versions

| React version | Minimum Syncfusion React Data Grid version |
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
npx create-vite@latest my-app --template react
```

***React with TypeScript***

```bash
npx create-vite@latest my-app --template react-ts
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

## Adding React Grid packages

To install the Grids package, use the following command:

```bash
npm install @syncfusion/ej2-react-grids --save
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Data Grid component can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) documentation.

Install the **Material 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme --save

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";

{% endhighlight %}
{% endtabs %}

## Adding Data Grid component

The Data Grid code should be added to the **src/App.tsx** file.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/getting-started/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/getting-started/app/App.tsx %}
{% endhighlight %}
{% highlight css tabtitle="App.css" %}
{% raw %}

@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";

{% endraw %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/getting-started-cs1" %}

## Run the application

```bash
npm run dev
```

## Registering Syncfusion license

Generate a license key from the [Syncfusion License Dashboard](https://www.syncfusion.com/account/downloads) and register it before rendering your React application:

```tsx
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('YOUR_LICENSE_KEY');
```

> **Note:** A valid Syncfusion license is required for production use. Without a valid license, a trial license warning message will be displayed.

## Troubleshooting

- **Grid not rendering styles:** Ensure the theme CSS is imported in `App.css` and that you removed the default Vite CSS in `index.css`.
- **Trial license warning banner:** Register a license key via `registerLicense()` from `@syncfusion/ej2-base`.

N> Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit the [React Data Grid](https://www.syncfusion.com/react-components/react-data-grid) page.

## See also

* [Data Grid Feature Modules](./module)
* [Data Binding](./data-binding)
* [Top 5 Features of React Data Data Grid](https://www.syncfusion.com/blogs/post/top-5-features-react-data-grid.aspx)
* [How to render React Data Grid with bootstrap theme](https://support.syncfusion.com/kb/article/10054/how-to-render-react-grid-with-bootstrap-theme)
* [Getting Started with Next.js](./nextjs-getting-started)
* [Getting Started with SharePoint](./sharepoint)
* [Getting Started with Preact](./preact)