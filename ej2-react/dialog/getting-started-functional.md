---
layout: post
title: Getting started functional with React Dialog component | Syncfusion
description:  Checkout and learn about Getting started functional with React Dialog component of Syncfusion Essential JS 2 and more details.
control: Getting started functional 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

The following section explains the required steps to build the Dialog component with its basic usage in step by step procedure.

## Dependencies

The following list of dependencies are required to use the Dialog component in your application.

```javascript
|-- @syncfusion/ej2-react-popups
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-react-buttons
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-buttons

```

## Installation and configuration

You can use [Create-react-app](https://github.com/facebook/create-react-app) to setup the applications. To install `create-react-app` run the following command.

    ```bash
       npm install -g create-react-app
    ```

Start a new project using create-react-app command as follows

    <div class='tsx'>

    ```
      create-react-app quickstart --scripts-version=react-scripts-ts
      cd quickstart
   ```
   </div>

  <div class='jsx'>

   ```
    create-react-app quickstart
    cd quickstart
   ```

</div>

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install. For this application, we are going to use Dialog component.

To install Dialog component, use the following command

```bash
npm install @syncfusion/ej2-react-popups –save
```

## Adding Dialog to the application

Now, you can start adding Dialog component to the application. We have added Dialog component in `src/App.tsx` file using following code.



```ts
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
import { useState } from 'react';

function App() {
  const [visibility, setDialogVisibility] = useState(true);

  function dialogClose() {
    setDialogVisibility(false);
  }

  function handleClick() {
    setDialogVisibility(true);
  }

  return (
    <div className="App" id='dialog-target'>
        <button className='e-control e-btn' id='targetButton1' role='button' onClick={handleClick} >Open</button>
        <DialogComponent width='250px' content='This is a Dialog with content' target='.App' visible = {visibility} close = {dialogClose}/>
    </div>
  );
}

export default App;

```

```ts
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
import { useState } from 'react';
function App() {
    const [visibility, setDialogVisibility] = useState(true);
    function dialogClose() {
        setDialogVisibility(false);
    }
    function handleClick() {
        setDialogVisibility(true);
    }
    return (<div className="App" id='dialog-target'>
        <button className='e-control e-btn' id='targetButton1' role='button' onClick={handleClick}>Open</button>
        <DialogComponent width='250px' content='This is a Dialog with content' target='.App' visible={visibility} close={dialogClose}/>
    </div>);
}
export default App;
```

## Adding CSS reference

Import the Dialog component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-popups/styles/material.css";
```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

## Run the application

Now use the `npm run start` command to run the application in the browser.

  ```
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

> In the dialog control, max-height is calculated based on the dialog target element height. If the target property is not configured, the document.body is considered as a target. Therefore, to show a dialog in proper height, you need to add min-height to the target element.
>If the dialog is rendered based on the body, then the dialog will get the height based on its body element height. If the height of the dialog is larger than the body height, then the dialog's height will not be set. For this scenario, we can set the CSS style for the html and body to get the dialog height.

```css

html, body {
   height: 100%;
}

```

## Modal Dialog

A [modal](https://ej2.syncfusion.com/react/documentation/api/dialog/#ismodal) shows an overlay behind the Dialog. So, the user should interact the Dialog compulsory before interacting with the remaining content in an application.

While the user clicks the overlay, the action can be handled through the [`overlayClick`](https://ej2.syncfusion.com/react/documentation/api/dialog/#overlayclick) event. In the below sample, the Dialog close action is performed while clicking on the overlay.

> When the modal dialog is opened, the Dialog's target scrolling will be disabled. The scrolling will be enabled again once close the Dialog.

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

The Dialog header can be enabled by adding the header content as text or HTML content through the [`header`](https://ej2.syncfusion.com/react/documentation/api/dialog/#header) property.

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

The Dialog provides built-in support to render the `buttons` on the footer (for ex: ‘OK’ or ‘Cancel’ buttons). Each Dialog button allows the user to perform any action while clicking on it.

The primary button will be focused automatically on open the Dialog, and add the [`click`](https://ej2.syncfusion.com/react/documentation/api/dialog/buttonPropsModel/#click) event to handle the actions

> When the Dialog initialize with more than one primary buttons, the first primary button gets focus on open the Dialog.

The below sample render with button and its click event.

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

The Dialog supports to [drag](https://ej2.syncfusion.com/react/documentation/api/dialog/#allowdragging) within its target container by grabbing the Dialog header, which allows the user to reposition the Dialog dynamically.

> The Dialog can be draggable only when the Dialog header is enabled. From `16.2.x` version, enabled draggable support for modal dialog also.

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

The Dialog position can be set through the [`position`](https://ej2.syncfusion.com/react/documentation/api/dialog/#position) property by providing X and Y coordinates. The Dialog can be positioned inside the target container based on the given X and Y values.

For example <!-- markdownlint-disable MD033 --> <code>position:{ X:'center', Y:'center' }</code> the possible values

* for X is: left, center, right (or) any offset value
* for Y is: top, center, bottom (or) any offset value

The below sample demonstrates the different Dialog positions.

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