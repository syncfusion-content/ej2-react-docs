---
layout: post
title: Virtual scroll in React Gantt component | Syncfusion
description: Learn here all about Virtual scroll in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Virtual scroll 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Virtual scroll in React Gantt component

Virtual Scroll support in Gantt allows you to load large amount of data without performance degradation. To enable Virtual Scrolling, you need to inject `VirtualScroll` module in Gantt.

## Row virtualization

Row virtualization allows you to load and render a large number of tasks in Gantt with effective performance. In this mode, all tasks are fetched initially from the datasource and rendered in the DOM within a compact viewport area.

The number of records displayed in the Gantt is determined by the height.

This mode can be enable by setting the `enableVirtualization` property to `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/virtualscroll-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/virtualscroll-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/virtualscroll-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/virtualscroll-cs1" %}

## Timeline virtualization

Timeline virtualization allows you to load a data source having large timespan with high performance. Initially, it renders the timeline with thrice the width of the gantt element, while other timeline cells render on-demand during horizontal scrolling.

This mode can be enable by setting the [enableTimelineVirtualization](https://ej2.syncfusion.com/react/documentation/api/gantt#enabletimelinevirtualization) property to `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/virtualscroll-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/virtualscroll-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/virtualscroll-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/virtualscroll-cs3" %}

## Get filtered data when virtual scrolling is enabled

While enabling virtual scroll you can get the filtered or sorted record count using `filteredResult` from the filterModule of the treegrid inside the `actionComplete` event.

The following code example shows how to get filtered data count in the gantt control.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/filtered-data-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/filtered-data-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/filtered-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/filtered-data-cs1" %}

## Limitations for virtual scroll

* Due to the element height limitation in browsers, the maximum number of records loaded is limited by the browser capacity.
* Cell selection is not persisted due to on-demand rendering.
* The number of records rendered will be determined by the `height` property.
* It is necessary to mention the height of the Gantt in pixels when enabling Virtual Scrolling.
