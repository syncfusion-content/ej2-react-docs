---
layout: post
title: Labels in React Range navigator component | Syncfusion
description: Learn here all about Labels in Syncfusion React Range navigator component of Syncfusion Essential JS 2 and more.
control: Labels 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Labels in React Range navigator component

## Multilevel labels

The multi-level labels for the Range Selector can be enabled by setting the [`enableGrouping`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/#enablegrouping) property to **true**. This is restricted to the DateTime axis alone.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/lightweight-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/lightweight-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/lightweight-cs1" %}

## Grouping

The multi-level labels can be grouped using the [`groupBy`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/#groupby) property with the following interval types:

* Auto
* Years
* Quarter
* Months
* Weeks
* Days
* Hours
* Minutes
* Seconds

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/lightweight-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/lightweight-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/lightweight-cs2" %}

## Smart labels

The [`labelIntersectAction`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/#labelintersectaction) property is used to avoid overlapping of labels. The following code sample shows the setting of [`labelIntersectAction`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/#labelintersectaction) property to **Hide**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs22/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs22" %}

## Label positioning

By default, the labels can be placed outside the Range Selector. It can also be placed inside the Range Selector using the [`labelPosition`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/#labelposition) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs23/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs23/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs23" %}

## Labels customization

The font size, color, family, etc. can be customized using the [`labelStyle`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/#labelstyle) setting.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/lightweight-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/lightweight-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/lightweight-cs3" %}