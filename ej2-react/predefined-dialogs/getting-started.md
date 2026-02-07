---
layout: post
title: Getting started with React Predefined dialogs component | Syncfusion
description:  Checkout and learn about Getting started with React Predefined dialogs component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with predefined dialogs


This section explains how to create predefined dialogs in a React application and configure their basic features in a step-by-step manner.

## Dependencies


The following dependencies are required to use the React Dialog component in your application.

```javascript
|-- @syncfusion/ej2-react-popups
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-react-buttons
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-buttons

```

## Setup your development environment

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

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.

You can select the specific component you want to install. For this application, the Dialog component will be used.


To install the Dialog component, use the following command:

```bash
npm install @syncfusion/ej2-react-popups -–save
```

## Adding CSS reference


Import the required CSS references for the Dialog component in `src/App.css` as shown below:

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-popups/styles/material.css";
```

You can check out the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) topic to know more about built-in themes and different ways to refer themes in a React application.

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online tool that can be used to generate custom scripts and styles for specific components.
> This tool is useful for combining the required component scripts and styles into a single file.

## Render a dialog using utility functions


The Dialog component provides built-in utility functions to render alert and confirm dialogs with minimal code.
The following options can be used as arguments when calling the utility functions:

| Options   | Description |
|-----------|-------------|
| title | Specifies the title of dialog like the [`header`](https://ej2.syncfusion.com/react/documentation/api/dialog#header) property.|
| content | Specifies the value that can be displayed in dialog's content area like the [`content`](https://ej2.syncfusion.com/react/documentation/api/dialog#content) property. |
| isModal | Specifies the Boolean value whether the dialog can be displayed as modal or non-modal. For more details, refer to the [`isModal`](https://ej2.syncfusion.com/react/documentation/api/dialog#ismodal) property.|
| position | Specifies the value where the alert or confirm dialog is positioned within the document. For more details, refer to the [`position`](https://ej2.syncfusion.com/react/documentation/api/dialog#position) property { X: ‘center’, Y: ‘center’}|
| okButton | Configures the `OK` button, including button properties and click events. Example: `okButton: { icon: 'prefix icon to the button', cssClass: 'custom class to the button', click: 'action for OK button click', text: 'Yes' }` (Default value is 'OK').|
| cancelButton | Configures the `Cancel` button, including button properties and click events. Example: `cancelButton: { icon: 'prefix icon to the button', cssClass: 'custom class to the button', click: 'action for Cancel button click', text: 'No' }` (Default value is 'Cancel').|
|isDraggable|Specifies the value whether the alert or confirm dialog can be dragged by the user.|
| showCloseIcon | When set to true, the close icon is shown in the dialog component. |
|closeOnEscape|When set to true, you can close the dialog by pressing ESC key.|
| animationSettings |Specifies the animation settings of the dialog component. |
| cssClass |Specifies the CSS class name that can be appended to the dialog. |
| zIndex |Specifies the order of the dialog, that is displayed in front or behind of another component. |
| open |Event which is triggered after the dialog is opened. |
| Close |Event which is triggered after the dialog is closed. |

## Adding predefined dialogs to the application


Now you can start adding the React predefined dialog to your application. The following code demonstrates how to add the predefined dialog component in the `src/App.tsx` file:

`[Class-component]`



```ts

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogUtility } from '@syncfusion/ej2-react-popups';
import * as React from "react";

class App extends React.Component<{}, {hideDialog: boolean;}> {
constructor(props: {}) {
        super(props);
        this.state = { };
    }
public buttonClick() {
    dialogObj = DialogUtility.alert({
        title: 'Low Battery',
        width: '250px',
        content: '10% of battery remaining'
    });
}
public render() {
  return (
  <div className="App" id='dialog-target'>
       <ButtonComponent id="alertBtn" cssClass="e-danger" onClick={this.buttonClick.bind(this)}>Alert</ButtonComponent>
  </div>);
   }
}
export default App;

```

```ts
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogUtility } from '@syncfusion/ej2-react-popups';
import * as React from "react";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    buttonClick() {
        dialogObj = DialogUtility.alert({
            title: 'Low Battery',
            width: '250px',
            content: '10% of battery remaining'
        });
    }
    render() {
        return (<div className="App" id='dialog-target'>
       <ButtonComponent id="alertBtn" cssClass="e-danger" onClick={this.buttonClick.bind(this)}>Alert</ButtonComponent>
  </div>);
    }
}
export default App;
```

`[Functional-component]`



```ts

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogUtility } from '@syncfusion/ej2-react-popups';
import * as React from "react";

function App(){
    function buttonClick() {
        dialogObj = DialogUtility.alert({
            title: 'Low Battery',
            width: '250px',
            content: '10% of battery remaining'
        });
    }

    return (
        <div className="App" id='dialog-target'>
            <ButtonComponent id="alertBtn" cssClass="e-danger" onClick={buttonClick.bind(this)}>Alert</ButtonComponent>
        </div>
    );
}
export default App;

```

```ts
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogUtility } from '@syncfusion/ej2-react-popups';
import * as React from "react";
function App() {
    function buttonClick() {
        dialogObj = DialogUtility.alert({
            title: 'Low Battery',
            width: '250px',
            content: '10% of battery remaining'
        });
    }
    return (<div className="App" id='dialog-target'>
            <ButtonComponent id="alertBtn" cssClass="e-danger" onClick={buttonClick.bind(this)}>Alert</ButtonComponent>
        </div>);
}
export default App;
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The below example shows the alert dialog.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/getting-started-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/getting-started-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/getting-started-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/getting-started-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/getting-started-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/getting-started-cs2" %}

## Alert dialog


An alert dialog box is used to display errors, warnings, or informational alerts that require user awareness. The alert dialog is displayed with an OK button. When the user clicks the OK button, the alert dialog closes. Use the following code to render a simple alert dialog in an application.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/alert-dialog-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/alert-dialog-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/alert-dialog-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/alert-dialog-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/alert-dialog-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/alert-dialog-cs2" %}

## Confirm dialog


A confirm dialog box is used to display a specified message along with OK and Cancel buttons. It is used to get approval from the user before performing any critical action. After receiving approval, the dialog will disappear automatically. Use the following code to render a simple confirm dialog in an application.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/confirm-dialog-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/confirm-dialog-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/confirm-dialog-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/confirm-dialog-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/confirm-dialog-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/confirm-dialog-cs2" %}

## Prompt dialog


A prompt dialog is used to get input from the user. When the user clicks the OK button, the input value from the dialog is returned. If the user clicks the Cancel button, a null value is returned. After receiving input, the dialog will disappear automatically.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/prompt-dialog-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/prompt-dialog-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/prompt-dialog-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/prompt-dialog-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/prompt-dialog-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/prompt-dialog-cs2" %}