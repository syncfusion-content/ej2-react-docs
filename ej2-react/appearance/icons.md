---
layout: post
title: Icons in React Appearance component | Syncfusion
description: Learn here all about Icons in Syncfusion React Appearance component of Syncfusion Essential JS 2 and more.
control: Icons 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Predefined Icons Library in Syncfusion<sup style="font-size:70%">&reg;</sup> React Component

Syncfusion's icon library provides an extensive collection of pre-designed icons for enhancing user interfaces in React applications. These icons are available as `base64` formatted font icons, enabling the creation of visually consistent designs with minimal effort.

## Referring icons in the React application

Icons can be referenced in a React application using the following methods:

* [npm package](#the-npm-package) – Access icons via the npm package.
* [CDN reference](#cdn-reference) – Access icons via CDN-hosted resources.

### The npm package

All Syncfusion<sup style="font-size:70%">&reg;</sup> theme icons are distributed in the [ej2-icons](https://www.npmjs.com/package/@syncfusion/ej2-icons) package, available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. This package includes both CSS and SCSS files supporting all themes.

To use these icons, install the `ej2-icons` npm package:

```bash
npm install @syncfusion/ej2-icons
```

Then import the desired theme’s icon stylesheet in your application:

`[src/App.css]`

```css
@import "../node_modules/@syncfusion/ej2-icons/styles/<theme_name>.css";
```

> To apply these styles in your application, ensure you import `App.css` in the `src/App.tsx` file.

**Example:**

```css
@import "../node_modules/@syncfusion/ej2-icons/styles/material.css";
```

### CDN Reference

Syncfusion<sup style="font-size:70%">&reg;</sup> theme icons are also available via CDN. Reference the correct version to ensure compatibility with your Syncfusion<sup style="font-size:70%">&reg;</sup> React package.

To use CDN-hosted icons, add a link tag in your HTML file’s head section:

```html
<!-- Bootstrap5 -->
<head>
    <link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/bootstrap5.css" rel="stylesheet"/>
</head>
<!-- Material -->
<head>
    <link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/material.css" rel="stylesheet"/>
</head>
```

## Steps to use the icons library

Create a React application as shown:

```bash
npx create-react-app my-app
cd my-app
npm start
```

For details on common setup and configuration, see [getting started with the Syncfusion<sup style="font-size:70%">&reg;</sup> React application](https://ej2.syncfusion.com/react/documentation/getting-started/quick-start).

### Using icons directly in HTML elements

Syncfusion<sup style="font-size:70%">&reg;</sup> icons can be rendered by assigning the `e-icons` class (which provides font icon styling) and the specific icon class prefixed with `e-` to an HTML element.

Steps to render a Syncfusion<sup style="font-size:70%">&reg;</sup> icon directly:

1. Add the `e-icons` class to the desired HTML element.
2. Add the desired icon class (e.g., `e-paste`) as listed in the [available icons](#available-icons) section. For example:

    ```css
    .e-paste:before {
        content:'\e355';
    }
    ```

3. Use both the `e-icons` and specific icon class on your element:

    ```html
    <span class="e-icons e-paste"></span>
    ```

4. Reference the icons library in your `index.html` file with a CDN link:

    ```html
    <link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/bootstrap5.css" rel="stylesheet" />
    ```

A complete example is shown below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/icons-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/icons-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/icons-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/icons-cs1" %}

### Icon size

The `ej2-icons` package provides class-based options for varying icon sizes. Choose the size mode suitable for your interface—`e-large` for touch-friendly elements, or `e-small` and `e-medium` for pointer-based interactions.

The available size classes are:
* `e-small` – Sets icon size to `8px`.
* `e-medium` – Sets icon size to `16px`.
* `e-large` – Sets icon size to `24px`.

**Example:**

```html
<span class="e-icons e-small e-search"></span>
<span class="e-icons e-medium e-search"></span>
<span class="e-icons e-large e-search"></span>
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/icons-size-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/icons-size-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/icons-size-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/icons-size-cs1" %}

### Customizing Icon Appearance

Syncfusion<sup style="font-size:70%">&reg;</sup> icons support further customization by modifying the `e-icons` class. Changing icon color or size enables alignment with your application’s visual guidelines and improves accessibility or emphasis where needed.

For example, to apply a custom color to an icon:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/icons-customization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/icons-customization-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/icons-customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/icons-customization-cs1" %}

## Available Icons

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 icon package includes a complete library of icons. Refer to the content section for each icon’s specific CSS class and code.

<!-- markdownlint-disable MD033 -->

### Material 3

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/material3/demo.html" style="height:1000px;width:100%;"></iframe>

### Material

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/material/demo.html" style="height:1000px;width:100%;"></iframe>

### Fabric

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/fabric/demo.html" style="height:1000px;width:100%;"></iframe>

### Bootstrap

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/bootstrap/demo.html" style="height:1000px;width:100%;"></iframe>

### Bootstrap 4

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/bootstrap4/demo.html" style="height:1000px;width:100%;"></iframe>

### Bootstrap 5

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/bootstrap5/demo.html" style="height:1000px;width:100%;"></iframe>

### High Contrast

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/highcontrast/demo.html" style="height:1000px;width:100%;"></iframe>

### Tailwind CSS

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/tailwind/demo.html" style="height:1000px;width:100%;"></iframe>

### Tailwind 3.4

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/tailwind3/demo.html" style="height:1000px;width:100%;"></iframe>

### Fluent 2

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/fluent2/demo.html" style="height:1000px;width:100%;"></iframe>

### Fluent

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/fluent/demo.html" style="height:1000px;width:100%;"></iframe>

## See also

* [Using icons in Syncfusion<sup style="font-size:70%">&reg;</sup> React Button](https://ej2.syncfusion.com/react/documentation/button/types-and-styles#icons)
