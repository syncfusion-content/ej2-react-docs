---
layout: post
title: How to in React Tooltip component | Syncfusion
description: Learn here all about How to in Syncfusion React Tooltip component of Syncfusion Essential JS 2 and more.
control: How to 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to in React Tooltip component

## Show Tooltip on disabled elements

By default, Tooltips will not be displayed on disabled elements. However, it is possible to enable this behavior by following the steps below.
1. Add a disabled element like the `button` element into a div whose display style is set to `inline-block`.
2. Set the pointer event as `none` for the disabled element (button) through CSS.
3. Now, initialize the Tooltip for outer div element that holds the disabled button element.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/tooltip/disable-tooltip-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/tooltip/disable-tooltip-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/disable-tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/disable-tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/disable-tooltip-cs1" %}

## Load HTML pages into tooltip

Tooltip loads HTML pages via HTML tags such as iframe, video, and map using the [`content`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#content) property, which supports both string and HTML tags.

To load an `iframe` element in tooltip, set the required iframe in the `content` of Tooltip while initializing the Tooltip component. Refer to the following code.

```ts

content: '<iframe src="https://www.syncfusion.com/products/essential-js2"></iframe>'

```

Use the following steps to render `ej2-map` in tooltip:

1. Initialize the map component and create an element. After initialization, append the map object to the element.
2. Set the rendered map element to the content of Tooltip component. Refer to the following sample.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/tooltip/iframe-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/tooltip/iframe-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/iframe-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/iframe-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/iframe-cs1" %}

## Define Tooltip open mode property

The open mode property of Tooltip can be defined on a target that is hovering, focusing, or clicking.
Tooltip component have the following types of open mode:
    * Auto
    * Hover
    * Click
    * Focus
    * Custom

** Auto **

Tooltip appears when you hover over the target or when the target element receives the focus.

** Hover **

Tooltip appears when you hover over the target.

** Click **

Tooltip appears when you click a target element.

** Focus **

Tooltip appears when you focus (say through tab key) on a target element.

** Custom **

Tooltip is not triggered by any default action. So, bind your own events and use either open or close public methods.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/tooltip/open-property-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/tooltip/open-property-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/open-property-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/open-property-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/open-property-cs1" %}

## Customize tooltip

The arrow of the Tooltip can be customized as needed by customizing CSS in the sample-side.
The EJ2 Tooltip component is achieved through CSS3 format and positioned the tip arrow according to the Tooltip positions like `TopCenter`, `BottomLeft`, `RightTop`, and more.

Here, the tip arrow is customized as Curved Tooltip and Bubble tooltip.

** Curved tip **

The content for the tip pointer arrow has been added. To customize the curved tip arrow, override the following CSS class of tip arrow.

```ts
 <TooltipComponent content='Tooltip Content' cssClass='curvetips e-tooltip-css'>
    </TooltipComponent>
```

```css

  .e-arrow-tip-outer.e-tip-bottom,
  .e-arrow-tip-outer.e-tip-top {
        border-left: none !important;
        border-right: none !important;
        border-top: none !important;
  }
  .e-arrow-tip.e-tip-top {
        transform: rotate(170deg);
  }

```

** Bubble tip **

The two `divs`(inner div and outer div) have been added to achieve the bubble tip arrow. To customize the bubble tip arrow, override the following CSS class of tip arrow.

```ts
  <TooltipComponent content='Tooltip Content' cssClass='bubbletip e-tooltip-css'>
  </TooltipComponent>
```

```css
    .e-arrow-tip-outer.e-tip-bottom, .e-arrow-tip-outer.e-tip-top
    {
      border-radius: 50px;
      height: 10px;
      width: 10px;
    }

    .e-arrow-tip-inner.e-tip-bottom, .e-arrow-tip-inner.e-tip-top
    {
      border-radius: 50px;
      height: 10px;
      width: 10px;
    }
```

These tip arrow customizations have been achieved through CSS changes in the sample level. The Tooltip position can be changed by using the radio button click event.

The arrow tip pointer can also be disabled by using the [showTipPointer](https://ej2.syncfusion.com/react/documentation/api/tooltip/#showtippointer) property in a tooltip.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/tooltip/custom-arrow-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/tooltip/custom-arrow-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/custom-arrow-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/custom-arrow-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/custom-arrow-cs1" %}

## Display Tooltip on SVG and canvas elements

Tooltip can be displayed on both SVG and Canvas elements. You can directly attach the `<svg>` or `<canvas>` elements to show tooltips on data visualization elements.

** SVG **

Create the SVG square element and refer to the following code snippet to render the Tooltip on SVG square.

```ts
  <TooltipComponent content='SVG Square' cssClass='e-tooltip-css' target= '#square'>
  </TooltipComponent>
```

** Canvas **

Create the canvas circle element and refer to the following code snippet to render the Tooltip on Canvas circle.

```ts
<TooltipComponent content='Canvas Circle' cssClass='e-tooltip-css' target= '#circle'>
  </TooltipComponent>
```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/tooltip/svg-canvas-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/tooltip/svg-canvas-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/svg-canvas-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/svg-canvas-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/svg-canvas-cs1" %}

## Create and show Tooltip on multiple targets

Tooltip can be created and shown on multiple targets within a container by defining the specific target elements to the target property. So, the Tooltip is initialized only on matched targets within a container.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/tooltip/dynamic-tooltip-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/tooltip/dynamic-tooltip-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/dynamic-tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/dynamic-tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight json tabtitle="tooltip.json" %}
{% include code-snippet/tooltip/dynamic-tooltip-cs1/app/tooltip.json %}
{% endhighlight %}
{% highlight js tabtitle="tooltip.jsx" %}
{% include code-snippet/tooltip/dynamic-tooltip-cs1/app/tooltip.jsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/dynamic-tooltip-cs1" %}
