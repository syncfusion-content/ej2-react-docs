---
layout: post
title: Virtualization in React Drop MultiSelect Dropdown component | Syncfusion
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

The MultiSelect supports retrieval of data from remote data services with the help of `DataManager` component. When using remote data, it initially fetches all the data from the server, triggering the `actionBegin` and `actionComplete` events, and then stores the data locally. During virtual scrolling, additional data is retrieved from the locally stored data, triggering the `actionBegin` and `actionComplete` events at that time as well.

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

When the `enableVirtualization` property is enabled, the `take` property provided by the user within the Query parameter at the initial state or during the `actionBegin` event will be considered. Internally, it calculates the items that fit onto the current page (i.e., probably twice the amount of the popup's height). If the user-provided take value is less than the minimum number of items that fit into the popup, the user-provided take value will not be considered.

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

The MultiSelect component supports grouping with Virtualization. It allows you to organize elements into groups based on different categories. Each item in the list can be classified using the [groupBy](../api/multi-select/#fields) field in the data table. After grouping, virtualization works similarly to local data binding, providing a seamless user experience. When the data source is bound to remote data, an initial request is made to retrieve all data for the purpose of grouping. Subsequently, the grouped data works in the same way as local data binding on virtualization. 

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

The MultiSelect component supports Filtering with Virtualization. The MultiSelect includes a built-in feature that enables data filtering when the [`allowFiltering`](../api/multi-select/#allowfiltering) option is enabled. In the context of Virtual Scrolling, the filtering process operates in response to the typed characters. Specifically, the MultiSelect sends a request to the server, utilizing the full data source, to achieve filtering. Before initiating the request, an action event is triggered. Upon successful retrieval of data from the server, an action complete event is triggered. The initial data is loaded when the popup is opened. Whether the filter list has a selection or not, the popup closes.

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

The MultiSelect component supports CheckBox selection with Virtualization. The MultiSelect comes with integrated functionality that allows for the selection of multiple values using checkboxes when the [`mode`](../api/multi-select/#mode) property is configured to `CheckBox`. In the context of Virtual Scrolling, the checkbox render with each list element. based on the checkbox selection and unselection, component value property updated with respective values.

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

The MultiSelect component supports custom valie with Virtualization. When the [`allowCustomValue`](../api/multi-select/#allowcustomvalue) property is enabled, the MultiSelect enables users to include a new option not currently available in the component value. Upon selecting this newly added custom value, the MultiSelect triggers the [`customValueSelection`](../api/multi-select/#customvalueselection) event and also custom value will be added to the end of the complete list.

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

The MultiSelect component extends its support for preselected values with Virtualization. When binding values from local or remote data to the MultiSelect component, the corresponding data value is fetched from the server and promptly updated within the component. Moreover, when binding a custom value to the component, the value is updated within the component, and the bound custom value is seamlessly appended to the end of the complete list.

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