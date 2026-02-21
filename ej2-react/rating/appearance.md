---
layout: post
title: Appearance with React Rating component | Syncfusion
description:  Learn here all about Appearance in Syncfusion React Rating component of Syncfusion Essential JS 2 and more.
control: Appearance
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in React Rating Component

You can also customize the appearance of rating component.

## Items Count

You can specify the number of rating items using the [`itemsCount`](https://ej2.syncfusion.com/react/documentation/api/rating/#itemscount) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/appearance/items-count-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/appearance/items-count-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/appearance/items-count-cs1" %}

## Disabled

Disable the rating component by setting the [`disabled`](https://ej2.syncfusion.com/react/documentation/api/rating/#disabled) property to `true`. When disabled, the rating component prevents user interaction and may display a different visual appearance than an enabled component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/appearance/disabled-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/appearance/disabled-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/appearance/disabled-cs1" %}

## Visible

Use the [`visible`](https://ej2.syncfusion.com/react/documentation/api/rating/#visible) property to control the visibility of the rating component. When set to `true`, the component is visible on the page. When set to `false`, the component is hidden.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/appearance/visible-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/appearance/visible-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/appearance/visible-cs1" %}

## Read only

You can use the [`readOnly`](https://ej2.syncfusion.com/react/documentation/api/rating/#readonly) property of the rating component to make the component non-interactive and prevent the user from changing the rating value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/appearance/read-only-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/appearance/read-only-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/appearance/read-only-cs1" %}

## CssClass

You can customize the appearance of the rating component, such as by changing its colors, fonts, sizes, or other visual aspects by using the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/rating/#cssclass) property.

### Changing rating symbol border color

Change the rating icon border color by using the `cssClass` property and setting the `text-stroke` CSS property of `.e-rating-icon` to your desired color.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/appearance/border-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/appearance/border-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/rating/appearance/border-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/appearance/border-cs1" %}

### Changing rated/un-rated symbol fill color

You can customize the fill colors of rated and un-rated icons in the rating component using the `cssClass` property and the `linear-gradient` color-stops in the `background` CSS property of `.e-rating-icon`. The **first** color-stop defines the rated fill color and the **second** defines the un-rated fill color.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/appearance/fill-color-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/appearance/fill-color-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/rating/appearance/fill-color-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/appearance/fill-color-cs1" %}

This will customize the rated fill color to `#ffe814` and un-rated fill color to `#d8d7d4`. `--rating-value` in the linear-gradient provides the current value of the rating item.

### Changing the item spacing

Change the spacing between rating items by using the `cssClass` property and setting the `margin`/`padding` CSS property of `.e-rating-item-container` to your desired size.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/appearance/spacing-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/appearance/spacing-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/rating/appearance/spacing-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/appearance/spacing-cs1" %}

## Changing icon using CssClass

Change the rating item icon by using the `cssClass` property and setting the `content` CSS property of `.e-icons.e-star-filled:before` to your desired font icon.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/appearance/icon-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/appearance/icon-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/rating/appearance/icon-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/appearance/icon-cs1" %}
