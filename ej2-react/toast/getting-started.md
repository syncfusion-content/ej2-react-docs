---
layout: post
title: Getting started with React Toast component | Syncfusion
description:  Checkout and learn about Getting started with React Toast component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section briefly explains you the steps required to create a simple Toast and demonstrate the basic usage of the Toast component.

## Dependencies

The following list of dependencies are required to use the Toast component in your application.

```javascript
|-- @syncfusion/ej2-react-notifications
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-notifications
      |-- @syncfusion/ej2-base
      |-- @syncfusion/ej2-buttons
      |-- @syncfusion/ej2-react-buttons
      |-- @syncfusion/ej2-popups
```

## Installation and configuration

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set-up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set-up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```


Install the below required dependency package in order to use the `Toast` component in your application.

```bash
npm install @syncfusion/ej2-react-notifications –save
```

The above package installs [Toast dependencies](#dependencies) which are required to render the Toast component in React environment.

* Toast CSS files are available in the `ej2-react-notifications` package folder.
Import the Toast component's required CSS references as follows in `src/App.css`.

```css
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-react-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-react-notifications/styles/material.css';
```

## Initialize the Toast with message

The Toast message can be rendered by defining an `title` or `content`.

* Import the Toast component to your `src/App.tsx` file using following code.

`[Class-component]`



```ts
import { ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

class App extends React.Component<{}, {}> {
  public toastInstance:ToastComponent;

  public toastCreated(): void {
    this.toastInstance.show();
  }

  public render() {
    return (
      <ToastComponent ref={toast => this.toastInstance = toast!} title="Sample Toast Title" content="Sample Toast Content" created={this.toastCreated = this.toastCreated.bind(this)} />
    );
  }
};
ReactDOM.render(<App />, document.getElementById('element'));

```



`[Functional-component]`



```ts
import { ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

function App() {
    let toastInstance:ToastComponent;

    function toastCreated(): void {
      toastInstance.show();
    }

    return (
      <ToastComponent ref={toast => toastInstance = toast!} title="Sample Toast Title" content="Sample Toast Content" created={toastCreated.bind(this)} />
    );
  
};
ReactDOM.render(<App />, document.getElementById('element'));

```

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

Output will be as follows:

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

By default toast can be rendered in document body, we can change the target position for toast rendering using `target` property.

> In the above sample code, `#element` is the `id` of the HTML element in a page to which the Toast is initialized.

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

## See Also

* [Render different types of toast](./how-to/show-different-types-of-toast/)

N> You can refer to our [React Toast](https://www.syncfusion.com/react-components/react-toast) feature tour page for its groundbreaking feature representations. You can also explore our [React Toast Example](https://ej2.syncfusion.com/react/demos/#/bootstrap5/toast/default) that shows you how to render the Toast in React.