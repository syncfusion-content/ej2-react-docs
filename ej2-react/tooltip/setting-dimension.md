---
layout: post
title: Setting Dimension in React Tooltip | Syncfusion
description: Set the React Tooltip width and height in pixels or auto to control the outer dimensions, with optional scroll mode for tall content.
control: Setting dimension 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Setting Dimension in React Tooltip

## Height and width

The React Tooltip height and width can be set to auto or specific pixel values. The [`width`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#height) properties set the outer dimensions of the React Tooltip element. Both properties default to `auto` and accept string and number values in pixels.

The following sample explains how to set dimensions for the React Tooltip.

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

> The scrolling mode is best observed when the React Tooltip's sticky mode is enabled. To enable this, set the [`isSticky`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#issticky) property to `true`.
