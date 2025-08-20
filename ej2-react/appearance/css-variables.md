---
layout: post
title: Themes using CSS Variables in React component | Syncfusion
description: Learn here all about themes using CSS variables in Syncfusion React Appearance component of Syncfusion Essential JS 2 and more.
control: Themes using CSS Variables
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# About CSS variables in themes

[CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), also known as custom properties, enable authors to define reusable values in CSS files. CSS variable names begin with two hyphens (`--`) followed by an identifier and can hold values such as colors, lengths, or fonts. Use the `var()` function to reference a variable’s value throughout your stylesheets.

Syncfusion<sup style="font-size:70%">&reg;</sup> provides modern, highly customizable themes that utilize CSS variables. These themes ensure a consistent and visually appealing appearance across all Syncfusion<sup style="font-size:70%">&reg;</sup> components. The currently available themes are:

* Material 3 Theme
* Fluent 2 Theme
* Bootstrap 5.3 Theme
* Tailwind 3.4 Theme

## CSS themes - Syncfusion<sup style="font-size:70%">&reg;</sup> React components

[Material 3](https://m3.material.io/), [Fluent 2](https://fluent2.microsoft.design/get-started/whatisnew), [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/), and [Tailwind 3.4](https://tailwindcss.com/docs/installation/using-vite) themes are supported across all EJ2 controls. Each of these themes includes both `light` and `dark` variants. They utilize CSS variables to simplify color customization directly in CSS. This approach enables easy switching between light and dark color schemes, enhancing flexibility for various user preferences and application requirements.

> Note: The Material 3 theme uses CSS variables with `rgb()` values for color. Using hex values here may cause unexpected results. In previous themes, the primary color variable was defined as `$primary: #6200ee;`. In Material 3, it is defined as `--color-sf-primary: 98, 0, 238;`.

### Utilizing CSS variables in modern themes

Modern themes streamline color customization via CSS variables. Each theme specifies its own set of variables, so refer to the relevant theme's documentation when making adjustments. This maintains consistent styling and efficient theme management across your application.

Below are examples showing how CSS variables are defined in each theme:

{% tabs %}
{% highlight ts tabtitle="material3.css" %}
{% include code-snippet/common/css-value-cs1/material3.css %}
{% endhighlight %}
{% highlight ts tabtitle="fluent2.css" %}
{% include code-snippet/common/css-value-cs1/fluent2.css %}
{% endhighlight %}
{% highlight ts tabtitle="bootstrap5.3.css" %}
{% include code-snippet/common/css-value-cs1/bootstrap5.3.css %}
{% endhighlight %}
{% highlight ts tabtitle="tailwind3.4.css" %}
{% include code-snippet/common/css-value-cs1/tailwind3.4.css %}
{% endhighlight %}
{% endtabs %}

### How to get these themes?

To access themes provided by Syncfusion, you have two primary options,

* Package
* CDN links

|    |  Light  |  Dark  |
|-----------|---------|--------|
|Package  | [Material 3 Light](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme) | [Material 3 Dark](https://www.npmjs.com/package/@syncfusion/ej2-material3-dark-theme) |
|  | [Fluent 2 Light](https://www.npmjs.com/package/@syncfusion/ej2-fluent2-theme) | [Fluent 2 Dark](https://www.npmjs.com/package/@syncfusion/ej2-fluent2-dark-theme) |
|  | [Bootstrap 5.3 Light](https://www.npmjs.com/package/@syncfusion/ej2-bootstrap5.3-theme) | [Bootstrap 5.3 Dark](https://www.npmjs.com/package/@syncfusion/ej2-bootstrap5.3-dark-theme) |
|  | [Tailwind 3.4 Light](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) | [Tailwind 3.4 Dark](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-dark-theme) |
| CDN  | [Material 3 Light](https://cdn.syncfusion.com/ej2/27.1.48/material3.css)  |  [Material 3 Dark](https://cdn.syncfusion.com/ej2/27.1.48/material3-dark.css)  |
|  |  [Fluent 2 Light](https://cdn.syncfusion.com/ej2/27.1.48/fluent2.css)  |  [Fluent 2 Dark](https://cdn.syncfusion.com/ej2/27.1.48/fluent2-dark.css)  |
|  |  [Bootstrap 5.3 Light](https://cdn.syncfusion.com/ej2/27.1.48/bootstrap5.3.css)  |  [Bootstrap 5.3 Dark](https://cdn.syncfusion.com/ej2/27.1.48/bootstrap5.3-dark.css)  |
|  | [Tailwind 3.4 Light](https://cdn.syncfusion.com/ej2/28.1.33/tailwind3.css) | [Tailwind 3.4 Dark](https://cdn.syncfusion.com/ej2/28.1.33/tailwind3-dark.css) |

### Color customization in themes

CSS variables let you dynamically change color values, including at runtime via JavaScript. This allows for interactive or adaptive color adjustments based on user actions or application state.

#### Customization using CSS

Here you can find the example for `Material 3` customization using CSS class.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/material3-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/material3-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/common/material3-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/material3-cs2" %}

**Default Material 3 primary value**

![default primary value](images/material3-default.png)

**Customized Material 3 primary value**

![customized primary value](images/material3-customize.png)

Example for `Fluent 2` customization using CSS class.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/fluent2-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/fluent2-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/common/fluent2-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/fluent2-cs2" %}

**Default fluent2 primary value**

![default primary value](images/fluent2-default.png)

**Customized fluent 2 primary value**

![customized primary value](images/fluent2-customize.png)

Example for `Bootstrap 5.3` customization using CSS class.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/Bootstrap5.3-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/Bootstrap5.3-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/common/Bootstrap5.3-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/Bootstrap5.3-cs2" %}

**Default Bootstrap 5.3 primary value**

![default primary value](images/bootstrap5.3-default.png)

**Customized Bootstrap 5.3 primary value**

![customized primary value](images/bootstrap5.3-customize.png)

Example for `Tailwind 3.4` customization using CSS class.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/tailwind3.4-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/tailwind3.4-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/common/tailwind3.4-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/tailwind3.4-cs2" %}

**Default Tailwind 3.4 primary value**

![default primary value](images/tailwind3-default.png)

**Customized Tailwind 3.4 primary value**

![customized primary value](images/tailwind3-customize.png)

With this CSS variable support, you can effortlessly customize the color variable values for Syncfusion<sup style="font-size:70%">&reg;</sup> React Components.

### Switching Light and Dark mode with CSS variables

Modern themes make it simple to toggle between light and dark modes by adjusting a single CSS class. Each theme's CSS file contains separate class selectors for light and dark modes, enabling seamless switching as needed within your application.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/material3-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/material3-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/material3-cs1" %}

### Mode switching in Fluent 2 theme

Fluent 2 also supports both light and dark variants. The theme's CSS contains class selectors for switching between these modes, as demonstrated in the preview below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/fluent2-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/fluent2-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/fluent2-cs1" %}

### Mode switching in Bootstrap 5.3 theme

Bootstrap 5.3 themes also offer separate class selectors for its light and dark variants, which can be switched at runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/bootstrap5.3-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/bootstrap5.3-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/bootstrap5.3-cs1" %}

### Mode switching in Tailwind 3.4 theme

Tailwind 3.4 provides class selectors for both light and dark modes. Switch between them as shown in the following preview.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/tailwind3.4-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/tailwind3.4-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/tailwind3.4-cs1" %}

### How to switch dark mode?

To activate dark mode, just append the `e-dark-mode` class to the body section of your application for both `Material 3`, `Fluent 2`, `Bootstrap 5.3` and `Tailwind 3.4` themes. Once applied, the theme seamlessly switches to dark mode. Please refer to the example image below for visual guidance.

`Material 3` dark mode

![dark mode](images/material3-dark.png)

`Fluent 2` dark mode

![dark mode](images/fluent2-dark.png)

`Bootstrap 5.3` dark mode

![dark mode](images/bootstrap5.3-dark.png)

`Tailwind 3.4` dark mode

![dark mode](images/tailwind3-dark.png)

### ThemeStudio Application

The ThemeStudio application now includes seamless integration with the Material 3 and Fluent 2 themes, offering a comprehensive solution for customization requirements. This enhancement enables users to effortlessly customize and personalize their themes.

Access the Syncfusion<sup style="font-size:70%">&reg;</sup> ThemeStudio application, featuring our themes, via the following link: [Link to Syncfusion<sup style="font-size:70%">&reg;</sup> ThemeStudio](https://ej2.syncfusion.com/themestudio/?theme=material3)
