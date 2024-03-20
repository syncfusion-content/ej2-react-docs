---
layout: post
title: Items in React Timeline component | Syncfusion
description:  Checkout and learn about Items with Syncfusion React Timeline component of Syncfusion Essential JS 2 and more.
control: Timeline
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Items in React Timeline component

The Timeline items can be added by using the [items](https://ej2.syncfusion.com/react/documentation/api/timeline#items) property. Each item can be configured with options such as `content`, `oppositeContent`, `dotCss`, `disabled` and `cssClass`.

## Adding content

You can define the item content using the [content](https://ej2.syncfusion.com/react/documentation/api/timeline/timelineItem/#content) property.

### String content

You can define string content for the Timeline items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/items/content/string-based/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/items/content/string-based/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/items/content/string-based/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/items/content/string-based" %}

## Adding opposite content

You can add additional information to each Timeline item, by using the [oppositeContent](https://ej2.syncfusion.com/react/documentation/api/timeline/timelineItem/#oppositecontent) property which is positioned opposite to the item content.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/items/opposite-content/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/items/opposite-content/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/items/opposite-content" %}

## Dot item

You can define CSS class to set icons, background colors, or images to personalize the appearance of dots associated with each Timeline item by using the [dotCss](https://ej2.syncfusion.com/react/documentation/api/timeline/timelineItem/#dotcss) property.

### Adding icons

You can define the CSS class to show the icon for each item using the `dotCss` property.

### Adding images

You can include images for the Timeline items using the `dotCss` property, by setting the CSS `background-image` property.

### Adding text

You can display text for the Timeline items using the `dotCss` property, by adding text to the CSS `content` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/items/dot-item/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/items/dot-item/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/items/dot-item/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/items/dot-item" %}

## Disabling items

You can use the [disabled](https://ej2.syncfusion.com/react/documentation/api/timeline/timelineItem/#disabled) property to disable an item when set to `true`. By default, the value is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/items/disabled/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/items/disabled/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/items/disabled" %}

## Css class

You can customize the appearance of the Timeline item by specifying a custom CSS class using the [cssClass](https://ej2.syncfusion.com/react/documentation/api/timeline/timelineItem/#cssclass) property.
