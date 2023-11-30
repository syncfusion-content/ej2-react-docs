---
layout: post
title: Getting started with React Card component | Syncfusion
description:  Checkout and learn about Getting started with React Card component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple **Card** using Styles, and how to configure the structure for the header section, Horizontal, action buttons, content section.

## Dependencies

The Card Component is pure CSS component so no specific dependencies to render the card.

## Setup for Local Development

You can use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications. To install `create-react-app` run the following command.

```
npm install -g create-react-app
```

* To setup basic `React` sample use following commands.

### using TSX

```

create-react-app quickstart --scripts-version=react-scripts-ts

cd quickstart

```

### using JSX

```

create-react-app quickstart

cd quickstart

```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

Install the below required dependency package in order to use the `Card` component in your application.

```bash
npm install @syncfusion/ej2-layouts –save
```

* The Card CSS files are available in the `ej2-layouts` package folder. This can be referenced in your application using the following code.

`[src/styles/styles.css]`

```css
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
```

## Adding a simple Card

* Add the HTML `div` element with `e-card` class into your `index.html`.

`[src/index.html]`

```
        <div className = "e-card">
          Sample Card
        </div>
```

## Adding a header to the card

You can create cards with a header in a specific structure. For adding header you need to create `div` element and add `e-card-header` class.

* You can include heading inside the card header by adding an `div` element with `e-card-header-caption` class, and also content will be added by adding element with `e-card-content`. For detailed information, refer to the [Header and Content](./header-content).

     ```
       <div class = "e-card">                    --> Root Element
          <div class="e-card-header">           --> Root Header Element
             <div class="e-card-header-caption">    --> Root Heading Element
                <div class="e-card-header-title"></div>   --> Heading Title Element
            </div>
            <div class="e-card-content"></div>         --> Card content Element
         </div>
        </div>
     ```

* Now, run the application in the browser using the following command.

    ```
    npm start
    ```

Output will be as follows:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/card/card_header-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/card/card_header-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card_header-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card_header-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/card/card_header-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/card/card_header-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card_header-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card_header-cs4" %}

## See Also

* [How to add a header and content](./header-content)