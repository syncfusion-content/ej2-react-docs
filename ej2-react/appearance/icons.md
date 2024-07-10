---
layout: post
title: Icons in React Appearance component | Syncfusion
description: Learn here all about Icons in Syncfusion React Appearance component of Syncfusion Essential JS 2 and more.
control: Icons 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# React Icons Library Appearance component

Syncfusion's icon library is a collection of pre-designed icons that can be used to enhance the user interface of an application. This pre-designed icons are set of `base64` formatted font icons. Utilizing this icon library can make it simpler to create a cohesive, visually pleasing design for an application.

## Referring icons in the React application

Using the below approaches, the icons can be referenced in the React application.

* [npm package](#the-npm-package) - Use the npm package to access icons.

* [CDN reference](#cdn-reference) - Use the static web asset to access icons.

### The npm package

All Syncfusion theme icons are shipped in the [ej2-icons](https://www.npmjs.com/package/@syncfusion/ej2-icons) package, which is published on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. This package contains both CSS and SCSS theme files for all themes.

Icons can be used from the npm package `ej2-icons`. To use the icons, install the npm package using the following command:

```bash
 npm install @syncfusion/ej2-icons
```

Refer to the following syntax to use icons in a React application:

```css
@import "../node_modules/@syncfusion/ej2-icons/styles/<theme_name>.css";
```

**Example:**

```css
@import "../node_modules/@syncfusion/ej2-icons/styles/material.css";
```

### CDN reference

All Syncfusion theme icons are available on the CDN. Instead of using a local resource on the server, use a cloud CDN to refer to the icons.

Make sure that the version of the icons in the URL matches the version of the Syncfusion React package. This will prevent compatibility issues and ensure that the correct version of the icons is loaded.

To use the icons from the CDN, refer to the icons by URLs in the application. This can be done by linking the icons in the HTML file by adding a link tag to the head section.

```
// Bootstrap5
<head>
    <link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/bootstrap5.css" rel="stylesheet"/>
</head>
//Material
<head>
    <link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/material.css" rel="stylesheet"/>
</head>
```

## Steps to use icons library

Let's create a React application using the following command:

```bash
npx create-react-app my-app
cd my-app
npm start
```

For an introduction and configuration of the common specifications, see [getting started with the Syncfusion React application](https://ej2.syncfusion.com/react/documentation/getting-started/quick-start).

### Using icons directly in HTML element

The built-in Syncfusion icons can be rendered directly in the HTML element by defining the `e-icons` class, which contains the font-family and common properties of font icons, and defining the available icon's class with the `e-` prefix.

The following steps explain the direct rendering of the Syncfusion icon in the HTML element.

1. Add the class name `e-icons` to the HTML element that needs to render the icon.

2. Add the icon class with corresponding icon content from the [available icons](#available-icons). For example, the below code snippet represents the paste icon class.

    ```css
    .e-paste:before {
        content:'\e355';
    }
    ```

3. Add `e-icons` and `e-paste` classes to the HTML element.

    ```
    <span class="e-icons e-paste"></span>
    ```

4. Add the CDN link reference of icons library in the `~index.html` file.

    ```
    <link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/bootstrap5.css" rel="stylesheet" />
    ```

   The below code snippet represents a complete example of icon usage.

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

The `ej2-icons` package offers options to display icons in different size modes. A user can use different icon sizes in their application based on touch or mouse mode. If the user is using touch mode, add `e-large` class to the element to make more accessible for touch interactions, or add the `e-small` or `e-medium` class in mouse mode.

The pre-defined icon size is present in the available classes listed below.
* `e-small` - Sets the icon size as `8px`.
* `e-medium` - Sets the icon size to `16px`.
* `e-large` - Sets the icon size to `24px`.

  **Example:**

    ```
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

### Icon appearance customization

The Syncfusion React icons can be customized with custom color and size by overriding the `e-icons` class. Customizing the icons in the library can be useful for making the icons more visually appealing and fitting to the design of the application. For example, a user can change the color of an icon to match the color scheme of their application, or increase the size of an icon to make it more visible on smaller screens. It may also be useful for creating a consistent look and feel across different parts of the application. Overall, customizing the icons in the library can improve the overall user experience of the application.

In the example below, the icon color is customized with custom color.

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

## Available icons

The complete package of Essential JS 2 icons is listed below. The corresponding icon content can be referred in the content section.

<!-- markdownlint-disable MD033 -->

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

### Fluent

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/fluent/demo.html" style="height:1000px;width:100%;"></iframe>

## See also

* [Using icons in Syncfusion React Button](https://ej2.syncfusion.com/react/documentation/button/types-and-styles/#icons)
