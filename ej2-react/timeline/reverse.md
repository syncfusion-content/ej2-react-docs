---
layout: post
title: Reverse in React Timeline component | Syncfusion
description:  Checkout and learn about Reverse with Syncfusion React Timeline component of Syncfusion Essential JS 2 and more.
control: Timeline
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Reverse in React Timeline component

Use the [reverse](https://ej2.syncfusion.com/react/documentation/api/timeline#reverse) property to invert the display order of Timeline items. Setting `reverse` to `true` makes the most recent or last item in the data source appear first, which is useful for activity feeds, audit logs, or any timeline where newest items should be prominent.

When the reverse property is enabled, it works seamlessly with all alignment options (`Before`, `After`, `Alternate`, `AlternateReverse`) and orientations (`Horizontal`, `Vertical`).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/reverse/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/reverse/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/reverse/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/reverse/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/reverse" %}