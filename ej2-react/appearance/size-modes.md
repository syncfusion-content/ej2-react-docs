---
layout: post
title: Size modes in React Appearance component | Syncfusion
description: Learn here all about Size modes in Syncfusion React Appearance component of Syncfusion Essential JS 2 and more.
control: Size modes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Size Modes for Syncfusion<sup style="font-size:70%">&reg;</sup> React Components

Modern web applications need to provide consistent user experiences across a variety of devices—from desktops to mobile screens. Syncfusion<sup style="font-size:70%">&reg;</sup> React components offer two size modes to address this: **normal** (default) and **touch** (bigger). These modes allow interfaces to adapt for both mouse and touch interactions, improving usability and accessibility on any device.

## Overview of Size Modes

Size modes control the dimensions, spacing, and tap/click target sizes of UI controls:

- **Normal Mode:** The default; optimized for mouse and keyboard users, providing standard-sized controls.
- **Touch (Bigger) Mode:** Enlarges controls and increases spacing for improved usability on touch-screen and mobile devices.

Switching modes helps ensure comfortable and accessible interfaces on a wide range of devices.

## Size mode for application

The user can enable touch mode (bigger) for the entire application by adding the `e-bigger` class to the `body` element in the `index.html` file as follows:

  ```
  <body className="e-bigger">
    ...
  </body>
  ```

## Size mode for a component

The user can enable touch mode (bigger) for a component by adding the `e-bigger` class to the `div` element that contains the component. Another way of enabling touch mode is by adding the `e-bigger` class using the available `cssClass` property of the component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/sizemode-runtime-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/sizemode-runtime-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/sizemode-runtime-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/sizemode-runtime-cs1" %}

## Change size mode for application at runtime

The user can change the size mode of the application between touch and normal (mouse) mode at runtime by adding and removing the `e-bigger` class. The following steps explain how to change the size mode of an application at runtime:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/sizemode-runtime-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/sizemode-runtime-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/sizemode-runtime-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/sizemode-runtime-cs2" %}

## Change size mode for a component at runtime

The user can change the size mode of a component between touch and normal (mouse) mode at runtime by setting the `e-bigger` CSS class.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/sizemode-runtime-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/sizemode-runtime-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/sizemode-runtime-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/sizemode-runtime-cs3" %}

## Customizing font size for all components

To globally adjust text size in all Syncfusion<sup style="font-size:70%">&reg;</sup> React components, override the `.e-control` class:

  ```css

    .e-control, .e-control [class^='e-'], .e-control [class*=' e-'] {
      font-size: 1rem;
    }

  ```

## Change the font family of Syncfusion<sup style="font-size:70%">&reg;</sup> React components

The font family of Syncfusion<sup style="font-size:70%">&reg;</sup> React components can be changed by using the `e-control` class. This class is present in all Syncfusion<sup style="font-size:70%">&reg;</sup> components and allows the user to change the font family of all Syncfusion<sup style="font-size:70%">&reg;</sup> React components in an application.

```css

.e-control {
  font-family: Arial !important;
}

```

By including the above CSS code block in the style sheet of the application, the user can change the font-family of all Syncfusion<sup style="font-size:70%">&reg;</sup> components.

## See also

* [Sidebar responsiveness](https://ej2.syncfusion.com/react/documentation/sidebar/auto-close)
* [DataGrid responsiveness](https://ej2.syncfusion.com/react/documentation/grid/columns/responsive-columns)
* [TreeGrid responsiveness](https://ej2.syncfusion.com/react/documentation/treegrid/scrolling#responsive-with-parent-container)
* [Dashboard Layout responsiveness](https://ej2.syncfusion.com/react/documentation/treegrid/scrolling#responsive-with-parent-container)
* [Kanban responsiveness](https://ej2.syncfusion.com/react/documentation/kanban/responsive-mode)
* [Toolbar responsiveness](https://ej2.syncfusion.com/react/documentation/toolbar/responsive-mode)
* [Tab responsiveness](https://ej2.syncfusion.com/react/documentation/tab/adaptive)