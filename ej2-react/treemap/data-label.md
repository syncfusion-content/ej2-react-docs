---
layout: post
title: Data Label in React TreeMap | Syncfusion
description: Learn how to show and format data labels on items and groups in the Syncfusion React TreeMap with labelPath and labelFormat.
control: Data label 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data Label in React TreeMap

Data Labels are used to identify the name of items or groups in the TreeMap component. Data Labels will be shown by specifying the data source properties in the [`labelPath`](https://ej2.syncfusion.com/react/documentation/api/treemap/leafItemSettingsModel#labelpath) of the [`leafItemSettings`](https://ej2.syncfusion.com/react/documentation/api/treemap#leafitemsettings).

## Format

Customize the labels for each item using the [`labelFormat`](https://ej2.syncfusion.com/react/documentation/api/treemap/leafItemSettingsModel#labelformat) property in the [`leafItemSettings`](https://ej2.syncfusion.com/react/documentation/api/treemap#leafitemsettings).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/code-path/datalabel-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/code-path/datalabel-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/datalabel-cs1" %}

## Template

The template supports customizing labels of each leaf node using the [`labelTemplate`](https://ej2.syncfusion.com/react/documentation/api/treemap/leafItemSettingsModel#labeltemplate) property. It uses Essential<sup style="font-size:70%">&reg;</sup> JS2 template engine to render elements and the position of templates can be customize using the [`templatePosition`](https://ej2.syncfusion.com/react/documentation/api/treemap/leafItemSettingsModel#templateposition) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/code-path/datalabel-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/code-path/datalabel-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/datalabel-cs2" %}

## InterSectAction

When the label size in each item exceeds the actual size, use the [`interSectAction`](https://ej2.syncfusion.com/react/documentation/api/treemap/leafItemSettingsModel#intersectaction) property in the [`leafItemSettings`](https://ej2.syncfusion.com/react/documentation/api/treemap#leafitemsettings) to customize the labels.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/code-path/datalabel-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/code-path/datalabel-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/datalabel-cs3" %}