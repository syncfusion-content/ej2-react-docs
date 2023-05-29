---
layout: post
title: Fancy tooltip customization in React Tooltip component | Syncfusion
description: Learn here all about Fancy tooltip customization in Syncfusion React Tooltip component of Syncfusion Essential JS 2 and more.
control: Fancy tooltip customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Fancy tooltip customization in React Tooltip component

The arrow of the tooltip can be customized as needed by customizing CSS in the sample-side.
The EJ2 tooltip component is achieved through CSS3 format and positioned the tip arrow according to the tooltip positions like `TopCenter`, `BottomLeft`, `RightTop`, and more.

Here, the tip arrow is customized as Curved tooltip and Bubble tooltip.

## Curved tip

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

## Bubble tip

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

These tip arrow customizations have been achieved through CSS changes in the sample level. The tooltip position can be changed by using the radio button click event.

The arrow tip pointer can also be disabled by using the [`showTipPointer`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#showtippointer) property in a tooltip.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/tooltip/custom-arrow-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/tooltip/custom-arrow-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/custom-arrow-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/custom-arrow-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/custom-arrow-cs2" %}
