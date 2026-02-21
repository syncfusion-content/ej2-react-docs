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

The MultiColumn ComboBox supports grouping nested elements by category using the [groupBy](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/fieldSettingsModel/#groupby) property. Map the category for each list item using the groupBy field in the data table. Group headers display as fixed headers and update dynamically as you scroll through the popup list.

## Group By

In the following example, countries are grouped by category using the [groupBy](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/fieldSettingsModel/#groupby) field:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multicolumn-combobox/grouping/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multicolumn-combobox/grouping/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/grouping" %}
