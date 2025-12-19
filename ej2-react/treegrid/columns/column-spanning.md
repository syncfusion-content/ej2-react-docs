---
layout: post
title: Column spanning in React TreeGrid | Syncfusion
description: Learn here all about Column spanning in Syncfusion React TreeGrid of Syncfusion Essential JS 2 and more.
control: Column spanning 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column spanning in React TreeGrid 

Column spanning in the TreeGrid allows merging adjacent cells horizontally, creating a visually appealing and informative layout. By defining the `colSpan` attribute in the [queryCellInfo](https://ej2.syncfusion.com/react/documentation/api/treegrid/index-default#querycellinfo) event, cells can be easily spanned and the appearance of the TreeGrid can be customized.

In the following example, Employee "Davolio" is scheduled for analysis from "9.00 AM" to "10.00 AM", so those cells have been spanned.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-spanning-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-spanning-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/column-spanning-cs1" %}

## Column spanning via API
 
Column spanning in the TreeGrid allows automatically merging cells with identical values in the same row across consecutive columns. This significantly enhances readability and delivers a cleaner layout by eliminating repetitive data. To enable column spanning, set the `enableColumnSpan` property to "true" in the TreeGrid configuration.
 
In the following example, column spanning is applied to the "Status", "Permit Status", "Inspection Status", and "Punch List Status" columns, while it is disabled for the "Planned Budget" and "Actual Spend" columns by setting the `enableColumnSpan` property to "false" in the column level.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-spanning-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-spanning-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/column-spanning-cs2" %}

### Limitations
 
The following list outlines the features that are not compatible with column spanning:
 
* Virtualization
* Infinite Scrolling
* Row Drag and Drop
* Column Virtualization
* Detail Template
* Editing
* Export

## See Also
* [Row Spanning in Syncfusion<sup style="font-size:70%">&reg;</sup> React TreeGrid](https://ej2.syncfusion.com/react/documentation/treegrid/row/row-spanning)