---
layout: post
title: Appearance in React Rating | Syncfusion
description: Customize the React Rating count, symbol size, and spacing with the itemsCount property and CSS for a tailored star layout.
control: Appearance
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in React Rating

You can also customize the appearance of React Rating component.

## Number of items to display

You can specify the number of React Rating items using the [`itemsCount`](https://ej2.syncfusion.com/react/documentation/api/rating/index-default#itemscount) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/appearance/items-count-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/appearance/items-count-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/appearance/items-count-cs1" %}

## Setting disabled state

Disable the React Rating component by setting the [`disabled`](https://ej2.syncfusion.com/react/documentation/api/rating/index-default#disabled) property to `true`. When disabled, the React Rating component prevents user interaction and may display a different visual appearance than an enabled component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/appearance/disabled-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/appearance/disabled-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/appearance/disabled-cs1" %}

## Show or hide the React Rating

Use the [`visible`](https://ej2.syncfusion.com/react/documentation/api/rating/index-default#visible) property to control the visibility of the rating component. When set to `true`, the component is visible on the page. When set to `false`, the component is hidden.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/appearance/visible-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/appearance/visible-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/appearance/visible-cs1" %}

## Make the React Rating non-interactive

You can use the [`readOnly`](https://ej2.syncfusion.com/react/documentation/api/rating/index-default#readonly) property of the rating component to make the component non-interactive and prevent the user from changing the rating value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/appearance/read-only-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/appearance/read-only-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/appearance/read-only-cs1" %}

## Customizing the appearance

You can customize the appearance of the React Rating component, such as by changing its colors, fonts, sizes, or other visual aspects by using the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/rating/index-default#cssclass) property.

### Changing React Rating symbol border color

Change the React Rating icon border color by using the `cssClass` property and setting the `text-stroke` CSS property of `.e-rating-icon` to your desired color.

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

You can customize the fill colors of rated and un-rated icons in the React Rating component using the `cssClass` property and the `linear-gradient` color-stops in the `background` CSS property of `.e-rating-icon`. The **first** color-stop defines the rated fill color and the **second** defines the un-rated fill color.

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

Change the spacing between React Rating items by using the `cssClass` property and setting the `margin`/`padding` CSS property of `.e-rating-item-container` to your desired size.

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

### Changing icon using CssClass

Change the React Rating item icon by using the `cssClass` property and setting the `content` CSS property of `.e-icons.e-star-filled:before` to your desired font icon.

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
