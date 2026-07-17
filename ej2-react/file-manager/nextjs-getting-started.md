---
layout: post
title: React getting started with Next.js | Syncfusion
description: Check out and learn here all about how to use the Syncfusion React UI components in the Next.js project.
control: Next.js
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Creating a Next.js Application Using Syncfusion® Components

This section provides a step-by-step guide for setting up a Next.js application and integrating the [React File Manager](https://www.syncfusion.com/react-components/react-file-manager) component.

## What is Next.js?

[Next.js](https://nextjs.org/) is a React framework that makes it easy to build fast, SEO-friendly, and user-friendly web applications. It provides features such as server-side rendering, automatic code splitting, routing, and API routes, making it an excellent choice for building modern web applications.

## Prerequisites

Before getting started with the Next.js application, ensure the following prerequisites are met:

* [Node.js 18.17](https://nodejs.org/en) or later.

* The application is compatible with macOS, Windows, and Linux operating systems.

## Create a Next.js application

To create a new `Next.js` application, use one of the commands that are specific to either NPM or Yarn.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx create-next-app@latest

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create next-app

{% endhighlight %}
{% endtabs %}

Using one of the above commands will prompt you to set up additional configurations for the project as below:

1.Define the project name: Users can specify the name of the project directly. Let's specify the name of the project as `ej2-nextjs-file-manager`.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? » ej2-nextjs-file-manager

{% endhighlight %}
{% endtabs %}

2.Select the required packages.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? ... ej2-nextjs-file-manager
? Would you like to use the recommended Next.js defaults?
>   Yes, use recommended defaults - TypeScript, ESLint, Tailwind CSS, App Router
    No, reuse previous settings
    No, customize settings

{% endhighlight %}
{% endtabs %}

3.Once you have completed the above-mentioned steps to create `ej2-nextjs-file-manager`, navigate to the directory using the below command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-nextjs-file-manager

{% endhighlight %}
{% endtabs %}

The application is ready to run with default settings. Now, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the project, install the corresponding npm package.

Here, the [React File Manager component](https://www.syncfusion.com/react-components/react-file-manager) is used as an example. To install the React File Manager component in the project, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-filemanager --save

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-filemanager

{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> React components come with [built-in themes](https://ej2.syncfusion.com/react/documentation/appearance/theme), which are available in the installed packages. It's easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> React components to match the style of your application by referring to one of the built-in themes.

To install the [Tailwind3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

```bash
npm i @syncfusion/ej2-tailwind3-theme
```

In this package, the File Manager component includes an `index.css` file that automatically loads all the required dependency styles. Add the following import to the **app/globals.css** file and remove the existing styles from that file.

{% tabs %}
{% highlight css tabtitle="globals.css" %}

@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/file-manager/index.css";

{% endhighlight %}
{% endtabs %}

> To know more about built-in themes and CSS reference for individual components, refer to the [themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) section.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React component

Follow the below steps to add the React File Manager component to the Next.js project:

1.Define the File Manager component in the **app/page.tsx** file, as shown below:

{% tabs %}
{% highlight ts tabtitle="page.tsx" %}

'use client'
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';

function App() {
  let hostUrl: string = "https://physical-service.syncfusion.com/";
  let ajaxSettings: object = {
    url: hostUrl + "api/FileManager/FileOperations",
    getImageUrl: hostUrl + "api/FileManager/GetImage"
  };

  return (
    <div className="control-section">
      <FileManagerComponent id="file" view="LargeIcons" ajaxSettings={ajaxSettings} >
        <Inject services={[NavigationPane, DetailsView, Toolbar]} />
      </FileManagerComponent>
    </div>
  );
}
export default App;

{% endhighlight %}
{% endtabs %}

## Run the application

To run the application, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn run dev

{% endhighlight %}
{% endtabs %}

To learn more about the functionality of the File Manager component, refer to the [documentation](https://ej2.syncfusion.com/react/documentation/file-manager/getting-started#module-injection).

> [View the NEXT.js File Manager sample in the GitHub repository](https://github.com/SyncfusionExamples/syncfusion-react-filemanager-component-in-nextjs).

N> Looking for the full React File Manager component overview, features, pricing, and documentation? Visit the [React File Manager](https://www.syncfusion.com/react-components/react-file-manager) page.