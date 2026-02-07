---
layout: post
title: Getting started with React Tooltip component | Syncfusion
description: Checkout and learn about Getting started with React Tooltip component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Tooltip component

This section provides a brief overview of how to create a simple **Tooltip** component and configure its available features in React.


To get started quickly with the React Tooltip component, refer to this video:

{% youtube "https://www.youtube.com/watch?v=lCzUw3fOS1g" %}


Tooltips can be initialized on:

* A single element
* A container with multiple sub-elements, where the sub-elements are considered as targets

## Dependencies


The following dependencies are required to use the Tooltip component in your application.

```javascript
|-- @syncfusion/ej2-react-popups
    |-- @syncfusion/ej2-react-base
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


All available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

Install the required dependency package below to use the `Tooltip` component in your application.

```bash
npm install @syncfusion/ej2-react-popups --save
```

## Adding CSS Reference


To render the Tooltip component, import Tooltip and its dependent component styles as shown below in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-popups/styles/material.css";
```

> Note: If you want to use combined component styles, use the [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Initialize the Tooltip on a single element


Import the Tooltip component into your `src/App.tsx` file using the following code:



```javascript
import * as React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';

function App() {
  const style: object = {
    display: 'inline-block',
    margin: '60px'
  };
  return (
    <TooltipComponent content="Tooltip Content" style={style}>
      Show Tooltip
    </TooltipComponent>
  );
}

```

```ts
import * as React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';
function App() {
    const style = {
        display: 'inline-block',
        margin: '60px'
    };
    return (<TooltipComponent content="Tooltip Content" style={style}>
      Show Tooltip
    </TooltipComponent>);
}
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The output will be as follows:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/tooltip/default-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/tooltip/default-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/default-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/default-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/default-cs1" %}

## Initialize Tooltip within a container


You can create Tooltips on multiple targets within a container. To do this, define specific target elements using the [`target`](https://helpej2.syncfusion.com/react/documentation/api/tooltip#target) property so that the Tooltip is initialized only on matched targets within the container. In this case, the Tooltip content is assigned from the `title` attribute of each target element.

Refer to the following code example to create a Tooltip on multiple targets within a container.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/tooltip/multi-target-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/tooltip/multi-target-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/multi-target-cs2" %}

> In the above sample, `details` refers to the container's id, and the target `.e-info` refers to the target elements available within that container.

## See Also

[Positioning Tooltip](./position)

[Tooltip Open Mode](./open-mode)

[Customize the Tooltip](./customization)
