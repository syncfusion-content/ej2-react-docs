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

The Card component is styled entirely via CSS. To use it, include the appropriate CSS files; no additional JavaScript dependencies are required.

## Setup for local development

To set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

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

* The Card CSS files are available in the `ej2-layouts` package folder. This can be referenced in your application using the following code.

`[src/styles/styles.css]`

```css
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
```

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