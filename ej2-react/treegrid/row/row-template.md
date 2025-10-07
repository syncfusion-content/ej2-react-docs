---
layout: post
title: Row template in React TreeGrid component | Syncfusion
description: Learn here all about Row template in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Row template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row template in React TreeGrid

The [rowTemplate](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowtemplate) option customizes the look and behavior of TreeGrid rows. The `rowTemplate` property accepts either a template string or an HTML element ID.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/rowtemplate-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/rowtemplate-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/rowtemplate-cs1" %}

The [rowTemplate](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowtemplate) must return a single tr element.

## Row template with formatting

When using [rowTemplate](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowtemplate), values cannot be formatted inside the template using [columns.format](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#format) property. In such cases, define a global formatting function and invoke it within the template.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/rowtemplateformat-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/rowtemplateformat-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/rowtemplateformat-cs1" %}

## Limitations

Row template feature is not compatible with all the features which are available in the TreeGrid, and it has limited features support. The features that are incompatible with the row template feature are listed below.

* Filtering
* Paging
* Sorting
* Scrolling
* Searching
* RTL
* Context menu
* State persistence