---
layout: post
title: Drag and drop in React Common control | Syncfusion
description: Learn here all about Drag and drop in Syncfusion React Common control of Syncfusion Essential JS 2 and more.
control: common
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Drag and Drop in React

Drag and drop is a feature of a user interface that allows users to select an item or items and then move them to a different location or onto another interface element by "dragging" the selected item(s) with a pointing device (such as a mouse) and then "dropping" them at the desired location.

Syncfusion<sup style="font-size:70%">&reg;</sup> React components support drag and drop feature through two libraries. These are [Draggable](https://ej2.syncfusion.com/documentation/api/base/draggable/) and [`Droppable`](https://ej2.syncfusion.com/documentation/api/base/draggable/).

## Draggable

The Syncfusion's [`Draggable`](https://ej2.syncfusion.com/documentation/api/base/draggable/) library allows users to make any DOM element draggable by passing it as a parameter to the `Draggable` constructor. This can be useful for creating interactive and user-friendly interfaces, such as allowing a user to reorder items in a list by dragging them. The below code snippet enables the draggable functionality for the specific DOM element passed to the `Draggable` constructor.

 {% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/draggable-default-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/draggable-default-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/draggable-default-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/draggable-default-cs1" %}

### Clone draggable element

Syncfusion<sup style="font-size:70%">&reg;</sup> provides the option to create a clone of a draggable element while the user is dragging it. It can be achieved by setting the [clone](https://ej2.syncfusion.com/documentation/api/base/draggable/#clone) property to `true`. Here's an example of how to create a clone of a draggable element.

 {% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/draggable-default-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/draggable-default-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/draggable-default-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/draggable-default-cs2" %}

### Drag area

A drag area is a specific area within a user interface that is designated for drag and drop operations. When an object or element is dragged within a drag area, certain actions or events may be triggered. The user can specify the drag area by using the [dragArea](https://ej2.syncfusion.com/documentation/api/base/draggable/#dragarea) property. Refer to the below sample.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/drag-drop-action-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/drag-drop-action-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/drag-drop-action-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/drag-drop-action-cs1" %}

## Droppable

A droppable zone is a designated area within the interface that accepts draggable elements. The [`Droppable`](https://ej2.syncfusion.com/documentation/api/base/droppable/) library enables any DOM element to become a droppable target.

When a draggable element is released over a droppable, the [drop](https://ej2.syncfusion.com/documentation/api/base/droppable/#events) event is triggered. Details about the dropped element are available through the event arguments, allowing dynamic updates such as appending, moving, or highlighting elements in the target area.

Refer to the following code snippet to enable droppable zones.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/drag-drop-action-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/drag-drop-action-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/drag-drop-action-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/drag-drop-action-cs2" %}
