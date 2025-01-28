---
layout: post
title: Setting dimension in React Tooltip component | Syncfusion
description: Learn here all about Setting dimension in Syncfusion React Tooltip component of Syncfusion Essential JS 2 and more.
control: Setting dimension 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Setting dimension in React Tooltip component

## Height and width

The Tooltip can either be assigned auto height and width values or specific pixel values. The [`width`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#height) properties are used to set the outer dimension of the Tooltip element. The default value for both the properties is `auto`. It also accepts string and number values in pixels.

The following sample explains how to set dimensions for the Tooltip.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/height-width-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/height-width-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/tooltip/height-width-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tooltip/height-width-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/height-width-cs1" %}

### Scroll mode

When a specific pixel value is set for the [`height`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#height) property and the Tooltip content exceeds this height, the scrolling mode is enabled.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/scroll-mode-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/scroll-mode-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/tooltip/scroll-mode-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tooltip/scroll-mode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/scroll-mode-cs1" %}

> The scrolling mode is best observed when the Tooltip's sticky mode is enabled. To enable this, set the [`isSticky`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#issticky) property to `true`.
