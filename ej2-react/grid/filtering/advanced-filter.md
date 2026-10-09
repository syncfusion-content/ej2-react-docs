---
layout: post
title: React Grid Advanced Filter | Syncfusion
description: Learn how to use Advanced Filtering in React Data Grid with Query Builder, multiple conditions, and logical operators.
control: Advanced filter 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Advanced Filtering in React Data Grid

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component provides advanced filtering functionality through the Query Builder interface, which enables the creation of complex filtering conditions with multiple criteria and logical operators.

## Enable advanced filtering

Advanced filtering is enabled by setting the `allowAdvancedFiltering` property to `true`. This adds an **Filter** button to the toolbar, which opens the Query Builder dialog for creating advanced filter conditions.

To use advanced filtering, inject the [AdvancedFilter](../../api/grid/advancedfilter) module into the Grid along with the other required modules.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/advanced-filter-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/advanced-filter-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/advanced-filter-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/advanced-filter-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/advanced-filter-cs1" %}

## Initial filter

Initial filter conditions can be set and applied automatically when the Grid loads. The `advancedFilterSettings` property with `queryBuilderSettings` is used to define the initial rule.

The following example demonstrates displaying only tickets with a priority of **High** and a status other than **Done**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/advanced-filter-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/advanced-filter-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/advanced-filter-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/advanced-filter-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/advanced-filter-cs2" %}

> By default, hidden columns are not included in the advanced filter builder. Setting `advancedFilterSettings.includeHiddenColumns` to `true` displays hidden columns in the Query Builder, enabling filter conditions to be created using their values.

## Advanced filtering events

The Advanced Filter feature provides the following events for customizing the dialog and filter operations.

1. The [advancedFilterOpen](../../api/grid#advancedfilteropen) event is triggered when the Advanced Filter dialog opens. The event arguments provide access to the dialog and Query Builder instances.
2. The [advancedFilterClose](../../api/grid#advancedfilterclose) event is triggered when the Advanced Filter dialog closes. Set the `cancel` property to `true` to prevent the dialog from closing.
3. The [advancedFilterActionBegin](../../api/grid#advancedfilteractionbegin) event is triggered before a filter is applied or cleared. Set the `cancel` property to `true` to prevent the operation. The event arguments include the filter rule, dialog instance, and Query Builder instance.
4. The [advancedFilterActionComplete](../../api/grid#advancedfilteractioncomplete) event is triggered after a filter is applied or cleared. Set the `cancel` property to `true` to keep the Advanced Filter dialog open after the operation.

## Methods

The Advanced Filter feature provides the following methods for controlling the dialog and managing filter rules programmatically:

1. The [openAdvancedFilterDialog](../../api/grid#openadvancedfilterdialog) method opens the Advanced Filter dialog.
2. The [closeAdvancedFilterDialog](../../api/grid#closeadvancedfilterdialog) method closes the Advanced Filter dialog.
3. The [applyAdvancedFilter](../../api/grid#applyadvancedfilter) method applies the specified filter rule to the Grid.
4. The [clearAdvancedFilter](../../api/grid#clearadvancedfilter) method clears the applied Advanced Filter and restores the original data view.
6. The [getAdvancedFilter](../../api/grid#getadvancedfilter) method retrieves the currently configured filter rule.
6. The [setAdvancedFilter](../../api/grid#setadvancedfilter) method sets the specified rule as the current rule configuration in the Advanced Filter Query Builder.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/advanced-filter-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/advanced-filter-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/advanced-filter-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/advanced-filter-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/advanced-filter-cs3" %}
