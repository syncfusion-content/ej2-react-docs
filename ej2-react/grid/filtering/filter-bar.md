---
layout: post
title: Filter bar in React Grid component | Syncfusion
description: Learn here all about Filter bar in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Filter bar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filter bar in React Grid component

By defining the [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/grid/#allowfiltering) to **true**, then filter bar row will be rendered next to header which allows you to filter data. You can filter the records with different expressions depending upon the column type.

 **Filter bar Expressions:**

 You can enter the following filter expressions(operators) manually in the filter bar.

Expression |Example |Description |Column Type
-----|-----|-----|-----
= |=value |equal |Numeric
!= |!=value |notequal |Numeric
> |>value |greaterthan |Numeric
< |<value |lessthan |Numeric
>= |>=value |greaterthanorequal |Numeric
<=|<=value|lessthanorequal |Numeric
* |*value |startswith |String
% |%value |endswith |String
N/A |N/A |Always **equal** operator will be used for Date filter |Date
N/A |N/A |Always **equal** operator will be used for Boolean filter |Boolean

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs2" %}

> By default, the [filterSettings.columns.operator](https://ej2.syncfusion.com/react/documentation/api/grid/predicateModel/#operator) value is **equal**.

## Filter bar template with custom component

The [filterBarTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column/#filterbartemplate) is used to add a custom component for a particular column and this contains the following functions.

* **create** – It is used for creating custom components.
* **write** - It is used to perform filtering actions on Grid from custom components.

In the following sample dropdown is used  as custom component in **EmployeeID** column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs3" %}

 ## See also

* [How to perform filter by using Wildcard and LIKE operator filter](https://ej2.syncfusion.com/react/documentation/grid/filtering/filtering#wildcard-and-like-operator-filter)