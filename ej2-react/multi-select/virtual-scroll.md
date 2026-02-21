---
layout: post
title: Virtualization in React MultiSelect Dropdown component | Syncfusion
description: Learn here all about Virtualization in Syncfusion React MultiSelect Dropdown component of Syncfusion Essential JS 2 and more.
control: Virtualization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in MultiSelect Dropdown

MultiSelect Dropdown virtualization is a technique used to efficiently render extensive lists of items while minimizing the impact on performance. This method is particularly advantageous when dealing with large datasets because it ensures that only a fixed number of DOM (Document Object Model) elements are created. When scrolling through the list, existing DOM elements are reused to display relevant data instead of generating new elements for each item. This recycling process is managed internally.

During virtual scrolling, the data retrieved from the data source depends on the popup height and the calculation of the list item height. Enabling the [enableVirtualization](https://ej2.syncfusion.com/react/documentation/api/multi-select/#enableVirtualization) option in a MultiSelect Dropdown activates this virtualization technique.
 
When fetching data from the data source, the [actionBegin](../api/multi-select/#actionbegin) event is triggered before data retrieval begins. Then, the [actionComplete](../api/multi-select/#actioncomplete) event is triggered once the data is successfully fetched.

Furthermore, Incremental Search is supported with virtualization in the MultiSelect component. When a key is typed, the focus is moved to the respective element in the open popup state. In the closed popup state, the popup opens, and focus is moved to the respective element in the popup list based on the typed key. The Incremental Search functionality is well-suited for scenarios involving remote data binding.

## Binding local data

The MultiSelect can generate its list items through an array of complex data. For this, the appropriate columns should be mapped to the [fields](../api/multi-select/#fields) property. When using virtual scrolling, the list updates based on the scroll offset value, triggering a request to fetch more data from the server.

In the following example, `id` column and `text` column from complex data have been mapped to the `value` field and `text` field, respectively.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/virtual-scroll/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/virtual-scroll/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll" %}

## Binding remote data

The MultiSelect supports the retrieval of data from remote data services with the help of the `DataManager` component, triggering the `actionBegin` and `actionComplete` events, and then updating the list data. During virtual scrolling, additional data is retrieved from the server, triggering the `actionBegin` and `actionComplete` events at that time as well.

The following sample displays the OrderId from the `Orders` Data Service.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/virtual-scroll-remote/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/virtual-scroll-remote/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll-remote" %}

## Customizing items count in virtualization 

When the `enableVirtualization` property is enabled, the `take` property specified in the Query parameter at initialization or during the `actionBegin` event determines the number of items loaded. The component internally calculates the optimal item count based on the popup height. If the specified `take` value is less than the minimum number of items that fit within the popup, the component uses the calculated minimum value instead.

The following sample shows the example for Customizing items count in virtualization.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/virtual-scroll-items/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/virtual-scroll-items/app/index.tsx %}
{% endhighlight %}
{% endtabs %}


## Grouping with virtualization

The MultiSelect component combines grouping with virtualization to efficiently organize and render large categorized datasets. Organize items into groups using the [groupBy](../api/multi-select/#fields) field from your data source. Virtual scrolling works seamlessly with grouped data for local sources. When using remote data, the component retrieves all data initially for grouping purposes, then applies virtualization to the grouped results, delivering optimal performance with organized content. 

The following sample shows the example for Grouping with Virtualization. 

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/virtual-scroll-group/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/virtual-scroll-group/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll-group" %}

## Filtering with virtualization

The MultiSelect component supports filtering with virtualization, combining search capabilities with efficient rendering. When [`allowFiltering`](../api/multi-select/#allowfiltering) is enabled, typing characters filters the data in real time. The component sends filter requests to the server using the complete data source, triggering the action event before the request and the action complete event after data retrieval. Initial data loads when the popup opens. The popup closes after filter selection or when no matches are found.

The following sample shows the example for Filtering with Virtualization.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/virtual-scroll-filter/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/virtual-scroll-filter/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll-filter" %}

## Checkbox with virtualization

The MultiSelect component supports checkbox selection with virtualization, allowing users to select multiple items efficiently. When the [`mode`](../api/multi-select/#mode) property is set to `CheckBox`, checkboxes appear alongside each item in the virtualized list. The component's value property updates automatically as items are selected or deselected through their checkboxes.

The following sample shows the example for checkbox with Virtualization.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/virtual-scroll-check/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/virtual-scroll-check/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll-check" %}

## Custom value with virtualization

The MultiSelect component supports adding custom values with virtualization. When [`allowCustomValue`](../api/multi-select/#allowcustomvalue) is enabled, users can enter and add new options not present in the original dataset. Upon selecting a custom value, the component triggers the [`customValueSelection`](../api/multi-select/#customvalueselection) event and appends the custom value to the end of the complete list.

The following sample shows the example for custom value with Virtualization.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/virtual-scroll-custom/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/virtual-scroll-custom/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll-custom" %}

## Preselect values with virtualization

The MultiSelect component supports preselecting values with virtualization for both local and remote data sources. When preselected values are bound to the component, the corresponding data is fetched from the server and displayed immediately. For custom values, the component updates its value and appends the custom value to the end of the complete list.

The following sample shows the example for Preselect value with Virtualization.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/virtual-scroll-preselect/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/virtual-scroll-preselect/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll-preselect" %}