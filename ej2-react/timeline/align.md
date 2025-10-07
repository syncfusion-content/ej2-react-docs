---
layout: post
title: Alignment in React Timeline component | Syncfusion
description:  Checkout and learn about Alignment with Syncfusion React Timeline component of Syncfusion Essential JS 2 and more.
control: Timeline
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Alignment in React Timeline component

The Timeline component allows you to control the positioning of content using the [align](https://ej2.syncfusion.com/react/documentation/api/timeline/#align) property, which accepts values `Before`, `After`, `Alternate`, or `AlternateReverse`. When both content and oppositeContent are configured in the `ItemDirective`, the oppositeContent will be displayed parallel to the main content, creating a balanced layout on opposite sides of the timeline.

## Before

The [Before](https://ej2.syncfusion.com/react/documentation/api/timeline/timelineAlign/) alignment positions content strategically based on orientation. For `horizontal` orientation, the main content appears at the top with oppositeContent at the bottom. For `vertical` orientation, content is positioned on the left side while oppositeContent appears on the right side.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/align/before/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/align/before/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/align/before/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/align/before/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/align/before" %}

## After

The [After](https://ej2.syncfusion.com/react/documentation/api/timeline/timelineAlign/) alignment reverses the content positioning compared to Before alignment. For `horizontal` orientation, the main content is placed at the bottom with oppositeContent at the top. For `vertical` orientation, content appears on the right side while oppositeContent is positioned on the left side.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/align/after/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/align/after/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/align/after/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/align/after/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/align/after" %}

## Alternate

The [Alternate](https://ej2.syncfusion.com/react/documentation/api/timeline/timelineAlign/) alignment creates a dynamic zigzag pattern where timeline items switch positions alternately. This arrangement provides visual variety and works effectively for showcasing parallel events or comparisons, regardless of whether the Timeline orientation is horizontal or vertical.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/align/alternate/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/align/alternate/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/align/alternate/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/align/alternate/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/align/alternate" %}

## Alternate reverse

The [AlternateReverse](https://ej2.syncfusion.com/react/documentation/api/timeline/timelineAlign/) alignment creates the opposite pattern of Alternate alignment, where timeline items are arranged in reverse alternating order. This provides another visual variation for displaying data with an inverted alternating pattern, maintaining effectiveness across both Timeline orientations.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/align/alternate-reverse/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/align/alternate-reverse/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/align/alternate-reverse/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/align/alternate-reverse/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/align/alternate-reverse" %}
