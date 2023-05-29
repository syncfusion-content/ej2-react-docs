---
layout: post
title: User interaction in React Linear gauge component | Syncfusion
description: Learn here all about User interaction in Syncfusion React Linear gauge component of Syncfusion Essential JS 2 and more.
control: User interaction 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# User interaction in React Linear gauge component

<!-- markdownlint-disable MD013 -->

## Tooltip

<!-- markdownlint-disable MD036 -->

Linear Gauge displays the details about a pointer value through [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tooltipSettings/), when the mouse hovers over the pointer. To enable the tooltip, set [`enable`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tooltipSettings/#enable) property as **true** and inject **GaugeTooltip** into **services**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/user-interaction-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/user-interaction-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/user-interaction-cs1" %}

<!-- markdownlint-disable MD013 -->

### Tooltip format

<!-- markdownlint-disable MD013 -->
Tooltip in the Linear Gauge control can be formatted using the [`format`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tooltipSettings/#format) property in [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tooltipSettings/). It is used to render the tooltip in certain format or to add a user-defined unit in the tooltip. By default, the tooltip shows the pointer value only. In addition to that, more information can be added in the tooltip. For example, the format **{value}km** shows pointer value with kilometer unit in the tooltip.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/user-interaction-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/user-interaction-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/user-interaction-cs2" %}

### Tooltip Template

The HTML elements rendered in the tooltip of the Linear Gauge using the [`template`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tooltipSettings/#template) property of the [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tooltipSettings/). The **${value}** can be used as placeholders in the HTML element to display the pointer values of the corresponding axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/user-interaction-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/user-interaction-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/user-interaction-cs3" %}

### Customize the appearance of the tooltip

The tooltip can be customized using the following properties in [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tooltipSettings/).

* [`fill`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tooltipSettings/#fill) - To fill the color for tooltip.
* [`enableAnimation`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tooltipSettings/#enableanimation) - To enable or disable the tooltip animation.
* [`border`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tooltipSettings/#border) - To set the border color and width of the tooltip.
* [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tooltipSettings/#textstyle) - To customize the style of the text in tooltip.
* [`showAtMousePosition`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tooltipSettings/#showatmouseposition) - To show the tooltip at the mouse position.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/user-interaction-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/user-interaction-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/user-interaction-cs4" %}

### Positioning the tooltip

The tooltip is positioned at the **End** of the pointer. To change the position of the tooltip at the start, or center of the pointer, set the [`position`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tooltipSettings/#position) property to **Start** or **Center**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/user-interaction-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/user-interaction-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/user-interaction-cs5" %}

## Pointer Drag

To drag either marker or bar pointer to the desired axis value, set the [`enableDrag`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/pointer/#enabledrag) property as **true** in the [`PointerDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/pointerModel/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/user-interaction-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/user-interaction-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/user-interaction-cs6" %}