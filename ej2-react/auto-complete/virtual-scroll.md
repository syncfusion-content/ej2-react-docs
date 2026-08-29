---
layout: post
title: Virtualization in React AutoComplete | Syncfusion
description: Render large lists efficiently in the Syncfusion React AutoComplete with virtualization, which reuses DOM nodes and fetches data on scroll via skip and take.
control: Virtualization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in React AutoComplete

AutoComplete virtualization is a technique used to efficiently render extensive lists of items while minimizing the performance impact. This method is particularly advantageous when dealing with large datasets because it ensures that only a fixed number of DOM (Document Object Model) elements are created. When scrolling through the list, existing DOM elements are reused to display relevant data instead of generating new elements for each item. This recycling process is managed internally.

During virtual scrolling, the data retrieved from the data source depends on the popup height and the calculation of the list item height. Set [`enableVirtualization`](../api/auto-complete#enablevirtualization) to `true` to activate virtualization. In addition, import the `VirtualScroll` module and register it using `<Inject services={[VirtualScroll]} />` inside the component; virtualization only works when both `enableVirtualization` and the injected `VirtualScroll` service are present.

When fetching data from the data source, the [`actionBegin`](../api/auto-complete#actionbegin) event is triggered before data retrieval begins. Then, the [`actionComplete`](../api/auto-complete#actioncomplete) event is triggered once the data is successfully fetched.

When the `enableVirtualization` property is enabled, the `skip` and `take` properties provided by the user within the Query class at the initial state or during the `actionBegin` or `actionComplete` events will not be considered. They are internally managed and calculated based on the popup height. To customize the number of items fetched per page, see [Customizing items count in virtualization](#customizing-items-count-in-virtualization), where a user-provided `take` value greater than the minimum is honored.

## Binding local data

The AutoComplete can generate its list items through an array of complex objects. For this, the appropriate data fields should be mapped to the [`fields`](../api/auto-complete#fields) property. For background on field mapping, see [Field mapping](./data-binding#field-mapping). When using virtual scrolling, the list updates based on the scroll offset value, triggering a request to fetch more data from the server. As the data is being fetched, the `actionBegin` event occurs before the data retrieval starts. Once the data retrieval is successful, the `actionComplete` event is triggered, indicating that the data fetch process is complete.

In the following example, the `text` field is mapped to the `value` field.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/virtual-scroll/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/virtual-scroll/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/virtual-scroll" %}


## Binding remote data

The AutoComplete supports retrieving data from remote data services with the help of the `DataManager` component, which triggers the `actionBegin` and `actionComplete` events and then updates the list data. During virtual scrolling, additional data is retrieved from the server, triggering the `actionBegin` and `actionComplete` events at that time as well. The following sample uses the `WebApiAdaptor` to fetch data from the remote endpoint.

The following sample displays the OrderID from the `Orders` data service.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/virtual-scroll-remote/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/virtual-scroll-remote/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/virtual-scroll-remote" %}

## Customizing items count in virtualization

When the `enableVirtualization` property is enabled, the `take` property provided by the user within the Query class at the initial state or during the `actionBegin` event will be considered. Internally, the component calculates the items that fit onto the current page (typically twice the popup's height). If the provided `take` value is less than the minimum number of items that fit into the popup, it will not be considered.

The `actionBegin` event handler receives an `ActionBeginEventArgs` object whose `query` property exposes the current `Query` instance; you can assign a new `Query` (for example, `args.query = new Query().take(45)`) to override the page size.

The following sample demonstrates customizing the items count in virtualization.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/virtual-scroll-items/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/virtual-scroll-items/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/virtual-scroll-items" %}

## Grouping

The AutoComplete component supports grouping with virtualization. It allows you to organize list items into groups based on different categories. Each item in the list can be classified using the [`groupBy`](../api/auto-complete#fields) field in the data source. After grouping, virtualization works similarly to local data binding. When the data source is bound to remote data, an initial request is made to retrieve all data for the purpose of grouping. Subsequently, the grouped data works in the same way as local data binding virtualization.

The following sample demonstrates grouping with virtualization.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/virtual-scroll-group/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/virtual-scroll-group/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/virtual-scroll-group" %}

