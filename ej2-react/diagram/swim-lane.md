---
layout: post
title: Swimlane in React Diagram | Syncfusion®
description: Create horizontal or vertical Swimlane nodes in the React Diagram to visualize cross-functional business processes grouped by department or role.
control: Swim lane 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Swimlane in React Diagram

Swimlanes are specialized diagram nodes that visualize business processes by organizing activities into distinct lanes or sections. Each lane typically represents a department, role, or responsibility area, making it easy to understand who is responsible for each step in a process. Swimlanes are particularly useful for workflow documentation, process mapping, and cross-functional process analysis.

![Swimlane](images/swimlane-image.png)

## Create a Swimlane
To create a swimlane, set the node's shape type to [`swimlane`](https://ej2.syncfusion.com/react/documentation/api/diagram/swimLaneModel). Swimlanes are arranged horizontally by default and require proper configuration of headers and lanes to function correctly.

N> When setting a swimlane's ID, ensure that it does not contain whitespace or special characters, including underscores (_), and does not begin with a number.

The following code example demonstrates how to define a basic swimlane object:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/swimlane/es5Swimlaneheader-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/swimlane/es5Swimlaneheader-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/swimlane/es5Swimlaneheader-cs1" %}

## Orientation

Swimlanes support two orientation modes to accommodate different layout requirements and design preferences.

### Horizontal Orientation (default)
Lanes are arranged from top to bottom, with the header positioned on the left side. This orientation works well for processes that flow from left to right.

### Vertical Orientation
Lanes are arranged from left to right, with the header positioned at the top. This orientation suits processes that flow from top to bottom.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/swimlane/es5SwimlaneOrientation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/swimlane/es5SwimlaneOrientation-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/swimlane/es5SwimlaneOrientation-cs1" %}


## Headers

The header serves as the primary identifying element of a swimlane, providing a title or description for the entire swimlane container. The [`header`](https://ej2.syncfusion.com/react/documentation/api/diagram/headerModel) property allows customization of both content and appearance.

N> Use the header to select and drag the swimlane.

The following code example illustrates how to define a swimlane header.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/swimlane/es5Swimlaneheader-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/swimlane/es5Swimlaneheader-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/swimlane/es5Swimlaneheader-cs2" %}

### Header Customization

Swimlane headers can be extensively customized to match design requirements and improve visual clarity. The dimensions can be controlled using [`width`](https://ej2.syncfusion.com/react/documentation/api/diagram/headerModel#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/diagram/headerModel#height) properties. Visual styling, including background color and text formatting, can be applied through the [`style`](https://ej2.syncfusion.com/react/documentation/api/diagram/headerModel#style) property. The swimlane's orientation can be controlled using the [`orientation`](https://ej2.syncfusion.com/react/documentation/api/diagram/swimLaneModel#orientation) property. See the [Orientation](#orientation) section for details.

N> By default, the swimlane orientation is **Horizontal**.

The following code example illustrates how to customize the swimlane header.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/swimlane/es5HeaderCustomize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/swimlane/es5HeaderCustomize-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/swimlane/es5HeaderCustomize-cs1" %}

### Dynamic Header Customization

Headers can be modified programmatically during runtime to respond to user interactions or changing business requirements. This capability enables dynamic updating of swimlane titles, styling, and other properties based on application state or user input.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/swimlane/es5Dynamicheader-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/swimlane/es5Dynamicheader-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/swimlane/es5Dynamicheader-cs1" %}

### Header Editing

The Diagram component supports editing swimlane headers at runtime. Double-click the header label to edit it. The following image illustrates swimlane header editing.

![Header Editing](images/swimlane-header-edit.gif)

## Limitations

* Connectors cannot be added directly to swimlane.

## See Also

* [Nodes](nodes.md)
* [Connectors](connectors.md)
* [Symbol Palette](symbol-palette.md)
* [Swimlane Palette](swimlane-palette.md)