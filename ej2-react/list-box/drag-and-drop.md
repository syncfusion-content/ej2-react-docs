---
layout: post
title: Drag and drop in React List box component | Syncfusion
description: Learn here all about Drag and drop in Syncfusion React List box component of Syncfusion Essential JS 2 and more.
control: Drag and drop 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in React List box component

The ListBox has support to drag an item or a group of selected items and drop it within the same list box or into another list box.

The elements can be customized on drag and drop by using the following events,

| Events | Description |
|------|------|
| [`dragStart`](https://ej2.syncfusion.com/react/documentation/api/list-box/#dragstart) | Triggers when the selected element is being dragged. |
| [`drag`](https://ej2.syncfusion.com/react/documentation/api/list-box/#drag) | Triggers when the selected element is being dragged. |
| [`drop`](https://ej2.syncfusion.com/react/documentation/api/list-box/#drop) | Triggers when the selected element is being dropped. |

## Single listbox

To drag and drop an item or group of item within the list box can be achieved by setting [`allowDragAndDrop`](https://ej2.syncfusion.com/react/documentation/api/list-box/#allowdraganddrop) property as `true`.

The following sample illustrates how to drag and drop an item within the same list box by enabling `allowDragAndDrop` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/basic-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/basic-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/basic-cs6" %}

## Multiple listbox

To drag and drop an item or group of item between two list boxes can be achieved by setting `allowDragAndDrop` property as `true` and [`scope`](https://ej2.syncfusion.com/react/documentation/api/list-box/#scope) property should be set to both the list boxes.

In the following sample, the `allowDragAndDrop` property is set as `true` and `scope` is set as `combined-list` to enable drop and drop in both list boxes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/multiple-listbox-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/multiple-listbox-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/multiple-listbox-cs1" %}

## Dual ListBox with drag and drop

The toolbar and drag and drop actions between two listboxes can be enabled by setting a listbox unique id and the same [`scope`](https://ej2.syncfusion.com/react/documentation/api/list-box/#scope) property value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/dual-drag-listbox-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/dual-drag-listbox-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/dual-drag-listbox-cs1" %}