---
layout: post
title: Getting started with React Dialog component | Syncfusion
description: Checkout and learn how to get started with the React Dialog component from Syncfusion Essential JS 2.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Dialog component

This section explains the steps required to create a simple React Dialog component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

To get started quickly with React Dialog, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=upDeXQMYFoc" %}

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Dialog packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the Dialog component, use the following command

```bash
npm install @syncfusion/ej2-react-popups --save
```

> The --save will instruct NPM to include the Dialog package inside of the **dependencies** section of the package.json.

## Adding CSS reference

The following CSS files are available in the **../node_modules/@syncfusion** package folder. Add these as references in **src/App.css**.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import "../node_modules/@syncfusion/ej2-react-popups/styles/tailwind3.css";
```

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding Dialog component

The React Dialog component can be added to the application by following these steps. To get started, add the Dialog component to the **src/App.tsx** file using the following code.

The following dialog code should be placed in the **src/App.tsx** file.

`[Class-component]`

```ts
import React, { Component } from 'react';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import './App.css';

interface AppState { hideDialog: boolean; }

export default class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      hideDialog: false
    };
  }

  handleClick = () => {
    this.setState({ hideDialog: true });
  };

  handleClose = () => {
    this.setState({ hideDialog: true });
  };

  render() {
    return (
      <div className="App" id="dialog-target">
        <button className="e-control e-btn" id="targetButton1" role="button" onClick={this.handleClick} > Open </button>
        <DialogComponent width="250px" content="This is a Dialog with content" target="#dialog-target" visible={this.state.hideDialog} showCloseIcon={true} close={this.handleClose} />
      </div>
    );
  }
}
```

`[Functional-component]`

```ts
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
{% include code-snippet/dialog/getting-started-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs9/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs9" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs10/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs10" %}

> In the Dialog control, the `max-height` is calculated based on the height of the Dialog target element. If the `target` property is not configured, `document.body` is used as the target. To ensure the Dialog displays at the proper height, add a `min-height` to the target element.
> If the Dialog is rendered based on the body, the Dialog height is determined by the body element height. If the Dialog's height is larger than the body height, the Dialog height will not be set; in that case, set the CSS for `html` and `body` to ensure the Dialog can size correctly.

```css
html, body {
   height: 100%;
}
```

## Modal Dialog

A [modal](https://ej2.syncfusion.com/react/documentation/api/dialog/index-default#ismodal) shows an overlay behind the Dialog. The user must interact with the Dialog before interacting with the remaining content in the application.

Clicks on the overlay can be handled through the [`overlayClick`](https://ej2.syncfusion.com/react/documentation/api/dialog/index-default#overlayclick) event. The sample below closes the Dialog when the overlay is clicked.

> When a modal Dialog is opened, scrolling of the Dialog's target is disabled. Scrolling is re-enabled after the Dialog is closed.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/modal-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/modal-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/modal-cs2" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/modal-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/modal-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/modal-cs3" %}

## Enable header

Enable the Dialog header by providing text or HTML content to the [`header`](https://ej2.syncfusion.com/react/documentation/api/dialog/index-default#header) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs11/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs11" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs12/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs12/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs12" %}

## Enable footer

The React Dialog provides built-in support to render `buttons` in the footer (for example, ‘OK’ or ‘Cancel’). Each Dialog button can perform any configured action when clicked.

The primary button receives focus automatically when the Dialog opens. Add the [`click`](https://ej2.syncfusion.com/react/documentation/api/dialog/buttonpropsmodel#click) event to handle button actions.

> When the Dialog initializes with more than one primary button, the first primary button receives focus on open.

The sample below renders buttons and demonstrates handling their `click` events.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs13/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs13/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs13" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs14/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs14/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs14" %}

## Draggable

The Dialog supports [dragging](https://ej2.syncfusion.com/react/documentation/api/dialog/index-default#allowdragging) within its target container by grabbing the Dialog header, allowing the user to reposition the Dialog dynamically.

> The Dialog is draggable only when the header is enabled. Starting from version `16.2.x`, draggable support is enabled for modal dialogs as well.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs15/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs15/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs15" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs16/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs16/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs16" %}

## Positioning

The Dialog position can be set through the [`position`](https://ej2.syncfusion.com/react/documentation/api/dialog/index-default#position) property by providing X and Y coordinates. The Dialog can be positioned inside the target container based on the given X and Y values.

For example: <code>position: { X: 'center', Y: 'center' }</code>. Possible values:

- X: `left`, `center`, `right`, or any offset value
- Y: `top`, `center`, `bottom`, or any offset value

The sample below demonstrates different Dialog positions.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/positioning-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/positioning-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/positioning-cs2" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/positioning-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/positioning-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/positioning-cs3" %}

> Refer to the [React Dialog](https://www.syncfusion.com/react-components/react-modal-dialog) feature tour page for its groundbreaking feature representations. You can also explore our [React Dialog component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/dialog/default) that shows how to render the Dialog in React.

## See Also

* [Load dialog content using AJAX](./how-to/load-dialog-content-using-ajax)
* [How to position the dialog on center of the page on scrolling](./how-to/position-the-dialog-on-center-of-the-page-on-scrolling)
* [Prevent closing of modal dialog](./how-to/prevent-closing-of-modal-dialog)
* [Close dialog while click on outside of dialog](./how-to/close-dialog-while-click-on-outside-of-dialog)
* [How to make a reusable alert and confirm dialog](./how-to/render-a-dialog-using-utility-functions)
