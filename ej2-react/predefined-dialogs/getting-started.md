---
layout: post
title: Getting started with React Predefined dialogs component | Syncfusion
description:  Checkout and learn about Getting started with React Predefined dialogs component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explain how to create the predefined dialogs in React application with its basic features in step-by-step procedure.

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

## Setup your development environment

You can use [Create-react-app](https://github.com/facebookincubator/create-react-app) to setup the applications.

To install `create-react-app` run the following command.

    ```bash
       npm install -g create-react-app
    ```

Start a new project using create-react-app command as follows

    <div class='tsx'>
      ```
      create-react-app quickstart --scripts-version=react-scripts-ts
      cd quickstart
      ```
    </div>

    <div class='jsx'>

      ```
        create-react-app quickstart
        cd quickstart
      ```
    </div>

> 'react-scripts-ts' is used for creating React app with typescript.

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.
You can choose the component that you want to install. For this application, we are going to use Dialog component.

To install Dialog component, use the following command

```bash
npm install @syncfusion/ej2-react-popups –save
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

## Render a dialog using utility functions

The dialog component provides built-in utility functions to render the alert and confirm dialogs with the minimal code.
The following options are used as an argument on calling the utility functions:

| Options   | Description |
|-----------|-------------|
| title | Specifies the title of dialog like the [`header`](https://ej2.syncfusion.com/react/documentation/api/dialog/#header) property.|
| content | Specifies the value that can be displayed in dialog's content area like the [`content`](https://ej2.syncfusion.com/react/documentation/api/dialog/#content) property. |
| isModal | Specifies the Boolean value whether the dialog can be displayed as modal or non-modal. For more details, refer to the [`isModal`](https://ej2.syncfusion.com/react/documentation/api/dialog/#ismodal) property.|
| position | Specifies the value where the alert or confirm dialog is positioned within the document. For more details, refer to the [`position`](https://ej2.syncfusion.com/react/documentation/api/dialog/#position) property { X: ‘center’, Y: ‘center’}|
| okButton | Configures the `OK button` that contains button properties with the click events. `okButton:{ icon:'prefix icon to the button', cssClass:'custom class to the button', click: 'action for OK button click', text: 'Yes' // <-- Default value is 'OK' }`|
| cancelButton | Configures the `Cancel button` that contains button properties with the click events. `cancelButton:{ icon:'prefix icon to the button', cssClass:'custom class to the button', click: 'action for ‘Cancel’ button click', text: 'No' // <-- Default value is 'Cancel'}`|
|isDraggable|Specifies the value whether the alert or confirm dialog can be dragged by the user.|
| showCloseIcon | When set to true, the close icon is shown in the dialog component. |
|closeOnEscape|When set to true, you can close the dialog by pressing ESC key.|
| animationSettings |Specifies the animation settings of the dialog component. |
| cssClass |Specifies the CSS class name that can be appended to the dialog. |
| zIndex |Specifies the order of the dialog, that is displayed in front or behind of another component. |
| open |Event which is triggered after the dialog is opened. |
| Close |Event which is triggered after the dialog is closed. |

## Adding predefined dialogs to the application

Now, you can start adding React predefined dialog to the application. We have added predefined dialog component in `src/App.tsx` file using following code.

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

Now use the `npm run start` command to run the application in the browser.

```
npm run start
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

An alert dialog box used to display an errors, warnings, and information alerts that needs user awareness. The alert dialog is displayed along with the OK button. When user clicks on ‘OK’ button, alert dialog will get closed. Use the following code to render a simple alert dialog in an application.

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

A confirm dialog box used to displays a specified message along with the ‘OK’ and ‘Cancel’ button. It is used to get approval from the user, and it appears before any critical action. After get approval from the user the dialog will disappear automatically. Use the following code to render a simple confirm dialog in an application.

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

A prompt dialog is used to get the input from the user. When the user clicks the ‘OK’ button the input value from the dialog is returned. If the user clicks the ‘Cancel’ button the null value is returned. After getting the input from the user the dialog will disappear automatically.

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