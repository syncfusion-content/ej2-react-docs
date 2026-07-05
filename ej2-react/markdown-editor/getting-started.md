---
layout: post
title: Getting Started with React Markdown Editor component | Syncfusion
description: Checkout and learn about Getting started with React Markdown Editor component of Syncfusion Essential JS 2 and more details.
control: Getting Started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Markdown Editor Component

The Syncfusion React Markdown Editor is a web-based editor that enables users to create, edit, and format Markdown content with features such as table support and structured content formatting. This section explains you the steps required to create a simple Markdown Editor and demonstrate the basic usage of the Markdown Editor component in React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview)

To get started quickly with the React Markdown Editor, refer to this video tutorial:

{% youtube "https://www.youtube.com/watch?v=OGzfKaZe7bo" %}

## Prerequisites

This guide uses Vite as the bundler and development environment. Install Node.js `24.13.0` or higher before proceeding. For detailed information about Vite’s capabilities and configuration options, refer to the [Vite documentation](https://vitejs.dev/).

## Create a React Application

Run the following commands to set up a React application:

```bash
npm create vite@latest my-app -- --template react-ts
```
<<<<<<< HEAD

This command will prompt you to install the required packages and start the application. Select the options as shown below.

![Markdown Editor Initial setup](../rich-text-editor/images/initial_setup.png)

As Syncfusion packages are not installed yet, currently, the `No` option will be selected. Then, navigate to the project directory and install the dependencies using the following commands:

```bash
cd my-app
npm install
=======

This command will prompt you to install the required packages and start the application. Select the options as shown below.

![Markdown Editor Initial setup](../rich-text-editor/images/initial_setup.png)

As Syncfusion packages are not installed yet, currently, the `No` option will be selected. Then, navigate to the project directory and install the dependencies using the following commands:

>>>>>>> 8f3c51b893fb30a2292cc772a92ba38135a0569f
```
cd my-app
npm install
```

> **Note:** To set up a React application with Nextjs or Remix, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/quick-start) for more details.

> **Note:** To set up a React application with Nextjs or Remix, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/quick-start) for more details.

## Adding Syncfusion Rich Text Editor packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install Rich Text Editor component, use the following command

```
npm install @syncfusion/ej2-react-richtexteditor
```

## Adding CSS reference

The following CSS files are available in **../node_modules/@syncfusion** package folder. This can be added as reference in **src/App.css**.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';
```

I> To apply the application-specific styles correctly, import **App.css** into **src/App.tsx** and remove all the default styles from **src/index.css**.

## Module Injection

The following modules provide the basic features of the Markdown Editor.

* **MarkdownEditor** - Inject this module to use Rich Text Editor as markdown editor.
* **Image** - Inject this module to use image feature in Markdown Editor.
* **Link** - Inject this module to use link feature in Markdown Editor.
* **Toolbar** - Inject this module to use Toolbar feature.

These modules should be injected into the `services` section of the component.

> Additional feature modules are available [here](https://ej2.syncfusion.com/react/documentation/rich-text-editor/module).

## Adding Markdown Editor component

Now, you can start adding React Markdown Editor component in the application. For getting started, add the Markdown Editor component in **src/App.tsx** file using following code.

Place the following Markdown Editor code in the **src/App.tsx**.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/markdown-editor/getting-started-cs3/app/App.tsx %}
<<<<<<< HEAD
{% endhighlight %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/markdown-editor/getting-started-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight css tabtitle="App.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';
=======
>>>>>>> 8f3c51b893fb30a2292cc772a92ba38135a0569f
{% endhighlight %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/markdown-editor/getting-started-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight css tabtitle="App.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

<<<<<<< HEAD

=======
>>>>>>> 8f3c51b893fb30a2292cc772a92ba38135a0569f
## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

## See also

* [Accessibility in Markdown editor](https://ej2.syncfusion.com/react/documentation/markdown-editor/accessibility)
* [Keyboard support in Markdown editor](https://ej2.syncfusion.com/react/documentation/markdown-editor/keyboard-support)
* [Globalization in Markdown editor](https://ej2.syncfusion.com/react/documentation/rich-text-editor/globalization)