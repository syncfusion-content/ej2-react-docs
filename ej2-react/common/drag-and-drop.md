---
layout: post
title: Drag and drop in React Common control | Syncfusion
description: Learn how to enable drag-and-drop interactions in Syncfusion React components using Draggable and Droppable utilities.
control: common
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Drag and Drop in React

Drag and drop enables users to select one or more items and move them to a different location or onto another interface element by dragging with a mouse, touch, or pen input and releasing at the desired target location.

Syncfusion<sup style="font-size:70%">&reg;</sup> React components support drag-and-drop interactions through two core utilities from the `@syncfusion/ej2-base` package: [Draggable](https://ej2.syncfusion.com/documentation/api/base/draggable/) and [Droppable](https://ej2.syncfusion.com/documentation/api/base/droppable/). These utilities provide a flexible foundation for implementing custom drag-and-drop behaviors, including item reordering, drag handles, constrained movement, and drop target validation.

```bash
npm install @syncfusion/ej2-base --save
```

Import the required utilities in your component:

```javascript
import { Draggable, Droppable } from '@syncfusion/ej2-base';
```

## Draggable

The [`Draggable`](https://ej2.syncfusion.com/documentation/api/base/draggable/) utility transforms any DOM element into a draggable item by instantiating the Draggable class with a target element selector. This utility supports various configuration options to control drag behavior, including movement constraints, cloning, custom drag handles, and event callbacks. The example below demonstrates basic draggable functionality for a specified DOM element.

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

Create a visual copy of the dragged element during the drag operation by setting the [clone](https://ej2.syncfusion.com/documentation/api/base/draggable/#clone) property to `true`. When enabled, this renders a duplicate element that follows the cursor while the original element remains in its initial position. This is particularly useful for scenarios where the source item should persist, such as palette-based interfaces or template selection workflows.

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

A drag area is a specific area within a user interface that is designated for drag and drop operations. When an object or element is dragged within a drag area, certain actions or events may be triggered.
Define a constrained drag region by setting the [dragArea](https://ej2.syncfusion.com/documentation/api/base/draggable/#dragarea) property to a valid CSS selector or DOM element reference. This restricts the draggable element's movement to within the specified container boundaries, preventing it from being dragged outside the designated area. This is essential for maintaining layout integrity and creating bounded interaction zones. The example below demonstrates drag area constraint implementation.

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

A droppable zone is an area that accepts and responds to draggable elements when they are released over it. The [`Droppable`](https://ej2.syncfusion.com/documentation/api/base/droppable/) utility converts any DOM element into a valid drop target, enabling interaction with draggable items.

When a draggable element is released over a droppable zone, the [drop](https://ej2.syncfusion.com/documentation/api/base/droppable/#drop) event is triggered. This event provides detailed information through its arguments, including references to the dragged element (`droppedElement`), the drop target (`target`), and the original drag source. This data enables implementation of actions such as appending elements, updating data models, applying visual feedback, or triggering state changes based on the drop interaction.

Refer to the following example to implement droppable zones with drag-and-drop interaction handling.

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