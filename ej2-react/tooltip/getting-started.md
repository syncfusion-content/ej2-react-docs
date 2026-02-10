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

This section explains the steps required to create a simple React Tooltip component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

To get started quickly with React Tooltip, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=lCzUw3fOS1g" %}

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Tooltip packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the Tooltip component, use the following command

```bash
npm install @syncfusion/ej2-react-popups --save
```

> The --save will instruct NPM to include the Tooltip package inside of the **dependencies** section of the package.json.

## Adding CSS reference

The following CSS files are available in the **../node_modules/@syncfusion** package folder. Add these as references in **src/App.css**.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-popups/styles/tailwind3.css";
```

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding Tooltip component

The React Tooltip component can be added to the application by following these steps. To get started, add the Tooltip component to the **src/App.tsx** file using the following code.

The following tooltip code should be placed in the **src/App.tsx** file.

```ts
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
export default App;
```

## Run the application

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The output appears as follows.

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

> Refer to the [React Tooltip](https://www.syncfusion.com/react-components/react-tooltip) feature tour page for its groundbreaking feature representations. You can also explore our [React Tooltip component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/tooltip/default) that shows how to render the Tooltip in React.

## See Also

[Positioning Tooltip](./position)
[Tooltip Open Mode](./open-mode)
[Customize the Tooltip](./customization)