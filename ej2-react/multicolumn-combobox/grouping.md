---
layout: post
title: Grouping in React MultiColumn Combobox component | Syncfusion
description: Checkout and learn about Grouping in React MultiColumn Combobox component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: MultiColumn Combobox
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in React MultiColumn ComboBox component

The MultiColumn ComboBox supports wrapping nested elements into a group based on different categories by using the [groupBy](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/fieldSettingsModel/#groupby) property. The category of each list item can be mapped through the groupBy field in the data table. The group header are displayed as fixed headers. The fixed group header content is updated dynamically on scrolling the popup list with its category value.

## Group By

In the following sample, countries are grouped according on its category using [groupBy](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/fieldSettingsModel/#groupby) field.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multicolumn-combobox/grouping/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multicolumn-combobox/grouping/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/grouping" %}
