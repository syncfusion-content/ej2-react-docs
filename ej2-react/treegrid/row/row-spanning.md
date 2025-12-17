---
layout: post
title: Row spanning in React TreeGrid | Syncfusion
description: Learn here all about Row spanning in Syncfusion React TreeGrid of Syncfusion Essential JS 2 and more.
control: Row spanning 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row spanning in React TreeGrid 

The row spanning feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> React TreeGrid allows merging cells in the same column vertically, creating a visually appealing and informative layout. By defining the `rowSpan` attribute in the [queryCellInfo](https://ej2.syncfusion.com/react/documentation/api/treegrid/index-default#querycellinfo) event, cells can be easily spanned and the appearance of the TreeGrid can be customized.

In the following demo, the **Lunch Break** cell spans multiple rows in the "1:00 PM" column.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/row-spanning-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/row-spanning-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/row-spanning-cs1" %}

## Limitations

Row spanning in the React TreeGrid has the following limitations:

* The [updateCell](https://ej2.syncfusion.com/react/documentation/api/treegrid/index-default#updatecell) method does not support row spanning.
* Row spanning is not compatible with the following features:
    1. Virtual scrolling
    2. Infinite scrolling

> When using row spanning, ensure that the spanned cells do not interfere with TreeGrid operations such as sorting, filtering, or editing, as this may lead to unexpected behavior.

## Row spanning implementation through API

The Syncfusion React TreeGrid provides an API-based approach to vertically merge cells with identical values in the same column across consecutive rows.

The row spanning feature in the Syncfusion React TreeGrid can be enabled using `enableRowSpan` property to **true** in the TreeGrid configuration, which significantly enhances readability and delivers a cleaner layout by eliminating repetitive data in columns such as "Status", "Permit Status", "Inspection Status" and "Punch List Status".

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/row-spanning-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/row-spanning-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/row-spanning-cs2" %}

> In the sample, row spanning is disabled at the column level for the price based columns such as "Planned Budget" and "Actual Spend" by setting each column's `enableRowSpan` property to **false**.

### Limitations

Row spanning feature is not compatible with all the features which are available in TreeGrid and it has limited features support. Here we have listed out the features which are not compatible with row spanning feature.

* Virtualization
* Infinite Scrolling
* Row Drag and Drop
* Column Virtualization
* Detail Template
* Editing
* Export
