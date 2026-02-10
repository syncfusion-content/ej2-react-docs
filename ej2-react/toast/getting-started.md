---
layout: post
title: Getting Started with the React Toast Component | Syncfusion
description: Learn how to set up and use the Syncfusion React Toast component, including dependencies, installation, and configuration details.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the React Toast component

This section explains the steps required to create a simple React Toast component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

## Setup for local development

Easily set up a React application using `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

![Initial_setup](images/Initial-setup.jpg)

To set up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Toast packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the Toast component, use the following command

```bash
npm install @syncfusion/ej2-react-notifications --save
```

> The --save will instruct NPM to include the Toast package inside of the **dependencies** section of the package.json.

## Adding CSS reference

The following CSS files are available in the **../node_modules/@syncfusion** package folder. Add these as references in **src/App.css**.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-react-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-react-notifications/styles/tailwind3.css';
```

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding Toast component

The React Toast component can be added to the application by following these steps. To get started, add the Toast component to the **src/App.tsx** file using the following code.

The following toast code should be placed in the **src/App.tsx** file.

`[Class-component]`

```ts
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';

class App extends React.Component<{}, {}> {
  public toastInstance: ToastComponent;

  public toastCreated(): void {
    this.toastInstance.show();
  }

  public render() {
    return (
      <ToastComponent ref={toast => this.toastInstance = toast!} title="Sample Toast Title" content="Sample Toast Content" created={this.toastCreated = this.toastCreated.bind(this)} />
    );
  }
};
export default App;
```

`[Functional-component]`

```ts
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';

function App() {
  let toastInstance: ToastComponent;

  function toastCreated(): void {
    toastInstance.show();
  }

  return (
    <ToastComponent ref={toast => toastInstance = toast!} title="Sample Toast Title" content="Sample Toast Content" created={toastCreated.bind(this)} />
  );
};
export default App;
```

## Run the application

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The output appears as follows.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs15/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs15/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/toast-cs15" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs16/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs16/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/toast-cs16" %}

## Initialize the Toast with target

By default, the Toast is rendered in the document body. The target position for Toast rendering can be changed using the `target` property.

> In the above sample code, `#element` is the `id` of the HTML element in the page to which the Toast is initialized.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs17/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs17/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/toast-cs17" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs18/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs18/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/toast-cs18" %}

> Refer to the [React Toast](https://www.syncfusion.com/react-components/react-toast) feature tour page for its groundbreaking feature representations. You can also explore our [React Toast component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/toast/default) that shows how to render the Toast in React.

## See Also

* [Render different types of toast](./how-to/show-different-types-of-toast)