---
layout: post
title: Symbol Palette Events in EJ2 React Diagram component | Syncfusion
description: Learn here all about Symbol palette in React Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Symbol palette 
documentation: ug
domainurl: ##DomainURL##
---

# Symbol Palette Events in EJ2 React Diagram component

There are some events which will get triggered while interacting with the symbol palette. They are explained below.

## DragEnter event

[`DragEnter`](https://ej2.syncfusion.com/react/documentation/api/diagram/iDragEnterEventArgs) event triggers when the shape enters the diagram surface while dragging it from symbol palette. You can customize the style of the dragged shape using this event. This allows for dynamic styling changes based on the diagram's context.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/events/drag-enter/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/events/drag-enter/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/events/drag-enter" %}

## DragLeave event

[`DragLeave`](https://ej2.syncfusion.com/react/documentation/api/diagram/iDragLeaveEventArgs) event occurs when a shape leaves the diagram surface after being dragged inside but not dropped. This can be useful for resetting styles or handling any clean-up tasks when a shape is not intended to be placed on the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/events/drag-leave/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/events/drag-leave/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/events/drag-leave" %}

## DragOver event

[`DragOver`](https://ej2.syncfusion.com/react/documentation/api/diagram/iDragOverEventArgs) event triggered when a shape is dragged over diagram while being moved from the symbol palette. This event can be used to provide visual feedback or to determine if the current drop target is valid.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/events/drag-over/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/events/drag-over/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/events/drag-over" %}

## Drop event

[`Drop`](https://ej2.syncfusion.com/react/documentation/api/diagram/iDropEventArgs/) event triggered when a shape is dropped onto the diagram surface. This event is useful for customizing the shape's appearance and properties after it is dropped.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/events/drop/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/events/drop/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/events/drop" %}

## PaletteExpanding event

[`PaletteExpanding`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPaletteExpandArgs/) event triggered when the palette expanded / collapsed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/events/palette-expand/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/events/palette-expand/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/events/palette-expand" %}

## PaletteSelectionChange event

[`PaletteSelectionChange`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPaletteSelectionChangeArgs/) event triggered after the selection changes in the symbol palette. This event can be used to enable/disable functionality based on the selected symbol.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/events/palette-selection/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/events/palette-selection/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/events/palette-selection" %}

