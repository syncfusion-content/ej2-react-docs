
---
layout: post
title: Getting started with React Dialog component | Syncfusion
description:  Checkout and learn about Getting started with React Dialog component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

The following section explains the required steps to build the Dialog component with its basic usage in step by step procedure.

To get start quickly with React Dialog component, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=upDeXQMYFoc" %}

## Dependencies

The following list of dependencies are required to use the React Dialog component in your application.

```javascript
|-- @syncfusion/ej2-react-popups
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-react-buttons
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-buttons

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


## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install. For this application, we are going to use Dialog component.

To install Dialog component, use the following command

```bash
npm install @syncfusion/ej2-react-popups –save
```

## Adding Dialog to the application

Now, you can start adding React Dialog component to the application. We have added Dialog component in `src/App.tsx` file using following code.

`[Class-component]`



```tsx
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

class App extends React.Component<{}, {hideDialog: boolean;}> {
constructor(props: {}) {
    super(props);
    this.state = {
        hideDialog : false
    };
}
public handleClick() {
    this.setState({ hideDialog: true })
}

public dialogClose = () => {
    this.setState({ hideDialog: false })
}
public render() {
  return (
  <div className="App" id='dialog-target'>
      <button className='e-control e-btn' id='targetButton1' role='button' onClick={this.handleClick = this.handleClick.bind(this)} >Open</button>
      <DialogComponent width='250px' content='This is a Dialog with content' target='.App' visible = {this.state.hideDialog} close = {this.dialogClose}/>
  </div>);
}
}
export default App;

```

```tsx
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hideDialog: false
        };
    }
    handleClick() {
        this.setState({ hideDialog: true });
    }
    dialogClose = () => {
        this.setState({ hideDialog: false });
    };
    render() {
        return (<div className="App" id='dialog-target'>
      <button className='e-control e-btn' id='targetButton1' role='button' onClick={this.handleClick = this.handleClick.bind(this)}>Open</button>
      <DialogComponent width='250px' content='This is a Dialog with content' target='.App' visible={this.state.hideDialog} close={this.dialogClose}/>
  </div>);
    }
}
export default App;
```

`[Functional-component]`



```tsx
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

function App() {
    const [status, setStatus] = React.useState({ hideDialog: false });
    function handleClick() {
        setStatus({ hideDialog: true })
    }

    function dialogClose() {
        setStatus({ hideDialog: false })
    }

    return (
        <div className="App" id='dialog-target'>
            <button className='e-control e-btn' id='targetButton1' role='button' onClick={handleClick.bind(this)} >Open</button>
            <DialogComponent width='250px' content='This is a Dialog with content' target='.App' visible = {status.hideDialog} close = {dialogClose}/>
        </div>
    );
}
export default App;

```

```ts
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
function App() {
    const [status, setStatus] = React.useState({ hideDialog: false });
    function handleClick() {
        setStatus({ hideDialog: true });
    }
    function dialogClose() {
        setStatus({ hideDialog: false });
    }
    return (<div className="App" id='dialog-target'>
            <button className='e-control e-btn' id='targetButton1' role='button' onClick={handleClick.bind(this)}>Open</button>
            <DialogComponent width='250px' content='This is a Dialog with content' target='.App' visible={status.hideDialog} close={dialogClose}/>
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

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The below example shows the Dialog.

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

The Dialog header can be enabled by adding the header content as text or HTML content through the [`header`](https://ej2.syncfusion.com/react/documentation/api/dialog/#header) property.

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

The React Dialog provides built-in support to render the `buttons` on the footer (for ex: ‘OK’ or ‘Cancel’ buttons). Each Dialog button allows the user to perform any action while clicking on it.
The primary button will be focused automatically on open the Dialog, and add the [`click`](https://ej2.syncfusion.com/react/documentation/api/dialog/buttonPropsModel/#click) event to handle the actions.

> When the Dialog initialize with more than one primary buttons, the first primary button gets focus on open the Dialog.

The below sample render with button and its click event.

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

The Dialog supports to [drag](https://ej2.syncfusion.com/react/documentation/api/dialog/#allowdragging) within its target container by grabbing the Dialog header, which allows the user to reposition the Dialog dynamically.

> The Dialog can be draggable only when the Dialog header is enabled. From `16.2.x` version, enabled draggable support for modal dialog also.

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

The Dialog position can be set through the [`position`](https://ej2.syncfusion.com/react/documentation/api/dialog/#position) property by providing X and Y coordinates. The Dialog can be positioned inside the target container based on the given X and Y values.

For example <!-- markdownlint-disable MD033 --> <code>position:{ X:'center', Y:'center' }</code> the possible values

* for X is: left, center, right (or) any offset value
* for Y is: top, center, bottom (or) any offset value

The below sample demonstrates the different Dialog positions.

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

## See Also

* [Load dialog content using AJAX](./how-to/load-dialog-content-using-ajax)
* [How to position the dialog on center of the page on scrolling](./how-to/position-the-dialog-on-center-of-the-page-on-scrolling)
* [Prevent closing of modal dialog](./how-to/prevent-closing-of-modal-dialog)
* [Close dialog while click on outside of dialog](./how-to/close-dialog-while-click-on-outside-of-dialog)
* [How to make a reusable alert and confirm dialog](./how-to/render-a-dialog-using-utility-functions)
