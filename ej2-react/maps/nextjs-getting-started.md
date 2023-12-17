---
layout: post
title: React getting started with Next.js | Syncfusion
description: Check out and learn about how to use Syncfusion React UI components in the Next.js project.
control: Next.js
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Creating a Next.js Application Using Syncfusion React Components

This section provides a step-by-step guide for setting up a Next.js application and integrating the Syncfusion React Maps component.

## What is Next.js?

[Next.js](https://nextjs.org/) is a React framework that makes it easy to build fast, SEO-friendly, and user-friendly web applications. It provides features such as server-side rendering, automatic code splitting, routing, and API routes, making it an excellent choice for building modern web applications.

## Prerequisites

Before getting started with the Next.js application, ensure the following prerequisites are met:

* [Node.js 16.8](https://nodejs.org/en) or later.

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

Using one of the above commands will lead you to set up additional configurations for the project as below:

1.Define the project name: Users can specify the name of the project directly. Let's specify the name of the project as `ej2-nextjs-maps`.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? » ej2-nextjs-maps

{% endhighlight %}
{% endtabs %}

2.Select the required packages.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? ... ej2-nextjs-maps
√ Would you like to use TypeScript? ... No / `Yes`
√ Would you like to use ESLint? ... No / `Yes`
√ Would you like to use Tailwind CSS? ... `No` / Yes
√ Would you like to use `src/` directory? ... No / `Yes`
√ Would you like to use App Router? (recommended) ... No / `Yes`
√ Would you like to customize the default import alias? ... `No`/ Yes
Creating a new Next.js app in D:\ej2-nextjs-maps.

{% endhighlight %}
{% endtabs %}

3.Once complete the above mentioned steps to create `ej2-nextjs-maps`, navigate to the directory using the below command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-nextjs-maps

{% endhighlight %}
{% endtabs %}

The application is ready to run with default settings. Now, let's add Syncfusion components to the project.

## Install Syncfusion React packages

Syncfusion React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion React components in the project, install the corresponding npm package.

Here, the [React Maps component](https://www.syncfusion.com/react-components/react-maps-library) is used as an example. To install the React Maps component in the project, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-maps --save

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-maps

{% endhighlight %}
{% endtabs %}

## Add Syncfusion React component

Follow the below steps to add the React Maps component to the Next.js project:

1.Define the Maps component in the **src/app/page.tsx** file, as shown below:

{% tabs %}
{% highlight ts tabtitle="page.tsx" %}

'use client'
import { world_map } from './world-map';
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
 function App() {
    return (<MapsComponent id="maps">
            <LayersDirective>
                <LayerDirective shapeData={world_map}>
                </LayerDirective>
            </LayersDirective>
        </MapsComponent>);
}
export default App;

{% endhighlight %}
{% endtabs %}

>Note: Refer the value of the data source of [`world-map.ts`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map1260719407).

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

To learn more about the functionality of the Maps component, refer to the [documentation](https://ej2.syncfusion.com/react/documentation/maps/getting-started#module-injection).

> [View the NEXT.js Maps sample in the GitHub repository](https://github.com/SyncfusionExamples/syncfusion-react-maps-component-in-nextjs).
