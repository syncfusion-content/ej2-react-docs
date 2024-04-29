---
layout: post
title: Convert complex JSON and assign to pivot table | Syncfusion
description: Learn here all about how to convert complex JSON to flat JSON and assign it to the pivot table in Syncfusion component and more.
platform: ej2-react
control: Convert complex JSON to flat JSON and assign it to the pivot table 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Convert complex JSON and assign to pivot table in component

By default, flat JSON can only bind to the pivot table. However, you can connect complex JSON to the pivot table by converting it to flat JSON via code-behind and binding it to the pivot table using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#datasource) property in the [`load`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#load) event.

In the following example, the **complexToFlatJson()** method is used to convert complex JSON to flat JSON and bind it to the pivot table using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#datasource) property, then modifying the field names in the [`rows`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings/#rows) and [`columns`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#columns) based on the converted flat JSON under [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview#datasourcesettings) in the [`load`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#load) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs318/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs318/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs318" %}