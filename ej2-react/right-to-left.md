---
layout: post
title: Right-to-left support for React | Syncfusion
description: Learn how to enable Right-to-Left (RTL) support for Syncfusion React components to support languages like Arabic and Hebrew.
control: Right to left 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Right-To-Left

Right-to-Left (RTL) support enables Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components to display text and layouts for languages such as Arabic, Hebrew, and Persian. To enable RTL across all components, set the `enableRtl` property to `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/right-to-left-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/right-to-left-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/right-to-left-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/right-to-left-cs2" %}

## Enable RTL for an individual component

To enable RTL for an individual control, set the `enableRtl` property in its options. For example, the following snippet enables RTL for a ListView control:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/individual-rtl-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/individual-rtl-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/individual-rtl-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/individual-rtl-cs2" %}