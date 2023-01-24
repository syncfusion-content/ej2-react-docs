---
layout: post
title: Levels in React Treemap component | Syncfusion
description: Learn here all about Levels in Syncfusion React Treemap component of Syncfusion Essential JS 2 and more.
control: Levels 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Levels in React Treemap component

TreeMap supports **n** number of levels and each level is separated by using the [`groupPath`](https://ej2.syncfusion.com/react/documentation/api/treemap/levelSettingsModel/#grouppath) property.

<!-- markdownlint-disable MD036 -->

## Group path

The [`groupPath`](https://ej2.syncfusion.com/react/documentation/api/treemap/levelSettingsModel/#grouppath) property is used to separate each level of the TreeMap by specifying the property from the data source.

In the following example, three levels are added and each level is configured using the [`groupPath`](https://ej2.syncfusion.com/react/documentation/api/treemap/levelSettingsModel/#grouppath) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/levels-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/levels-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/levels-cs1" %}

<!-- markdownlint-disable MD036 -->

## Group gap

The [`groupGap`](https://ej2.syncfusion.com/react/documentation/api/treemap/levelSettingsModel/#groupgap) property is used to separate an item from each group or another item to differentiate the levels mentioned in the TreeMap.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/levels-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/levels-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/levels-cs2" %}

<!-- markdownlint-disable MD036 -->

## Header format and Alignment

Customize header using the [`headerFormat`](https://ej2.syncfusion.com/react/documentation/api/treemap/levelSettingsModel/#headerformat) property in which fields are mapping from the dataSource and align header using the [`headerAlignment`](https://ej2.syncfusion.com/react/documentation/api/treemap/levelSettingsModel/#headeralignment) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/levels-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/levels-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/levels-cs3" %}

## Header height and style

Customize the font color, family, weight, opacity and size using the [`headerStyle`](https://ej2.syncfusion.com/react/documentation/api/treemap/levelSettingsModel/#headerstyle). Based on the font settings, the header height is given using the [`headerHeight`](https://ej2.syncfusion.com/react/documentation/api/treemap/levelSettingsModel/#headerheight) property in [`levels`](https://ej2.syncfusion.com/react/documentation/api/treemap/#levels).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/levels-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/levels-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/levels-cs4" %}

## Header template and position

The TreeMap header supports to customize header of each item using the [`headerTemplate`](https://ej2.syncfusion.com/react/documentation/api/treemap/levelSettingsModel/#headertemplate) property. It uses Essential JS2 Template engine to render the elements. You can position the template using the [`templatePosition`](https://ej2.syncfusion.com/react/documentation/api/treemap/levelSettingsModel/#templateposition) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/levels-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/levels-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/levels-cs5" %}