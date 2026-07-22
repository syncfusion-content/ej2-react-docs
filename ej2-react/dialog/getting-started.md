---
layout: post
title: Getting started with React Dialog component | Syncfusion
description: Checkout and learn how to get started with the React Dialog component from Syncfusion Essential JS 2.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Dialog component

This section explains the steps required to create a simple React Dialog component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

To get started quickly with React Dialog, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=upDeXQMYFoc" %}

## Prerequisites
 
[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement)
 
## Set up the Vite project
 
To create a new `Vite` project, use one of the commands that are specific to either NPM or Yarn.
 
{% tabs %}
{% highlight bash tabtitle="npm" %}
npm create vite@latest my-project -- --template react
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
yarn create vite my-project --template react
{% endhighlight %}
{% endtabs %}
 
After running the command, you will be prompted with a series of interactive questions to configure your project. Select the appropriate options for each prompt:
 
1. **Select a linter to use**: Choose the linter for your project (for example, `ESLint`).
2. **Install with npm and start now?**: Type `Yes` to proceed with installing the dependencies and automatically start the development server, or `No` to install dependencies manually later.
 
Navigate into the project directory with:
 
```
cd my-project
```
 
## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React packages
 
Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the project, install the corresponding npm package.
 
To install the React component package, use the following command:
 
{% tabs %}
{% highlight bash tabtitle="npm" %}
 
npm install @syncfusion/ej2-react-popups
 
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
 
yarn add @syncfusion/ej2-react-popups
 
{% endhighlight %}
{% endtabs %}
 
## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles
 
Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> React components can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).
 
This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:
 
{% tabs %}
{% highlight bash tabtitle="npm" %}
 
npm install @syncfusion/ej2-tailwind3-theme
 
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
 
yarn add @syncfusion/ej2-tailwind3-theme
 
{% endhighlight %}
{% endtabs %}
 
By default, Vite projects include a `src/index.css` file with default styles. These default styles may conflict with Syncfusion component styles. Clear all content from the `src/index.css` file to prevent style conflicts.
 
The required styles for the Dialog component are imported in the **src/App.css** file:
 
{% tabs %}
{% highlight css tabtitle="App.css" %}
 
@import "@syncfusion/ej2-tailwind3-theme/styles/dialog/index.css";
 
{% endhighlight %}
{% endtabs %}
 
> You can also refer to the combined CSS file for all Syncfusion components in your application. For more information, see the documentation on [referring themes through npm packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#refer-themes-through-npm-packages).

## Adding Dialog component

Now, you can add the React Dialog component to your **src/App.jsx** file by importing and defining it within your application. Then, populate the Dialog with data using the [dataSource](https://ej2.syncfusion.com/react/documentation/api/dialog/index-default#datasource) property, which accepts an array of string values to display as suggestions. Use the following code:
 
{% tabs %}
{% highlight js tabtitle="App.jsx" %}


import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
import './App.css';

export default function App() {
  const [status, setStatus] = React.useState({ hideDialog: false });
  function handleClick() {
    setStatus({ hideDialog: true })
  }
  function handleClose() {
    setStatus({ hideDialog: true })
  }
  return (
    <div className="App" id='dialog-target'>
      <button className='e-control e-btn' id='targetButton1' role='button' onClick={handleClick} >Open</button>
      <DialogComponent width='250px' content='This is a Dialog with content' target='#dialog-target' visible={status.hideDialog} showCloseIcon={true} onClick={handleClose} />
    </div>
  );
}

{% endhighlight %}
{% endtabs %}

## Run the application

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs10/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs10" %}

> **Note - Target Property in Dialog:** In React applications, it is important to set the [`target`](https://ej2.syncfusion.com/react/documentation/api/dialog/index-default#target) property of the Dialog component. When the Dialog component is rendered without a `target` property, it defaults to appending itself to `document.body`, which places the Dialog outside the React component tree. This prevents React's event delegation system from properly handling events and may cause styling issues. Always set the `target` property to ensure proper integration with your React component tree, or use the [`content`](https://ej2.syncfusion.com/react/documentation/api/dialog/index-default#content) template property to render Dialog content.


> Refer to the [React Dialog](https://www.syncfusion.com/react-components/react-modal-dialog) feature tour page for its groundbreaking feature representations. You can also explore our [React Dialog component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/dialog/default) that shows how to render the Dialog in React.

## See Also

* [Load dialog content using AJAX](./how-to/load-dialog-content-using-ajax)
* [How to position the dialog on center of the page on scrolling](./how-to/position-the-dialog-on-center-of-the-page-on-scrolling)
* [Prevent closing of modal dialog](./how-to/prevent-closing-of-modal-dialog)
* [Close dialog while click on outside of dialog](./how-to/close-dialog-while-click-on-outside-of-dialog)
* [How to make a reusable alert and confirm dialog](./how-to/render-a-dialog-using-utility-functions)
