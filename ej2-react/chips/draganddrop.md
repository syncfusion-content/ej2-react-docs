---
layout: post
title: Drag and drop in React Chips component | Syncfusion
description: Learn here all about Drag and drop in Syncfusion React Chips component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Drag and drop
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in React Chips component

Enable drag and drop functionality for chips by setting the [allowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/chips/#allowdraganddrop) property to **true**. Users can drag and drop chips within the same ChipList or across multiple ChipList containers to reorder or reorganize them.

When dragging a chip, a visual indicator line appears between chips, showing exactly where the chip will be placed upon drop. This feedback helps users place chips at the desired position with precision.

## Drag and drop events

The following events allow you to control and customize the drag and drop behavior:

* [`dragStart`](https://ej2.syncfusion.com/react/documentation/api/chips/#dragstart) - Fired when the user starts dragging a chip. Use this event to prevent dragging for specific chips.
* [`dragging`](https://ej2.syncfusion.com/react/documentation/api/chips/#dragging) - Fired continuously while a chip is being dragged. Use this event to customize the appearance of the cloned chip during the drag operation.
* [`dragStop`](https://ej2.syncfusion.com/react/documentation/api/chips/#dragstop) - Fired when the drag operation ends. Use this event to prevent dropping or perform cleanup actions.

## Drag area

Restrict the dragging area using the [`dragArea`](https://ej2.syncfusion.com/react/documentation/api/chips/#dragarea) property. This property accepts an element ID or CSS class as a string and limits chip dragging only within the specified container. By default, it is set to `null`, allowing chips to be dragged anywhere.

The following example demonstrates drag and drop functionality with the [allowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/chips/#allowdraganddrop) property enabled:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/chips/draganddrop/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/chips/draganddrop/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/chips/draganddrop/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/chips/draganddrop/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chips/draganddrop" %}
