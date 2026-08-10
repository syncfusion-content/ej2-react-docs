---
layout: post
title: Position in React AppBar | Syncfusion
description: Anchor the Syncfusion React AppBar to the top or bottom of the page, or make it sticky while content scrolls, with `position` and `isSticky`.
control: Position 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Position in React AppBar

The position of the AppBar can be set using the [position](https://ej2.syncfusion.com/react/documentation/api/appbar#position) and [isSticky](https://ej2.syncfusion.com/react/documentation/api/appbar#issticky) property. The AppBar provides the following options for setting its position:

* Top AppBar
* Bottom AppBar
* Sticky AppBar

## Top AppBar

The top AppBar is the default one in which it positions the AppBar at the top of the content.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/appbar/top-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/appbar/top-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/appbar/top-cs1" %}

## Bottom AppBar

This position can be set to the AppBar by setting `Bottom` to the property [position](https://ej2.syncfusion.com/react/documentation/api/appbar#position). The bottom AppBar positions the AppBar at the bottom of the content.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/appbar/bottom-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/appbar/bottom-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/appbar/bottom-cs1" %}

## Sticky AppBar

This position can be set to the AppBar by setting `true` to the property [isSticky](https://ej2.syncfusion.com/react/documentation/api/appbar#issticky). AppBar will be sticky while scrolling the AppBar content.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/appbar/sticky-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/appbar/sticky-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/appbar/sticky-cs1" %}