---
layout: post
title: Position in React Tooltip component | Syncfusion
description: Learn here all about Position in Syncfusion React Tooltip component of Syncfusion Essential JS 2 and more.
control: Position 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Position in React Tooltip component

Tooltips can be positioned at 12 static locations around the target. On initializing the Tooltip, you can set the position property with any one of the following values:

* `TopLeft`
* `TopCenter`
* `TopRight`
* `BottomLeft`
* `BottomCenter`
* `BottomRight`
* `LeftTop`
* `LeftCenter`
* `LeftBottom`
* `RightTop`
* `RightCenter`
* `RightBottom`

> By default, Tooltip is placed at the `TopCenter` of the target element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/position-default-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/position-default-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/tooltip/position-default-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tooltip/position-default-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/position-default-cs1" %}

## Tip pointer positioning

The Tooltip pointer can be attached or detached from the Tooltip by using the [`showTipPointer`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#showtippointer) property.
Pointer positions can be adjusted using the [`tipPointerPosition`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#tippointerposition) property, which can be assigned one of the following values:

* `Auto`
* `Start`
* `Middle`
* `End`

The following code example illustrates how to set the pointer to the start position of the Tooltip.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/position-tip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/position-tip-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/tooltip/position-tip-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tooltip/position-tip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/position-tip-cs1" %}

By default, tip pointers are auto adjusted so that the arrow does not point outside the target element.

## Dynamic positioning

The Tooltip and its tip pointer can be positioned dynamically based on the target's location. This can be achieved by using the [`refresh`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#refresh) method, which auto adjusts the Tooltip over the target.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/dragabble-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/dragabble-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tooltip/dragabble-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/dragabble-cs1" %}

## Mouse trailing

Tooltips can be positioned relative to the mouse pointer. This behavior can be enabled or disabled by using the [`mouseTrail`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#mousetrail) property.
By default, it is set to `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/mouse-trail-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/mouse-trail-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/tooltip/mouse-trail-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tooltip/mouse-trail-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/mouse-trail-cs1" %}

> When mouse trailing option is enabled, the tip pointer position gets auto adjusted based on the target, and other position values like start, end, and middle are not applied (to prevent the pointer from moving out of target).

## Setting offset values

Offset values are set to specify the distance between the target and Tooltip element. [`offsetX`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#offsetx) and [`offsetY`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#offsety) properties are used to specify the offset left and top values.

* [`offsetX`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#offsetx) specifies the distance between the target and Tooltip element on the X-axis.
* [`offsetY`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#offsety) specifies the distance between the target and Tooltip element on Y axis.

The following code example illustrates how to set offset values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/offset-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/offset-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/tooltip/offset-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tooltip/offset-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/offset-cs1" %}

> By default, collision is handled automatically. When a collision is detected, the Tooltip adjusts horizontally and flips vertically to fit within the visible area.
