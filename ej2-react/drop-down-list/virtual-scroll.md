---
layout: post
title: Virtualization in React Drop down list component | Syncfusion
description: Learn here all about Virtualization in Syncfusion React Drop down list component of Syncfusion Essential JS 2 and more.
control: Virtualization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in DropDown List

Dropdown list virtualization is a technique used to efficiently render extensive lists of items while minimizing the impact on performance. This method is particularly advantageous when dealing with large datasets because it ensures that only a fixed number of DOM (Document Object Model) elements are created. When scrolling through the list, existing DOM elements are reused to display relevant data instead of generating new elements for each item. This recycling process is managed internally.
 
During virtual scrolling, the data retrieved from the data source depends on the popup height and the calculation of the list item height. Enabling the [enableVirtualization](../api/drop-down-list/#enableVirtualization) option in a dropdown list activates this virtualization technique.
 
When fetching data from the data source, the [actionBegin](../api/drop-down-list/#actionbegin) event is triggered before data retrieval begins. Then, the [actionComplete](../api/drop-down-list/#actioncomplete) event is triggered once the data is successfully fetched.

Furthermore, Incremental Search is supported with virtualization in the DropDownList component. When a key is typed, the focus is moved to the respective element, and the value is updated in the component in the open popup state. In the closed popup state, the respective value is updated in the component based on the typed key. The Incremental Search functionality is well-suited for scenarios involving remote data binding.

When the enableVirtualization property is enabled, the `skip` and `take` properties provided by the user within the Query class at the initial state or during the `actionBegin` or `actionComplete` events will not be considered, since it is internally managed and calculated based on certain dimensions with respect to the popup height.

## Binding local data

The DropDownList generates list items from an array of complex data by mapping appropriate columns to the [fields](../api/drop-down-list/#fields) property. With virtual scrolling, the list updates based on scroll offset, triggering data requests from the server. The `actionBegin` event fires before data retrieval begins, and the `actionComplete` event fires when data retrieval completes.

In the following example, the `id` and `text` columns are mapped to the `value` and `text` fields respectively.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/virtual-scroll/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/virtual-scroll/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/virtual-scroll" %}


## Binding remote data

The DropDownList supports the retrieval of data from remote data services with the help of the `DataManager` component, triggering the `actionBegin` and `actionComplete` events, and then updating the list data. During virtual scrolling, additional data is retrieved from the server, triggering the `actionBegin` and `actionComplete` events at that time as well.

The following sample displays the OrderId from the `Orders` Data Service.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/virtual-scroll-remote/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/virtual-scroll-remote/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/virtual-scroll-remote" %}

## Customizing items count in virtualization 

When the `enableVirtualization` property is enabled, the `take` property in the Query parameter at initialization or during the `actionBegin` event is respected. Internally, the component calculates the number of items that fit on the current viewport based on popup height. If the specified take value is less than the minimum items required to fill the viewport, the internal calculation takes precedence.

The following example demonstrates customizing items count in virtualization:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/virtual-scroll-items/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/virtual-scroll-items/app/index.tsx %}
{% endhighlight %}
{% endtabs %}


## Grouping

The DropDownList component supports grouping with virtualization. Organize elements into groups based on categories using the [groupBy](../api/drop-down-list/#fields) field in the data table. After grouping, virtualization functions like local data binding. When binding to remote data, an initial request retrieves all data for grouping purposes. Subsequently, the grouped data works the same way as virtualized local data.

The following example demonstrates grouping with virtualization: 

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/virtual-scroll-group/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/virtual-scroll-group/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/virtual-scroll-group" %}

## Filtering with Virtualization

The DropDownList component supports filtering with virtualization. When [`allowFiltering`](../api/drop-down-list/#allowfiltering) is enabled, the component filters data based on typed characters. The DropDownList sends requests to the server using the full data source for filtering. The `actionBegin` event fires before the request, and the `actionComplete` event fires after successful data retrieval. Initial data loads when the popup opens, and the popup closes after selection or filtering completion.

The following example demonstrates filtering with virtualization:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/virtual-scroll-filter/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/virtual-scroll-filter/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/virtual-scroll-filter" %}