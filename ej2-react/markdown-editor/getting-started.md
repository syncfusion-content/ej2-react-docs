---
layout: post
title: Getting Started with React Markdown Editor component | Syncfusion
description: Check out and learn about Getting started with React Markdown Editor component of Syncfusion Essential JS 2 and more details.
control: Getting Started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Markdown Editor Component

The Syncfusion React Markdown Editor is a web-based editor that enables users to create, edit, and format Markdown content with features such as table support and structured content formatting. This section explains the steps required to create a simple Markdown Editor and demonstrate the basic usage of the Markdown Editor component in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview)

To get started quickly with the React Markdown Editor, refer to this video tutorial:

{% youtube "https://www.youtube.com/watch?v=OGzfKaZe7bo" %}

## Prerequisites

This guide uses Vite as the bundler and development environment. Install Node.js `24.13.0` or `higher` before proceeding. For detailed information about Vite’s capabilities and configuration options, refer to the [Vite documentation](https://vitejs.dev/).

N> For information about supported React versions and Syncfusion package compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/react/documentation/upgrade/version-compatibility) documentation.

## Create a React Application

Run the following command to set up a React application:

```bash
npm create vite@latest my-app -- --template react-ts
```

This command prompts you to configure the React application. When prompted to choose a linter, select an option based on your preference.

![Markdown Editor Linter configuration](images/linter-config.png)

Continue with the project setup and select the options as shown below.

![Markdown Editor Initial setup](../rich-text-editor/images/initial_setup.png)

As Syncfusion packages are not installed yet, currently, the `No` option will be selected. Then, navigate to the project directory and install the dependencies using the following commands:

```bash
cd my-app
npm install
```

> **Note:** To set up a React application with Nextjs or Remix, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/quick-start) for more details.

## Adding Syncfusion Rich Text Editor packages

All the available Essential JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the Rich Text Editor component, use the following command

```bash
npm install @syncfusion/ej2-react-richtexteditor
```

## Adding CSS reference

Syncfusion provides multiple themes for the Rich Text Editor component. For a complete list of available themes, refer to the [themes packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages). 

To apply the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme, install the corresponding theme package by using the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

In this package, the Rich Text Editor component includes an `index.css` file that automatically loads all the required dependency styles. Add the following import to **src/App.css**:

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css';
```

I> To apply the application-specific styles correctly, import **App.css** into **src/App.tsx** and remove all the default styles from **src/index.css**.

## Module Injection

The following modules provide the basic features of the Markdown Editor.

* **MarkdownEditor** - Inject this module to use the Rich Text Editor as Markdown Editor.
* **Image** - Inject this module to use the image feature in Markdown Editor.
* **Link** - Inject this module to use the link feature in Markdown Editor.
* **Toolbar** - Inject this module to use the Toolbar feature.

These modules can be injected into the `services` prop of the `<Inject>` component, as demonstrated in the following example.

{% tabs %}
{% highlight ts hl_lines="6" tabtitle="App.tsx" %}
{% include code-snippet/markdown-editor/getting-started-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js hl_lines="6" tabtitle="App.jsx" %}
{% include code-snippet/markdown-editor/getting-started-cs3/app/App.jsx %}
{% endhighlight %}
{% endtabs %}

T> Additional feature modules are available [here](https://ej2.syncfusion.com/react/documentation/rich-text-editor/module).

## Adding Markdown Editor component

Now, you can start adding React Markdown Editor component to the application. For getting started, add the Markdown Editor component to the **src/App.tsx** file using following code.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/markdown-editor/getting-started-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/markdown-editor/getting-started-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight css tabtitle="App.css" %}

@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css';

{% endhighlight %}
{% endtabs %}


## Run the Application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Markdown Editor is displayed in the browser as shown below.

![Syncfusion React Markdown Editor output](images/getting-started.png)

## See also

* [Accessibility in Markdown Editor](./accessibility)
* [Keyboard support in Markdown Editor](./keyboard-support)
* [Globalization in Rich Text Editor](rich-text-editor/globalization)