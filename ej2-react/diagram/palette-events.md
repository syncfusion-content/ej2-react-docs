---
layout: post
title: Symbol Palette Events in EJ2 React Diagram Component | Syncfusion®
description: Learn here all about Symbol palette events in Syncfusion® React Diagram Component including drag-drop events, palette expansion, and selection change events.
platform: ej2-react
control: Symbol palette 
documentation: ug
domainurl: ##DomainURL##
---

# Symbol Palette Events in EJ2 React Diagram Component

The Symbol Palette component provides several events that trigger during user interactions such as dragging symbols, expanding palettes, and changing selections. These events enable developers to customize behavior, provide visual feedback, and implement custom logic during symbol palette operations.

## DragEnter Event

The [`DragEnter`](https://ej2.syncfusion.com/react/documentation/api/diagram/iDragEnterEventArgs) event triggers when a symbol enters the diagram surface while being dragged from the symbol palette. This event allows developers to customize the appearance of the dragged symbol or validate drop targets dynamically based on the diagram's current state.

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

The [`DragLeave`](https://ej2.syncfusion.com/react/documentation/api/diagram/iDragLeaveEventArgs) event occurs when a dragged symbol leaves the diagram surface without being dropped. This event is particularly useful for cleaning up temporary visual changes applied during the drag operation or resetting any modified states.

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

The [`DragOver`](https://ej2.syncfusion.com/react/documentation/api/diagram/iDragOverEventArgs) event triggers continuously while a symbol is being dragged over the diagram surface. This event provides real-time feedback during drag operations and enables developers to implement dynamic drop validation.

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

The [`Drop`](https://ej2.syncfusion.com/react/documentation/api/diagram/iDropEventArgs/) event triggers when a symbol is successfully dropped onto the diagram surface. This event serves as the final step in the drag-and-drop process and provides access to both the dropped symbol and the target location.

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

The [`PaletteExpanding`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPaletteExpandArgs/) event triggers when a palette group is expanded or collapsed within the symbol palette. This event enables developers to control palette expansion behavior and implement custom logic based on palette state changes.

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

The [`PaletteSelectionChange`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPaletteSelectionChangeArgs/) event triggers when the selection changes within the symbol palette. This event provides information about both the previously selected and newly selected symbols, enabling developers to respond to selection changes appropriately.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/events/palette-selection/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/events/palette-selection/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/events/palette-selection" %}

