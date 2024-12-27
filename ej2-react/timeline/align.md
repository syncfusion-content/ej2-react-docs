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

You can display the Timeline content `Before`, `After`, `Alternate` and `AlternateReverse` by using the [align](https://ej2.syncfusion.com/react/documentation/api/timeline/#align) property. The oppositeContent will be displayed parallel to the content when configured in the `ItemDirective`.

## Before

In [Before](https://ej2.syncfusion.com/react/documentation/api/timeline/timelineAlign/) alignment, for `horizontal` orientation the item content is placed at the top and oppositeContent at the bottom whereas in `vertical`, the content to the left and oppositeContent to the right.

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

In [After](https://ej2.syncfusion.com/react/documentation/api/timeline/timelineAlign/) alignment, for `horizontal` orientation the item content is placed at the bottom and oppositeContent at the top whereas in `vertical`, the content to the right and oppositeContent to the left.

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

In [Alternate](https://ej2.syncfusion.com/react/documentation/api/timeline/timelineAlign/) alignment, the item content are arranged alternatively regardless of the Timeline orientation.

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

In [AlternateReverse](https://ej2.syncfusion.com/react/documentation/api/timeline/timelineAlign/) alignment, the item content are arranged in reverse alternate regardless of the Timeline orientation.

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
