---
layout: post
title: Icons in React Appearance component | Syncfusion
description: Learn about the predefined icon library, usage, CDN and npm references, and customization options for Syncfusion React components.
control: Icons 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Predefined icons library in Syncfusion<sup style="font-size:70%">&reg;</sup> React components

Syncfusion's icon library provides an extensive collection of pre-designed, font-based icons (embedded as base64 in themes) to enhance user interfaces in React applications. These icons ensure visual consistency across Syncfusion components and are available via npm or CDN with minimal setup.

## Referencing icons in a React application

Icons can be included in a React application using the following methods:

* [npm package](#the-npm-package) — Install and import icon styles from npm.  
* [CDN reference](#cdn-reference) — Link to CDN-hosted icon styles.

### The npm package

Syncfusion theme icons are distributed in the [@syncfusion/ej2-icons](https://www.npmjs.com/package/@syncfusion/ej2-icons) package on npm. The package includes CSS/SCSS files for all supported themes.

Install the package:

```bash
npm install @syncfusion/ej2-icons
```

Then import the desired theme’s icon stylesheet in your application:

`[src/App.css]`

```css
@import "../node_modules/@syncfusion/ej2-icons/styles/<theme_name>.css";
```

> To apply these styles, ensure you import `App.css` in your `src/App.tsx` (or equivalent entry file).

**Example:**

```css
@import "../node_modules/@syncfusion/ej2-icons/styles/tailwind3.css";
```

### CDN reference

Syncfusion<sup style="font-size:70%">&reg;</sup> theme icons are also available via CDN. To ensure compatibility with your installed Syncfusion React packages, use a version-specific CDN path that matches your EJ2 package version (for example, 32.1.19).

Include the appropriate `<link>` tag in the `<head>` section of your HTML:

```html
<!-- Bootstrap5 -->
<link href="https://cdn.syncfusion.com/ej2/32.1.19/ej2-icons/styles/bootstrap5.css" rel="stylesheet"/>

<!-- Material -->
<link href="https://cdn.syncfusion.com/ej2/32.1.19/ej2-icons/styles/material.css" rel="stylesheet"/>
```

Always match the version number in the CDN URL to the version of your `@syncfusion/ej2-*` packages to prevent icon mismatches or rendering issues.

## Using the icons library

Syncfusion icons are rendered by applying the base class `e-icons` (which provides font styling) together with a specific icon class (prefixed with `e-`) to an HTML element.

Steps to render an icon:

1. Add the `e-icons` class to the desired HTML element.
2. Add the specific icon class (for example, `e-paste`) as listed in the [available icons](#available-icons) section.

Example HTML:

```html
<span class="e-icons e-paste"></span>
```

The icon library defines each glyph using a CSS `:before` pseudo-element rule. For reference, the glyph for `e-paste` is defined as:

```css
.e-paste:before {
  content: '\e355';
}
```

4. Reference the icons stylesheet in your application (via npm import or CDN link as shown above).

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

The `ej2-icons` package provides utility classes to adjust icon size. Use the class that best fits your interface design — `e-large` for touch targets, or `e-small`/`e-medium` for compact layouts.

Available size classes:

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

Syncfusion<sup style="font-size:70%">&reg;</sup> icons can be further customized by overriding styles on the `e-icons` class or the specific icon element. This allows alignment with your application’s design system, improved accessibility, or visual emphasis.

For example, to change the icon color:

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

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 icon package includes a comprehensive library of icons across multiple themes. Each theme demo below shows the icon name, CSS class, and visual preview.

<!-- markdownlint-disable MD033 -->

### Material 3

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/material3/demo.html" style="height:1000px;width:100%;" title="Material 3 icons preview" loading="lazy"></iframe>

### Material

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/material/demo.html" style="height:1000px;width:100%;" title="Material icons preview" loading="lazy"></iframe>

### Fabric

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/fabric/demo.html" style="height:1000px;width:100%;" title="Fabric icons preview" loading="lazy"></iframe>

### Bootstrap

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/bootstrap/demo.html" style="height:1000px;width:100%;" title="Bootstrap icons preview" loading="lazy"></iframe>

### Bootstrap 4

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/bootstrap4/demo.html" style="height:1000px;width:100%;" title="Bootstrap 4 icons preview" loading="lazy"></iframe>

### Bootstrap 5

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/bootstrap5/demo.html" style="height:1000px;width:100%;" title="Bootstrap 5 icons preview" loading="lazy"></iframe>

### High Contrast

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/highcontrast/demo.html" style="height:1000px;width:100%;" title="High Contrast icons preview" loading="lazy"></iframe>

### Tailwind CSS

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/tailwind/demo.html" style="height:1000px;width:100%;" title="Tailwind CSS icons preview" loading="lazy"></iframe>

### Tailwind 3.4

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/tailwind3/demo.html" style="height:1000px;width:100%;" title="Tailwind 3.4 icons preview" loading="lazy"></iframe>

### Fluent 2

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/fluent2/demo.html" style="height:1000px;width:100%;" title="Fluent 2 icons preview" loading="lazy"></iframe>

### Fluent

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/fluent/demo.html" style="height:1000px;width:100%;" title="Fluent icons preview" loading="lazy"></iframe>

## See also

* [Using icons in Syncfusion React Button](https://ej2.syncfusion.com/react/documentation/button/types-and-styles#icons)