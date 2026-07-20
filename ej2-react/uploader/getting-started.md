---
layout: post
title: Getting started with React Uploader component | Syncfusion
description:  Checkout and learn about Getting started with React Uploader component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Uploader component

This section explains the steps required to create a simple React Uploader component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

To get started quickly with React Uploader, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=UBsZgNI99ro" %}

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Uploader packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the Uploader component, use the following command

```bash
npm install @syncfusion/ej2-react-inputs --save
```

> The --save will instruct NPM to include the Uploader package inside of the **dependencies** section of the package.json.

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> React components can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

By default, Vite projects include a `index.css` file with default styles. These default styles may conflict with Syncfusion component styles. Clear all content from the `index.css` file to prevent style conflicts.

The required styles for the component are imported in the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "@syncfusion/ej2-tailwind3-theme/styles/uploader/index.css";

{% endhighlight %}
{% endtabs %}

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding Uploader component

The React Uploader component can be added to the application by following these steps. To get started, add the Uploader component to the **src/App.tsx** file using the following code.

The following uploader code should be placed in the **src/App.tsx** file.
`[Class-component]`

```ts
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import './App.css';

export default class App extends React.Component<{}, {}> {
    public render() {
        return <UploaderComponent id="uploader" />;
    }
}
```

`[Functional-component]`

```ts
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import './App.css';

function App() {
        return <UploaderComponent id="uploader" />;
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
{% include code-snippet/uploader/basic-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/uploader/basic-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs15" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/uploader/basic-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/uploader/basic-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs16" %}

## Adding drop area

By default, the uploader component allows to upload files by drag the files from file explorer and drop into the drop area.  You can configure any other external element as drop target using **dropArea** property.

In the following sample, drop target is configured.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/uploader/drop-area-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/uploader/drop-area-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/drop-area-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/uploader/drop-area-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/uploader/drop-area-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/drop-area-cs4" %}

## Configure asynchronous settings

The uploader component processes the files to upload in Asynchronous mode by default. Define the properties **saveUrl** and **removeUrl** to handle the save and remove action as follows.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/uploader/basic-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/uploader/basic-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs17" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/uploader/basic-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/uploader/basic-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs18" %}

## Handle success and failed upload

You can handle the success and failure actions using the **success** and **failure** events. To handle these event, define the function and assign it to corresponding event as shown below.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/uploader/basic-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/uploader/basic-cs19/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs19" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/uploader/basic-cs20/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/uploader/basic-cs20/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs20" %}

> Refer to the [React File Upload](https://www.syncfusion.com/react-components/react-file-upload) feature tour page for its groundbreaking feature representations. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/bootstrap5/uploader/default) that shows how to render the Uploader in React.

## See Also

* [How to add additional data on upload](./how-to/add-additional-data-on-upload)
* [Achieve file upload programmatically](./how-to/achieve-file-upload-programmatically)
* [Achieve invisible upload](./how-to/achieve-invisible-upload)