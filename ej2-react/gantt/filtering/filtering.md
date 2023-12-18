---
layout: post
title: Filtering in React Gantt component | Syncfusion
description: Learn here all about Filtering in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Filtering 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in React Gantt component

Filtering allows you to view specific or related records based on filter criteria. This can be done in the Gantt component by using the filter menu and toolbar search. To enable filtering in the Gantt component, set the [`allowFiltering`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowfiltering) to `true`. Menu -filtering support can be configured using the [`filterSettings`](https://ej2.syncfusion.com/react/documentation/api/gantt/filterSettings/) property and toolbar searching can be configured using the [`searchSettings`](https://ej2.syncfusion.com/react/documentation/api/gantt/searchSettings/) property.

To use filter, inject the [`Filter`](https://ej2.syncfusion.com/react/documentation/api/gantt/#filtermodule) module into the Gantt component.

## Filter hierarchy modes

The Gantt component supports a set of filtering modes with the [`filterSettings.hierarchyMode`](https://ej2.syncfusion.com/react/documentation/api/gantt/filterSettings/#hierarchymode) property. The following are the types of filter hierarchy modes available in the Gantt component:

* `Parent`: This is the default filter hierarchy mode in Gantt. The filtered records are displayed with their parent records. If the filtered records do not have any parent record, then only the filtered records will be displayed.

* `Child`: Displays the filtered records with their child record. If the filtered records do not have any child record, then only the filtered records will be displayed.

* `Both`: Displays the filtered records with their both parent and child records. If the filtered records do not have any parent or child records, then only the filtered records will be displayed.

* `None`: Displays only the filtered records.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/filterhierarchy-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/filterhierarchy-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/filterhierarchy-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/filterhierarchy-cs1" %}

## Initial filter

To apply the filter at initial rendering, set the filter to `predicate` object in the [`filterSettings.columns`](https://ej2.syncfusion.com/react/documentation/api/gantt/filterSettings/#columns) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/initialfilter-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/initialfilter-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/initialfilter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/initialfilter-cs1" %}

## Filter operators

The filter operator for a column can be defined in the `filterSettings.columns.operator` property.

The available operators and their supported data types are:

Operator |Description |Supported Types
-----|-----|-----
startswith |Checks whether the value begins with the specified value. |String
endswith |Checks whether the value ends with the specified value. |String
contains |Checks whether the value contains the specified value. |String
equal |Checks whether the value is equal to the specified value. |String &#124; Number &#124; Boolean &#124; Date
notequal |Checks for the values that are not equal to the specified value. |String &#124; Number &#124; Boolean &#124; Date
greaterthan |Checks whether the value is greater than the specified value. |Number &#124; Date
greaterthanorequal|Checks whether the value is greater than or equal to the specified value. |Number &#124; Date
lessthan |Checks whether the value is less than the specified value. |Number &#124; Date
lessthanorequal |Checks whether the value is less than or equal to the specified value. |Number &#124; Date

> By default, the `filterSettings.columns.operator` value is `equal`

## Diacritics

By default, the Gantt component ignores the diacritic characters while filtering. To include diacritic characters, set the [`filterSettings.ignoreAccent`](https://ej2.syncfusion.com/react/documentation/api/gantt/filterSettings/#ignoreaccent) to `true`.

In the following sample, type **Perform** in the `TaskName` column to filter diacritic characters.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/diacriticsfilter-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/diacriticsfilter-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/diacriticsfilter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/diacriticsfilter-cs1" %}

## Filtering a specific column by method

You can filter the columns dynamically by using the [`filterByColumn`](https://ej2.syncfusion.com/react/documentation/api/gantt/#filterbycolumn) method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/filterbymethod-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/filterbymethod-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/filterbymethod-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/filterbymethod-cs1" %}

## Clear filtered columns

You can clear all the filtering conditions done in the Gantt component by using the [`clearFiltering`](https://ej2.syncfusion.com/react/documentation/api/gantt/#clearfiltering) method.The following code snippet explains the above behavior.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/clearfilter-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/clearfilter-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/clearfilter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/clearfilter-cs1" %}

## Custom component in filter menu

The [`column.filter.ui`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#filter) is used to add custom filter components to a particular column.
To implement a custom filter UI, define the following functions:

* `create`:  Creates custom component.
* `write`: Wire events for custom component.
* `read`: Read the filter value from custom component.

In the following sample, the dropdown is used as a custom component in the TaskName column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/custom-component-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/custom-component-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/custom-component-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/custom-component-cs1" %}
