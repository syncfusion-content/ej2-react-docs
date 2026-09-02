---
layout: post
title: Swimlane Palette in React Diagram | Syncfusion®
description: Add pre-built Swimlane and Phase shapes to the React Diagram Symbol Palette for fast drag-and-drop assembly of process diagrams.
control: Swim lane in symbol palette 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Swimlane Palette in React Diagram

The React Diagram component provides comprehensive support for adding swimlane shapes and phases to the symbol palette. Swimlanes help organize process flows by grouping related activities into lanes, making complex diagrams more readable and structured.

## Add Swimlane to Palette

The diagram component supports adding both swimlane containers and individual phases to the symbol palette. This enables users to drag and drop pre-configured swimlane elements into their diagrams.

The following example shows how to add preconfigured swimlane and phase shapes to the symbol palette.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/swimlane/es5Palette-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/swimlane/es5Palette-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/swimlane/es5Palette-cs1" %}

## Drag and Drop Swimlanes from the Palette

Drag-and-drop support lets you add swimlane and phase shapes from the symbol palette directly onto the diagram surface.

The following behaviors are supported:

* Swimlane shapes support drag-and-drop from the palette.
* Horizontal lanes can be added to vertical swimlanes, and vice versa.

The following constraint applies:

N> A phase can only be dropped onto a swimlane with the same orientation.

The following image illustrates how to drag a symbol from the palette.

![Drag symbol from palette](images/swimlane-drag-dropGif.gif)

## See Also

* [Swimlane](swim-lane.md)
* [Symbol Palette](symbol-palette.md)
* [Phase](phase.md)