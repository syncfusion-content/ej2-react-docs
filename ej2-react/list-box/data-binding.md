---
layout: post
title: Data binding in React List box component | Syncfusion
description: Learn here all about Data binding in Syncfusion React List box component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in React List box component

The ListBox loads data from local or remote sources using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/list-box/#datasource) property. It supports both `array` and `DataManager` data types.

To get started quickly with Data Binding, watch this video:

{% youtube "https://www.youtube.com/watch?v=AZPWB2o_cdI" %}

| Fields | Type | Description |
|------|------|-------------|
| [`text`](https://ej2.syncfusion.com/react/documentation/api/list-box/fieldSettingsModel/#text) |  `string` | Specifies the display text of each list item. |
| [`value`](https://ej2.syncfusion.com/react/documentation/api/list-box/fieldSettingsModel/#value) |  `string` | Specifies the hidden data value mapped to each list item that should contain a unique value. |
| [`groupBy`](https://ej2.syncfusion.com/react/documentation/api/list-box/fieldSettingsModel/#groupby) |  `string` | Specifies the category under which the list item has to be grouped. |
| [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/list-box/fieldSettingsModel/#iconcss) |  `string` | Specifies the iconCss class that needs to be mapped. |
| [`htmlAttributes`](https://ej2.syncfusion.com/react/documentation/api/list-box/fieldSettingsModel/#htmlattributes) |  `string` | Allows additional attributes to configure the elements in various ways to meet the criteria. |

> When binding complex data to the ListBox, fields should be mapped correctly. Otherwise, the selected item remains undefined.

## Local Data

Local data can be represented by the following ways as described below.

### Array of string

The ListBox supports loading primitive data arrays such as strings or numbers. For primitive data, both the value and text fields represent the same data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/basic-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/basic-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/basic-cs2" %}

### Array of object

The ListBox generates list items from an array of object data. Map the appropriate columns to the [`fields`](https://ej2.syncfusion.com/react/documentation/api/list-box/#fields) property.

In the following example, the `id` and `sports` columns are mapped to the `value` and `text` fields respectively.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/basic-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/basic-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/basic-cs3" %}

### Array of complex object

The ListBox generates list items from complex nested data. Map the appropriate nested columns to the [`fields`](https://ej2.syncfusion.com/react/documentation/api/list-box/#fields) property.

In the following example, the `sports.Name` column is mapped to the `text` field.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/basic-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/basic-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/basic-cs4" %}

## Remote Data

The ListBox supports retrieval of data from remote data services with the help of [`DataManager`](https://ej2.syncfusion.com/react/documentation/data/getting-started) component.

The following sample displays the employee names from `Employee` table.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/basic-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/basic-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/basic-cs5" %}