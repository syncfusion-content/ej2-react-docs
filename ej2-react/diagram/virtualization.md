---
layout: post
title: Virtualization in React Diagram component | Syncfusion
description: Learn here all about Virtualization in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Virtualization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in React Diagram component

Virtualization is a technique to optimize the performance of diagrams, especially when working with larger diagrams

## Virtualization in Diagram

Virtualization optimizes the diagram performance by loading only the diagramming objects within the visible area, or ViewPort, of the Scroll Viewer. This means that only the nodes and connectors that are currently in view are loaded, while the remaining objects are loaded dynamically as they come into view.

This feature significantly enhances performance, especially when working with diagrams containing a large number of nodes and connectors. By reducing the number of objects that need to be processed at any given time, virtualization ensures smoother interactions, such as loading and dragging items within the diagram.

To enable virtualization in a diagram, you need to include the virtualization constraint in the diagram's constraints. For more information, refer to the  [`diagram constraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/#constraints).

The following code illustrates how to enable Virtualization mode in the diagram.

```js
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
