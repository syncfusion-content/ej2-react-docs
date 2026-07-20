---
layout: post
title: Getting started with React Carousel component | Syncfusion
description:  Checkout and learn about Getting started with React Carousel component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Carousel component

This section explains how to create a simple [React Carousel](https://www.syncfusion.com/react-components/react-carousel), and configure its available functionalities in React.

To get started quickly with the React Carousel component, refer to this video:

{% youtube "https://www.youtube.com/watch?v=g0cjYdIqs5g" %}

## Dependencies

The following dependencies are required to use the Carousel component in an application. These packages provide core functionalities and UI controls for the Carousel.

```javascript
|-- @syncfusion/ej2-react-navigations
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-buttons
```

## Setup a development environment

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up the environment using JavaScript and optimizes applications for production.

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

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install `Carousel` component, use the following command.

```bash
npm install @syncfusion/ej2-react-navigations --save
```

The above command installs [Carousel dependencies](./getting-started#dependencies) which are required to render the component in the `React` environment.

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

@import "@syncfusion/ej2-tailwind3-theme/styles/carousel/index.css";

{% endhighlight %}
{% endtabs %}

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Add Carousel to the project

Now, create the `Carousel` component in the application. Add the `Carousel` component in the `src/App.tsx` file using the following code snippet.

```ts
import { CarouselComponent, CarouselItemsDirective, CarouselItemDirective } from "@syncfusion/ej2-react-navigations";
import * as React from "react";

const App = () => {
    return (<div className='control-container'>
      <CarouselComponent>
        <CarouselItemsDirective>
          <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/cardinal.png" alt="cardinal" style="height:100%;width:100%;" /><figcaption class="img-caption">Cardinal</figcaption></figure>'/>
          <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/hunei.png" alt="kingfisher" style="height:100%;width:100%;" /><figcaption class="img-caption">Kingfisher</figcaption></figure>'/>
          <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/costa-rica.png" alt="keel-billed-toucan" style="height:100%;width:100%;" /><figcaption class="img-caption">Keel-billed-toucan</figcaption></figure>'/>
          <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png" alt="yellow-warbler" style="height:100%;width:100%;" /><figcaption class="img-caption">Yellow-warbler</figcaption></figure>'/>
          <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/bee-eater.png" alt="bee-eater" style="height:100%;width:100%;" /><figcaption class="img-caption">Bee-eater</figcaption></figure>'/>
        </CarouselItemsDirective>
      </CarouselComponent>
    </div>);
}
export default App;
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles code and serves the application locally, opening it in the browser.

```
npm run dev
```

 {% previewsample "page.domainurl/code-snippet/carousel/getting-started-cs1" %}

N> Explore the [React Carousel example](https://ej2.syncfusion.com/react/demos/#/tailwind3/carousel/default) for a demonstration of configuring the Carousel in React.