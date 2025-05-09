---
layout: post
title: Getting started with React Sidebar component | Syncfusion
description:  Checkout and learn about Getting started with React Sidebar component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

The following section explains the required steps to build the simple **Sidebar** component with its basic usage in step by step procedure.

## Dependencies

The following list of dependencies are required to use the Sidebar component in your application.

```javascript
|-- @syncfusion/ej2-react-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-inputs
            |-- @syncfusion/ej2-splitbuttons
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-popups
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

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install. For this application, we are going to use `Sidebar` component.

To install Sidebar component, use the following command

```bash
npm install @syncfusion/ej2-react-navigations --save
```

## Adding Style sheet to the Application

To render the Sidebar component, need to import Sidebar and its dependent component's styles as given below in **App.css**.

```css

@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-navigations/styles/material.css";

```

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Adding Sidebar component to the Application

Sidebar can be initialized using the `<SidebarComponent>` tag, it's used to render Sidebar as it contains primary content aside from the main content. The immediate sibling element of the Sidebar will be considered as the main content.

* To include the Sidebar component in application import the `SidebarComponent` from `ej2-react-navigations` package in **App.tsx**.

* Then add the Sidebar component as shown in below code example.

**src/App.tsx**


```ts

import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';

function App() {

    return (
        <div className="control-section">
            <div id="wrapper">
                <SidebarComponent id="default-sidebar">
                    <div className="title"> Sidebar content</div>
                </SidebarComponent>
                <div className="content">
                    <div className="title">Main content</div>
                    <div className="sub-title"> content goes here</div>
                </div>
            </div>
        </div>
    )
}
export default App;

```

```ts
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
function App() {
    return (<div className="control-section">
            <div id="wrapper">
                <SidebarComponent id="default-sidebar">
                    <div className="title"> Sidebar content</div>
                </SidebarComponent>
                <div className="content">
                    <div className="title">Main content</div>
                    <div className="sub-title"> content goes here</div>
                </div>
            </div>
        </div>);
}
export default App;
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The following sample, shows the basic Sidebar component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sidebar/default-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sidebar/default-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sidebar/default-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sidebar/default-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/sidebar/default-cs1/style.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/sidebar/default-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sidebar/default-cs1" %}

## Enable backdrop

Enabling the [showBackdrop](https://ej2.syncfusion.com/react/documentation/api/sidebar/#showbackdrop) in the Sidebar component will prevent the main content from user interactions.

Here, DOM elements will not get changed. It only closes the main content by covering with a black backdrop overlay and focuses the Sidebar in the screen. Sidebar can be rendered with specific width by setting [`width`](https://ej2.syncfusion.com/react/documentation/api/sidebar#width) property.

N> To achieve a proper **backdrop**, we suggest that you create a wrapper parent container for the div block in which you intend to enable the backdrop. Set the class name of this parent container as the **target** for the Sidebar. Alternatively, you can place an empty div container after the target container.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sidebar/backdrop-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sidebar/backdrop-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sidebar/backdrop-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sidebar/backdrop-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/sidebar/backdrop-cs1/style.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/sidebar/backdrop-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sidebar/backdrop-cs1" %}

## Position

Positioning the Sidebar to the right or left of the main content can be achieved by using the [position](https://ej2.syncfusion.com/react/documentation/api/sidebar/#position) property. If the position is not set, the Sidebar will expand from the left to the body element. [`enablePersistence`](https://ej2.syncfusion.com/react/documentation/api/sidebar/#enablepersistence) will persist the component's state between page reloads. The [`change`](https://ej2.syncfusion.com/react/documentation/api/sidebar/#change) event will be triggered when the state(expand/collapse) of the component is changed.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sidebar/types-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sidebar/types-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sidebar/types-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sidebar/types-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/sidebar/types-cs1/style.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/sidebar/types-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sidebar/types-cs1" %}

## Animate

Animation transitions can be set while expanding or collapsing the Sidebar using the [`animate`](https://ej2.syncfusion.com/react/documentation/api/sidebar/#animate) property. By default , [`animate`](https://ej2.syncfusion.com/react/documentation/api/sidebar/#animate) property is set to true. The [`enableRTL`](https://ej2.syncfusion.com/react/documentation/api/sidebar/#enablertl) will display the Sidebar in the right-to-left direction.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sidebar/animate-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sidebar/animate-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sidebar/animate-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sidebar/animate-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/sidebar/animate-cs1/style.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/sidebar/animate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sidebar/animate-cs1" %}

## Close on document click

Sidebar can be closed on document click by setting [`closeOnDocumentClick`](https://ej2.syncfusion.com/react/documentation/api/sidebar/#closeondocumentclick) to true. If this property is not set, the Sidebar will not close on document click since its default value is false. Sidebar can be kept opened during rendering using [`isOpen`](https://ej2.syncfusion.com/react/documentation/api/sidebar/#isopen) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sidebar/document-click-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sidebar/document-click-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sidebar/document-click-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sidebar/document-click-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/sidebar/document-click-cs1/style.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/sidebar/document-click-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sidebar/document-click-cs1" %}

## Enable gestures

Expand or collapse the Sidebar while swiping in touch devices using [`enableGestures`](https://ej2.syncfusion.com/react/documentation/api/sidebar/#enablegestures) property. By default, `enableGestures` is set to true.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sidebar/gestures-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sidebar/gestures-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sidebar/gestures-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sidebar/gestures-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/sidebar/gestures-cs1/style.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/sidebar/gestures-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sidebar/gestures-cs1" %}

## See Also

* [Sidebar with navigation menu](https://ej2.syncfusion.com/react/demos/#/material/sidebar/sidebar-menu)
* [Sidebar responsive panel](https://ej2.syncfusion.com/react/demos/#/material/sidebar/responsive-panel)
* [Sidebar with listview](./how-to/sidebar-with-listview)
