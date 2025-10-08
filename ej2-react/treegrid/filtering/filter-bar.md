---
layout: post
title: Filter bar in React TreeGrid component | Syncfusion
description: Learn here all about Filter bar in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Filter bar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filter bar in React TreeGrid

When [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowfiltering) is set to true, a filter bar row appears below the header to filter data. Records can be filtered using different expressions based on the column type.

 **Filter bar expressions:**

Enter the following expressions (operators) directly in the filter bar.

Expression | Example | Description | Column type
-----|-----|-----|-----
= | =value | equal | Number
!= | !=value | notequal | Number
> | >value | greaterthan | Number
< | <value | lessthan | Number
>= | >=value | greaterthanorequal | Number
<= | <=value | lessthanorequal | Number
* | *value | startswith | String
% | %value | endswith | String
N/A | N/A | **Equal** operator is always used for Date columns | Date
N/A | N/A | **Equal** operator is always used for Boolean columns | Boolean

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/filtering-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/filtering-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs3" %}

> By default, [filterSettings.columns.operator](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterSettingsModel/#operators) is `equal`.

## Filter bar template with custom component

Customize a column’s default filter bar input using a **filter template**.

The following example demonstrates the way to use filter template for a column when using filter bar. In the following example, the DropdownList component is used to filter **duration** column using filter template.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/filtering-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/filtering-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs4" %}

### Change default filter bar operator

Change the default filter operator by extending [filterModule.filterOperators](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterSettings/#operators) in the [dataBound](https://ej2.syncfusion.com/react/documentation/api/treegrid/#databound) event.

In the following sample, the default operator for string columns is changed from `startsWith` to `contains`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/filtering-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/filtering-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs5" %}