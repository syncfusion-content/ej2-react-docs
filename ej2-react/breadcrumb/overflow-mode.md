---
layout: post
title: Overflow mode in React Breadcrumb component | Syncfusion
description: Learn here all about Overflow mode in Syncfusion React Breadcrumb component of Syncfusion Essential JS 2 and more.
control: Overflow mode 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Overflow mode in React Breadcrumb component

In the Breadcrumb component, [`maxItems`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#maxitems) and [`overflowMode`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#overflowmode) properties were used to limit the number of breadcrumb items to be displayed.

In the following example, the [`maxItems`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#maxitems) is set as 3 with overflowMode as Default. To prevent breadcrumb item navigation, the [`enableNavigation`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#enablenavigation) property has been set to false in the Breadcrumb component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/overflow-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/overflow-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/overflow-cs1" %}

The following overflow modes are available in the Breadcrumb component.

* Collapsed
* Menu
* Wrap
* Scroll
* Hidden
* None

## Collapsed

Collapsed mode shows the first and last Breadcrumb items and hides the remaining items with a collapsed icon. When the collapsed icon is clicked, all items become visible and navigable.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/overflow-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/overflow-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/overflow-cs2" %}

## Menu

Menu mode shows the number of Breadcrumb items that can be accommodated within the container space and creates a submenu with the remaining items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/overflow-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/overflow-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/overflow-cs3" %}

## Wrap

Wrap mode wraps the items to multiple lines when the Breadcrumb’s width exceeds the container space.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/overflow-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/overflow-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/overflow-cs4" %}

## Scroll

Scroll mode shows an HTML scroll bar when the Breadcrumb’s width exceeds the container space.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/overflow-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/overflow-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/overflow-cs5" %}

## Hidden

Hidden mode shows the maximum number of items possible in the container space and hides the remaining items. Clicking on a previous item will make the hidden item visible.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/overflow-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/overflow-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/overflow-cs6" %}

## None

None mode shows all the items on a single line.
