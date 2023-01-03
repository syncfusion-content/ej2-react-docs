---
layout: post
title: Row template in React Grid component | Syncfusion
description: Learn here all about Row template in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Row template 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Row template in React Grid component

The [rowTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowtemplate) has an option to customize the look and behavior of the grid rows. The [rowTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowtemplate) property accepts the template for the row.

In the following example, Employee Information with Employee Photo is presented in the first column and employee details like Name, Address, etc., are presented in the second column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/row-template-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/row-template-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/row-template-cs3" % }

## Row template with formatting

If the [rowTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowtemplate) is used, the value cannot be formatted inside the template using the [columns.format](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) property. In that case, a function should be defined globally to format the value and invoke it inside the template.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/row-template-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/row-template-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/row-template-cs4" % }

## Limitations

Row template feature is not compatible with all the features which are available in the grid, and it has limited features support. The features that are incompatible with the row template feature are listed below.

* Filtering
* Paging
* Sorting
* Searching
* Rtl
* Export
* Context Menu
* State Persistence
* Selection
* Grouping
* Editing
* Frozen rows & columns
* Virtual & Infinite scrolling
* Column chooser
* Column menu
* Detail Row
* Foreignkey column
* Resizing
* Reordering
* Aggregates
* Clipboard
* Adaptive view