---
layout: post
title: Size modes in React Appearance component | Syncfusion
description: Learn about size modes (normal and touch) for Syncfusion React components and how to enable and customize them.
control: Size modes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Size modes for Syncfusion<sup style="font-size:70%">&reg;</sup> React components

Modern web applications must deliver consistent experiences across devices. Syncfusion<sup style="font-size:70%">&reg;</sup> React components provide two size modes to support this requirement: **normal** (default) and **touch** (bigger). These modes adapt the interface for mouse/keyboard and touch interactions, enhancing usability and accessibility.

## Overview of size modes

Size modes modify control dimensions, spacing, and tap/click target areas to suit different input methods:

- **Normal mode:** The default setting, optimized for mouse and keyboard input with standard control sizes.  
- **Touch mode (bigger):** Increases control sizes and spacing to improve finger-target accuracy on touch-enabled and mobile devices.

Applying the appropriate mode creates comfortable, accessible interfaces for diverse devices and input methods.

## Enable size mode for the application

To enable touch mode (bigger) across the entire application, add the `e-bigger` class to the `<body>` element in `index.html`:

```html
<body class="e-bigger">
  ...
</body>
```

## Enable size mode for a component

To enable touch mode for an individual component, apply the `e-bigger` class to its container `<div>`, or assign the class through the component’s `cssClass` property.

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

## Change size mode for the application at runtime

To toggle the application between touch and normal modes during runtime, dynamically add or remove the `e-bigger` class from the document `<body>` element.

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

To switch size mode for a specific component at runtime, dynamically add or remove the `e-bigger` CSS class from the component’s container element, or update its `cssClass` property.

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

## Customize font size for all components

To adjust the text size globally across all Syncfusion components, override styles on the `.e-control` class and its descendants:

```css
.e-control, .e-control [class^='e-'], .e-control [class*=' e-'] {
  font-size: 1rem;
}
```

## Change the font family of Syncfusion<sup style="font-size:70%">&reg;</sup> React components

The font family for all Syncfusion<sup style="font-size:70%">&reg;</sup> React components can be customized by targeting the common `.e-control` class that is applied to every Syncfusion component.

```css
.e-control {
  font-family: Arial !important;
}
```

Adding the above CSS rule to your application’s stylesheet changes the font family for all Syncfusion components.

## See also

* [Sidebar responsiveness](https://ej2.syncfusion.com/react/documentation/sidebar/auto-close)  
* [DataGrid responsiveness](https://ej2.syncfusion.com/react/documentation/grid/columns/responsive-columns)  
* [TreeGrid responsiveness](https://ej2.syncfusion.com/react/documentation/treegrid/scrolling#responsive-with-parent-container)  
* [Dashboard Layout responsiveness](https://ej2.syncfusion.com/react/documentation/treegrid/scrolling#responsive-with-parent-container)  
* [Kanban responsiveness](https://ej2.syncfusion.com/react/documentation/kanban/responsive-mode)  
* [Toolbar responsiveness](https://ej2.syncfusion.com/react/documentation/toolbar/responsive-mode)  
* [Tab responsiveness](https://ej2.syncfusion.com/react/documentation/tab/adaptive)