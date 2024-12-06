---
layout: post
title: Mind-map layout in React Diagram component | Syncfusion®
description: Learn here all about Mind-map layout in Syncfusion® React Diagram component of Syncfusion Essential® JS 2 and more.
control: Mind-map layout
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Mind Map layout in React Diagram control

A mind map is a diagram that displays the nodes as a spider diagram organizes information around a central concept. To create mind map, the [`type`](https://ej2.syncfusion.com/react/documentation/api/diagram/layout/#type) of layout should be set as `MindMap`.


## Mind Map Orientation

An [`Orientation`](https://ej2.syncfusion.com/react/documentation/api/diagram/layout/#orientation) of a `MindMapTreeLayout` is used to arrange the tree layout according to a specific direction. By default, the orientation is set to Horizontal. 

The following code example illustrates how to create an mindmap layout.


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
|Horizontal|Aligns the tree layout from left to right|
|Vertical|Aligns the tree layout from top to bottom|

>Note: If you want to use mind map layout in diagram, you need to inject MindMap in the diagram.


## Mind Map branch

You can also decide the branch for mind map using [`getBranch`](https://ej2.syncfusion.com/react/documentation/api/diagram/layoutModel/#getbranch) method. The following code demonstrates how to set all branches on the right side for mind map layout using `getBranch` method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/mindMap-cs2/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/mindMap-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/mindMap-cs2" %}

![Mind map layout](images/mindmap.png)