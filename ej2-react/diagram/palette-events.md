---
layout: post
title: Symbol Palette Events in React Diagram | Syncfusion®
description: Subscribe to React Diagram Symbol Palette events for drag, drop, expand, and selection changes to react on user actions during symbol placement.
platform: ej2-react
control: Symbol palette 
documentation: ug
domainurl: ##DomainURL##
---

# Symbol Palette Events in React Diagram

The Symbol Palette and Diagram interaction process exposes several events that trigger during user interactions such as dragging symbols, expanding palettes, and changing selections. These events enable developers to customize behavior, provide visual feedback, and implement custom logic during symbol palette operations.

Before working with these events, set up a Symbol Palette and Diagram as described in the [Symbol Palette getting-started](./symbol-palette) topic.

## DragEnter Event

The [`dragEnter`](https://ej2.syncfusion.com/react/documentation/api/diagram#dragenter) event triggers when a symbol enters the diagram surface while being dragged from the symbol palette. This event is wired on the `DiagramComponent` and allows developers to customize the appearance of the dragged symbol or validate drop targets dynamically based on the diagram's current state. For the complete list of event-argument properties, see the [`IDragEnterEventArgs`](https://ej2.syncfusion.com/react/documentation/api/diagram/iDragEnterEventArgs) reference.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/events/drag-enter/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/events/drag-enter/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/events/drag-enter" %}

## DragLeave Event

The [`dragLeave`](https://ej2.syncfusion.com/react/documentation/api/diagram#dragleave) event fires when the dragged symbol leaves the diagram surface before being dropped. This event is wired on the `DiagramComponent` and is particularly useful for cleaning up temporary visual changes applied during the drag operation or resetting any modified states. For the complete list of event-argument properties, see the [`IDragLeaveEventArgs`](https://ej2.syncfusion.com/react/documentation/api/diagram/iDragLeaveEventArgs) reference.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/events/drag-leave/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/events/drag-leave/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/events/drag-leave" %}

## DragOver Event

The [`dragOver`](https://ej2.syncfusion.com/react/documentation/api/diagram#dragover) event triggers continuously while a symbol is being dragged over the diagram surface. This event is wired on the `DiagramComponent` and provides real-time feedback during drag operations, enabling developers to implement dynamic drop validation. The event arguments are of type [`IDragOverEventArgs`](https://ej2.syncfusion.com/react/documentation/api/diagram/iDragOverEventArgs).

* **Key args:** `element`, `source`, `target`, `cancel`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/events/drag-over/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/events/drag-over/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/events/drag-over" %}

## Drop Event

The [`drop`](https://ej2.syncfusion.com/react/documentation/api/diagram#drop) event triggers when a symbol is successfully dropped onto the diagram surface. This event is wired on the `DiagramComponent`, serves as the final step in the drag-and-drop process, and provides access to both the dropped symbol and the target location. A successful drop adds the dragged symbol as a node on the diagram. The event arguments are of type [`IDropEventArgs`](https://ej2.syncfusion.com/react/documentation/api/diagram/iDropEventArgs).

* **Key args:** `element`, `source`, `target`, `position`, `cancel`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/events/drop/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/events/drop/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/events/drop" %}

## PaletteExpanding Event

The [`paletteExpanding`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette#paletteexpanding) event triggers when a palette group is expanded or collapsed within the symbol palette. This event is wired on the `SymbolPaletteComponent` and enables developers to control palette expansion behavior and implement custom logic based on palette state changes. The event arguments are of type [`IPaletteExpandArgs`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPaletteExpandArgs).

* **Key args:** `palette`, `isExpanded`, `cancel`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/events/palette-expand/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/events/palette-expand/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/events/palette-expand" %}

## PaletteSelectionChange Event

The [`paletteSelectionChange`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette#paletteselectionchange) event triggers when the selection changes within the symbol palette. This event is wired on the `SymbolPaletteComponent` and provides information about both the previously selected and newly selected symbols, enabling developers to respond to selection changes appropriately. For the complete list of event-argument properties, see the [`IPaletteSelectionChangeArgs`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPaletteSelectionChangeArgs) reference.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/events/palette-selection/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/events/palette-selection/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/events/palette-selection" %}

## See Also

* [Symbol Palette](./symbol-palette)
* [Symbol Palette customization](./palette-customization)
* [Nodes](./nodes)
* [Diagram events](./nodes-events)

