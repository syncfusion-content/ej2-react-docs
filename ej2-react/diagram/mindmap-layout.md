---
layout: post
title: Mind Map Layout in React Diagram | Syncfusion®
description: Build mind map diagrams in the React Diagram with horizontal or vertical branch orientation radiating from a central root concept.
control: Mind-map layout
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Mind Map Layout in React Diagram

A mind map is a powerful visualization technique that organizes information around a central concept, with related topics branching outward in a tree-like structure. This layout is particularly useful for brainstorming, knowledge mapping, and hierarchical data representation. The React Diagram component supports mind map layouts through the [`type`](https://ej2.syncfusion.com/react/documentation/api/diagram/layout#type) property, which should be set to **MindMap**.


## Mind Map Orientation

The [`Orientation`](https://ej2.syncfusion.com/react/documentation/api/diagram/layout#orientation) property determines how the mind map tree structure is arranged spatially. By default, the orientation is set to **Horizontal**, positioning the root node centrally with branches extending left and right.

N> To use the mind map layout in the diagram, inject the MindMap module into the DiagramComponent.

The following code example demonstrates how to create a mind map layout:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/mindMap-cs1/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/mindMap-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/mindMap-cs1" %}


The following table outlines the various orientation types available:

|Orientation Type |Description|
| -------- | ----------- |
|Horizontal <br> *(Default)*|Arranges the mind map with the root node centered, branches extending horizontally left and right.|
|Vertical|Arranges the mind map with the root node at the top or center, branches extending vertically up and down.|

![Mind map layout showing a branched structure with nodes arranged around a central concept](images/mindmap.png)


## Mind Map Branch

The mind map layout provides flexible branch positioning through the [`getBranch`](https://ej2.syncfusion.com/react/documentation/api/diagram/layoutmodel#getbranch) method. This method allows you to control which side of the root node each branch appears on, enabling customized layouts based on your specific requirements.

The `getBranch` method receives a node object as a parameter and should return a string value indicating the desired branch position: **Left**, **Right**, **SubLeft**, or **SubRight** for nested branches. The following code example shows how to position all branches on the right side of the mind map:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/mindMap-cs2/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/mindMap-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/mindMap-cs2" %}

## Common Use Cases

Mind map layouts are ideal for:
- **Brainstorming sessions**: Visualizing ideas and their relationships.
- **Knowledge mapping**: Organizing complex information hierarchically.
- **Decision trees**: Mapping out decision processes and outcomes.
- **Organizational charts**: Displaying reporting structures with a central focus.
- **Project planning**: Breaking down projects into manageable components.

## Best Practices

Follow these practices to build clear and readable mind maps:

- Keep the root node content concise and descriptive.
- Use consistent styling for nodes at the same hierarchical level.
- Limit branch depth to maintain readability.
- Consider color coding to differentiate branch categories.
- Ensure adequate spacing between branches to prevent overlap.

## Troubleshooting

|Issue |Cause |Resolution|
| -------- | ----------- | ----------- |
|Layout does not apply and no nodes render|`MindMap` module is not injected into the Diagram|Inject the MindMap module into the DiagramComponent using the Inject component.|
|Branches overlap or appear too close together|Insufficient `horizontalSpacing` / `verticalSpacing` in the layout|Increase the spacing properties on the `Layout` configuration|
|All branches render on one side only|`getBranch` always returns the same branch value|Verify the `getBranch` logic returns context-appropriate values per node|