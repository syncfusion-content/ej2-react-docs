---
layout: post
title: Getting started functional with React Dialog component | Syncfusion
description: Checkout and learn how to get started with the functional React Dialog component from Syncfusion Essential JS 2.
control: Getting started functional
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Functional React Dialog Component

The following section explains the required steps to build the Dialog component and demonstrates its basic usage in a step-by-step procedure.

## Dependencies

The following dependencies are required to use the Dialog component in an application.

```javascript
|-- @syncfusion/ej2-react-popups
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-react-buttons
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-buttons

```

## Installation and configuration

You can use [Create React App](https://github.com/facebook/create-react-app) to set up applications. To install `create-react-app`, run the following command:

```bash
npm install -g create-react-app
```

Start a new project using Create React App as follows:

<div class='tsx'>

```bash
create-react-app quickstart --scripts-version=react-scripts-ts
cd quickstart
```
</div>

<div class='jsx'>

```bash
create-react-app quickstart
cd quickstart
```
</div>

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install. For this application, we are going to use Dialog component.

To install Dialog component, use the following command

```bash
npm install @syncfusion/ej2-react-popups --save
```

## Adding CSS reference

Import the Dialog component's required CSS references in `src/App.css` as follows.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-popups/styles/material.css";
```

You can check out the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) topic to know more about built-in themes and different ways to refer themes in a React application.

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.


## Adding Dialog to the application

Now add the Dialog component to the application. The examples below show how to add the Dialog component in `src/App.tsx`.

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
    <div className="App" id='dialog-target' style={{ height: '400px' }}>
      <button className='e-control e-btn' id='targetButton1' role='button' onClick={handleClick} >Open</button>
      <DialogComponent width='250px' content='This is a Dialog with content' target='#dialog-target' visible={status.hideDialog} showCloseIcon={true} onClick={handleClose} />
    </div>
  );
}
```

## Run the application

Run the `npm run start` command to run the application in the browser.

```bash
npm run start
```

The below example shows the Dialog.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs5" %}

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

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/modal-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/modal-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/modal-cs1" %}

## Enable header

Enable the Dialog header by providing text or HTML content to the [`header`](https://ej2.syncfusion.com/react/documentation/api/dialog/index-default#header) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs6/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs6" %}

## Enable footer

The Dialog provides built-in support to render `buttons` in the footer (for example, ‘OK’ or ‘Cancel’). Each Dialog button can perform any configured action when clicked.

The primary button receives focus automatically when the Dialog opens. Add the [`click`](https://ej2.syncfusion.com/react/documentation/api/dialog/buttonpropsmodel#click) event to handle button actions.

> When the Dialog initializes with more than one primary button, the first primary button receives focus on open.

The sample below renders buttons and demonstrates handling their `click` events.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs7/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs7" %}

## Draggable

The Dialog supports [dragging](https://ej2.syncfusion.com/react/documentation/api/dialog/index-default#allowdragging) within its target container by grabbing the Dialog header, allowing the user to reposition the Dialog dynamically.

> The Dialog is draggable only when the header is enabled. Starting from version `16.2.x`, draggable support is enabled for modal dialogs as well.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs8/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs8" %}

## Positioning

The Dialog position can be set through the [`position`](https://ej2.syncfusion.com/react/documentation/api/dialog/index-default#position) property by providing X and Y coordinates. The Dialog can be positioned inside the target container based on the given X and Y values.

For example: <code>position: { X: 'center', Y: 'center' }</code>. Possible values:

- X: `left`, `center`, `right`, or any offset value
- Y: `top`, `center`, `bottom`, or any offset value

The sample below demonstrates different Dialog positions.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/positioning-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/positioning-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/positioning-cs1" %}

## See Also

* [Load dialog content using AJAX](./how-to/load-dialog-content-using-ajax)
* [How to position the dialog on center of the page on scrolling](./how-to/position-the-dialog-on-center-of-the-page-on-scrolling)
* [Prevent closing of modal dialog](./how-to/prevent-closing-of-modal-dialog)
* [Close dialog while click on outside of dialog](./how-to/close-dialog-while-click-on-outside-of-dialog)
* [How to make a reusable alert and confirm dialog](./how-to/render-a-dialog-using-utility-functions)