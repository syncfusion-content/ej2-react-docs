---
layout: post
title: Filtering in React TreeGrid component | Syncfusion
description: Learn here all about Filtering in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Filtering 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in React TreeGrid

Filtering displays only records that match specified criteria. Enable filtering by setting [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowfiltering) to true. Configure behavior using [filterSettings](https://ej2.syncfusion.com/react/documentation/api/treegrid/#filtersettings).

To use filtering, inject the **Filter**  module in the TreeGrid.

The following video provides a quick overview of filtering:
{% youtube "https://www.youtube.com/watch?v=_kxndJOgtuw" %}

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/filtering-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/filtering-cs8/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs8" %}

> * Apply and clear filtering programmatically using [filterByColumn](https://ej2.syncfusion.com/react/documentation/api/treegrid/#filterbycolumn) and [clearFiltering](https://ej2.syncfusion.com/react/documentation/api/treegrid/#clearfiltering).
> * To disable filtering for a specific column, set [columns.allowFiltering](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#allowfiltering) to **false**.

## Filter hierarchy modes

TreeGrid provides support for a set of filtering modes with [filterSettings.filterHierarchyMode](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterSettingsModel/#hierarchymode) property. The available modes are:

* **Parent** (default): Displays matching records along with their parent records. If a match has no parent, only the matching record is shown.
* **Child** : Displays matching records along with their child records. If a match has no children, only the matching record is shown.
* **Both** : Displays matching records with both parent and child records. If no related parent or child exists, only the matching record is shown.
* **None** : Displays only the records that match the filter.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/filtering-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/filtering-cs9/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs9" %}

## Initial filter

Apply filters on initial render by specifying **predicate** objects in [filterSettings.columns](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterSettingsModel/#columns).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/filtering-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/filtering-cs10/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs10" %}

## Filter operators

Define the operator for each filtered column using the [operator](https://ej2.syncfusion.com/react/documentation/api/grid/predicate/#operator) property in [filterSettings.columns](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterSettings/#columns).

Operator | Description | Supported types
-----|-----|-----
startswith | Checks whether the value begins with the specified value. | String
endswith | Checks whether the value ends with the specified value. | String
contains | Checks whether the value contains the specified value. | String
equal | Checks whether the value is equal to the specified value. | String | Number | Boolean | Date
notequal | Checks for values not equal to the specified value. | String | Number | Boolean | Date
greaterthan | Checks whether the value is greater than the specified value. | Number | Date
greaterthanorequal | Checks whether a value is greater than or equal to the specified value. | Number | Date
lessthan | Checks whether the value is less than the specified value. | Number | Date
lessthanorequal | Checks whether the value is less than or equal to the specified value. | Number | Date

> By default, the **filterSettings.columns.operator** value is *equal*.

## Diacritics

By default, the TreeGrid ignores diacritic characters during filtering. To include diacritic characters, set [filterSettings.ignoreAccent](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterSettingsModel/#ignoreaccent) to true.

In the following example, type **aero** in the Name column to match diacritic characters.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/filtering-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/filtering-cs11/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs11" %}

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-components/react-tree-grid) feature tour for key capabilities. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.