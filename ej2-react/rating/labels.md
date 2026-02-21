---
layout: post
title: Labels with React Rating component | Syncfusion
description:  Learn here all about Labels in Syncfusion React Rating component of Syncfusion Essential JS 2 and more.
control: Labels
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Labels in React Rating Component

Display a label showing the current rating value by setting the [`showLabel`](https://ej2.syncfusion.com/react/documentation/api/rating/#showlabel) property to `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/label/showlabel-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/label/showlabel-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/label/showlabel-cs1" %}

## Label position

Position the label on any side of the rating using the [`labelPosition`](https://ej2.syncfusion.com/react/documentation/api/rating/#labelposition) property.

The following label positions are supported:

* Top: Label appears above the rating.
* Bottom: Label appears below the rating.
* Left: Label appears to the left of the rating.
* Right: Label appears to the right of the rating.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/label/label-positions-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/label/label-positions-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/label/label-positions-cs1" %}

## Label template

Customize the label using the [`labelTemplate`](https://ej2.syncfusion.com/react/documentation/api/rating/#labeltemplate) tag directive. The current rating value is passed as the `value` property in the template context, allowing you to display dynamic information about the rating.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/label/label-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/label/label-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/label/label-template-cs1" %}
