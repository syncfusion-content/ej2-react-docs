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

The Chips component enables drag and drop functionality for any chip when [allowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/chips/#allowdraganddrop) is set to **true**. Chips can be dragged and dropped within the same or across external ChipList containers.

When dragging a chip, an indicator line appears between chips, showing the exact position where the chip will be dropped. This visual indicator helps users place chips precisely at the desired location.

* To prevent the dragging action for a specific chip, use the [`dragStart`](https://ej2.syncfusion.com/react/documentation/api/chips/#dragstart) event, which triggers when chip dragging begins. Similarly, to prevent dropping action for a specific chip, use the [`dragStop`](https://ej2.syncfusion.com/react/documentation/api/chips/#dragstop) event, which triggers when dragging ends.

* The [`dragging`](https://ej2.syncfusion.com/react/documentation/api/chips/#dragging) event triggers while a chip is being dragged. You can customize the appearance of the cloned chip element during this event.

* You can set the drag area for the chips using the [`dragArea`](https://ej2.syncfusion.com/react/documentation/api/chips/#dragarea) property which allows the dragging of cloned chip only within the specified element. It accepts an element Id or class as a string and defaults to `null`.

In the following sample, the [allowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/chips/#allowdraganddrop) property is enabled.

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
