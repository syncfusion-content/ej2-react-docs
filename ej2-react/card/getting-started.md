---
layout: post
title: Getting started with React Card component | Syncfusion
description:  Checkout and learn about Getting started with React Card component of Syncfusion Essential JS 2 and more details.
control: Card
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Card

This section explains how to create a simple **Card** component with basic styling, including configuring the header, actions, and content sections.

## Dependencies

The Card component is styled entirely using CSS. To use the component, include the required CSS files in the application. No additional JavaScript dependencies are required for basic card rendering and styling.

## Setup for local development

To set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide).  Vite scaffolds the project using JavaScript or TypeScript and optimizes the application for production.

> **Note:** To create a React application using `create-react-app`, see the [Syncfusion documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app).

To create a new React application, run:

```bash
npm create vite@latest my-app
```

For a TypeScript environment, run:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```

For a JavaScript environment, run:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published on the [npm public registry](https://www.npmjs.com/~syncfusionorg).

Install the required package for the `Card` component:

```bash
npm install @syncfusion/ej2-layouts --save
```

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

@import "@syncfusion/ej2-tailwind3-theme/styles/card/index.css";

{% endhighlight %}
{% endtabs %}

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Add a simple Card

* Add the HTML `div` element with `e-card` class into your `index.html`.

`[src/index.html]`

```
        <div className = "e-card">
          Sample Card
        </div>
```

## Add a header to the card

You can create cards with a header in a specific structure. For adding header you need to create `div` element and add `e-card-header` class.

* You can include heading inside the card header by adding an `div` element with `e-card-header-caption` class, and also content will be added by adding element with `e-card-content`. For detailed information, refer to the [Header and Content](./header-content).

     ```
       <div class = "e-card">                    <!-- Root element -->
          <div class="e-card-header">           <!-- Header container -->
             <div class="e-card-header-caption">    <!-- Caption container -->
                <div class="e-card-header-title"></div>   <!-- Title element -->
            </div>
            <div class="e-card-content"></div>         <!-- Content container -->
         </div>
        </div>
     ```

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

    ```
    npm run dev
    ```

Output will be as follows:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/card/card_header-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/card/card_header-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card_header-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card_header-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/card/card_header-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/card/card_header-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card_header-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card_header-cs4" %}

## See Also

* [How to add a header and content](./header-content)