---
layout: post
title: Getting started with React Tree Grid component | Syncfusion
description:  Checkout and learn about Getting started with React Tree Grid component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Tree Grid

This section outlines the steps to create a simple Essential JS 2 Tree Grid and demonstrates basic usage in a React application.

For a quick start with React Tree Grid, refer to this video:

{% youtube "https://www.youtube.com/watch?v=dQcIAoSgARc" %}

## Prerequisites

| Requirement | Version |
|-------------|---------|
| React | 15.5.4 or higher |
| Node.js | 14.0.0 or above |
| Yarn (optional) | 0.25 or above |

### React supported versions

| React version | Minimum Syncfusion React Tree Grid version |
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

To set up a React application, choose between two popular tools: **Vite** or **create-react-app**.

**Vite is recommended** for new projects because it provides:
- **Faster development server**: Vite uses native ES modules during development, resulting in significantly faster startup times and Hot Module Replacement (HMR) compared to traditional bundler.
- **Smaller bundle sizes**: Optimized production builds with less overhead.
- **Better performance during development**: Especially valuable when working with large component libraries like Syncfusion.
- For detailed steps, refer to the [Vite installation guide](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

**create-react-app** remains a valid choice when a traditional setup is preferred, organizational requirements exist, or an existing create-react-app project is in use. For more information, refer to the [create-react-app documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app).

To create a new React application, run one of the following commands based on your preferred language:

***React with JavaScript***

```
npx create-vite@latest my-app --template react
```

***React with TypeScript***

```
npx create-vite@latest my-app --template react-ts
```

During the setup process, the CLI will prompt you for a few configuration options. Select the following:

- **Which linter to use?** → **ESLint**
- **Install with npm and start now?** → **Yes**

Selecting **Yes** automatically installs the project dependencies and starts the development server.

After verifying that the application starts successfully, terminate the development server in the terminal and proceed to the next step.

Then, navigate to the project directory:

```
cd my-app
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> React Tree Grid packages

To install the Tree Grid component, use the following command:

```
npm install @syncfusion/ej2-react-treegrid --save
```

## Adding CSS reference

Themes for Syncfusion® React Tree Grid component can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) documentation.

Install the **Material 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme --save

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "../node_modules/@syncfusion/ej2-material3-theme/styles/treegrid/index.css";

{% endhighlight %}
{% endtabs %}

## Adding Tree Grid component

The tree grid code should be placed in the **src/App.tsx** file.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/treegrid/getting-started/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/treegrid/getting-started/app/App.tsx %}
{% endhighlight %}
{% highlight css tabtitle="App.css" %}
{% raw %}

@import "../node_modules/@syncfusion/ej2-material3-theme/styles/treegrid/index.css";

{% endraw %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/getting-started-cs1" %}

## Run the application

```
npm run dev
```

## Registering Syncfusion license

Generate a license key from the [Syncfusion License Dashboard](https://www.syncfusion.com/account/downloads) and register it in the `main.jsx` or `main.tsx` file before rendering your React application:
 
```
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('YOUR_LICENSE_KEY_HERE');
```

> Replace `'YOUR_LICENSE_KEY_HERE'` with the actual license key obtained from your Syncfusion account. For more information, refer to the [Syncfusion Licensing documentation](https://ej2.syncfusion.com/react/documentation/licensing/license-key-registration).

## Troubleshooting

- **Grid not rendering styles:** Ensure the theme CSS is imported in `App.css` and that you removed the default Vite CSS in `index.css`.
- **Trial license warning banner:** Register a license key via `registerLicense()` from `@syncfusion/ej2-base`.

N> Looking for the full React Tree Grid component overview, features, pricing, and documentation? Visit the [React Tree Grid](https://www.syncfusion.com/react-components/react-tree-grid) page.

## See Also

* [Tree Grid Feature Modules](./module)