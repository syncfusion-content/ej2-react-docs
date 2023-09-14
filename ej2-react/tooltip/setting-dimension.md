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

The Tooltip can either be assigned auto height and width values or specific pixel values. The `width` and `height` properties are used to set the outer dimension of the Tooltip element. The default value for both the properties is `auto`. It also accepts string and number values in pixels.

The following sample explains how to set dimensions for the Tooltip.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/height-width-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/height-width-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/height-width-cs1" %}

### Scroll mode

When `height` is specified with a certain pixel value and the Tooltip content overflows, the scrolling mode gets enabled.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/scroll-mode-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/scroll-mode-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/scroll-mode-cs1" %}

> The scrolling mode can best be seen when the sticky mode of the Tooltip is enabled. To enable sticky mode, set the `isSticky` property to true.
