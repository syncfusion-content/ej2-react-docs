---
layout: post
title: Getting started with React Predefined dialogs component | Syncfusion
description:  Checkout and learn about Getting started with React Predefined dialogs component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Predefined Dialogs component

This section explains the steps required to create a simple React Predefined Dialogs component and demonstrate its basic usage in a React environment.

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Predefined Dialogs packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the Predefined Dialogs component, use the following command

```bash
npm install @syncfusion/ej2-react-popups --save
```

> The --save will instruct NPM to include the Predefined Dialogs package inside of the **dependencies** section of the package.json.

## Adding CSS reference

The following CSS files are available in the **../node_modules/@syncfusion** package folder. Add these as references in **src/App.css**.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-popups/styles/tailwind3.css";
```

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding Predefined Dialogs component

The React Predefined Dialogs component can be added to the application by following these steps. To get started, add the Predefined Dialogs component to the **src/App.tsx** file using the following code.

The following predefined dialogs code should be placed in the **src/App.tsx** file.

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

## Run the application

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The output appears as follows.

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

> You can also explore our [React Predefined Dialogs component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/predefined-dialogs/default) that shows how to render the Predefined Dialogs in React.