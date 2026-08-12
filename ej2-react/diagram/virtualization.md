---
layout: post
title: Virtualization in React Diagram | Syncfusion®
description: Enable Virtualization in the React Diagram to render only the in-viewport nodes and connectors, keeping large diagrams fast and memory-light.
control: Virtualization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in React Diagram

Virtualization is a performance optimization technique that significantly improves diagram rendering and interaction speed, particularly when working with large-scale diagrams containing hundreds or thousands of nodes and connectors.

## Understanding Virtualization in Diagram

Virtualization enhances diagram performance by implementing on-demand loading of diagramming objects. Only the nodes and connectors currently visible within the diagram's viewport are rendered and processed, while objects outside the visible area remain unloaded until they enter the view during scrolling or panning operations.

This selective rendering approach provides substantial performance benefits:

* **Reduced Memory Usage**: Only visible objects consume memory resources.
* **Faster Initial Load**: Diagrams render quickly regardless of total object count.
* **Smooth Interactions**: Dragging, zooming, and panning remain responsive.
* **Scalable Performance**: Performance remains consistent as diagram size increases.

## When to Enable Virtualization

Virtualization is recommended for diagrams that meet any of these criteria:

* Contain 100 or more nodes and connectors.
* Experience performance issues during scrolling or zooming.
* Require frequent updates to large datasets.
* Display complex organizational charts, network diagrams, or flowcharts.

## Enabling Virtualization

To activate virtualization, include the `Virtualization` constraint in the diagram's constraints property. The virtualization feature works in conjunction with the diagram's scrolling capabilities to manage object loading dynamically. For more information, refer to the [`diagram constraints`](https://helpej2.syncfusion.com/react/documentation/api/diagram#constraints).

The following code illustrates how to enable Virtualization mode in the diagram.

```js
import { DiagramComponent, DiagramConstraints } from "@syncfusion/ej2-react-diagrams";

function App() {
  return (
    <DiagramComponent
      id="container"
      width={700}
      height={600}
      //Enable virtualization in diagram
      constraints={
        DiagramConstraints.Default | DiagramConstraints.Virtualization
      }
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/virtualization/virtualization-cs1/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/virtualization/virtualization-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/virtualization/virtualization-cs1" %}
