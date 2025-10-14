---
layout: post
title: Connector Customization in React Diagram Component | Syncfusion®
description: Learn how to customize connector properties such as decorator shapes, styles, and gradient effects in the Syncfusion React Diagram Component.
control: Connector customization
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Connector Customization

The Diagram component provides extensive customization options for connectors, allowing developers to modify visual appearance, behavior, and interaction properties. This guide covers decorator shapes, styling options, spacing controls, bridging effects, and advanced connector features.

## Decorator Shapes and Customization

Decorators are visual elements that appear at the starting and ending points of connectors, typically used to indicate direction or relationship types such as arrows, circles, diamonds, or custom shapes.

### Basic Decorator Configuration

* Starting and ending points of a connector can be decorated with some customizable shapes like arrows, circles, diamond, or path. The connection end points can be decorated with the [`sourceDecorator`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#sourcedecorator) and [`targetDecorator`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#targetdecorator) properties of the connector.

* The [`shape`](https://helpej2.syncfusion.com/react/documentation/api/diagram/decoratorShapes/) property of `sourceDecorator` allows to define the shape of the decorators. Similarly, the `shape` property of `targetDecorator` allows to define the shape of the decorators.

* To create custom shape for source decorator, use the [`pathData`](https://helpej2.syncfusion.com/react/documentation/api/diagram/decorator/#pathdata) property to define SVG path strings for both source and target decorators.

* The following code example illustrates how to create decorators of various shapes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorDecorators-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorDecorators-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorDecorators-cs1" %}

### Customize the Decorator Appearance

The visual appearance of decorators can be customized using stroke and fill properties to match design requirements or highlight specific connector types.

* The source decorator’s [`strokeColor`](https://helpej2.syncfusion.com/react/documentation/api/diagram/strokeStyle/#strokecolor), [`strokeWidth`](https://helpej2.syncfusion.com/react/documentation/api/diagram/strokeStyle/#strokewidth), and [`strokeDashArray`](https://helpej2.syncfusion.com/react/documentation/api/diagram/strokeStyle/#strokedasharray) properties are used to customize the color, width, and appearance of the decorator.

* To set the border stroke color, stroke width, and stroke dash array for the target decorator, use [`strokeColor`](https://helpej2.syncfusion.com/react/documentation/api/diagram/strokeStyle/#strokecolor), `strokeWidth` , and `strokeDashArray`.

* To set the size for source and target decorator, use width and height properties.

The following code example illustrates how to customize the appearance of the decorator.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsDecorator-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsDecorator-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsDecorator-cs1" %}

### Gradient Styling for Decorators

The gradient property applies smooth color transitions to decorators, providing enhanced visual appeal for complex diagrams or when highlighting important connections.

The gradient property supports two types of gradients:
 * Linear - Creates a straight-line color transition.
 * Radial - Creates a circular color transition from center outward.

The following code example illustrates how to apply gradient effects to decorators.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorGradient-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorGradient-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorGradient-cs1" %}

## Connector Appearance and Styling

The visual appearance of connector segments can be customized to distinguish different types of connections or match application themes.

The connector's `strokeWidth`, `strokeColor`, `strokeDashArray`, and [`opacity`](https://helpej2.syncfusion.com/react/documentation/api/diagram/strokeStyle/#opacity) properties are used to customize the appearance of the connector segments.

The [`visible`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#visible) property of the connector enables or disables the visibility of the connector.

Default values for all connectors can be set using the `getConnectorDefaults` properties. This is useful when all connectors share the same type or properties, allowing common settings to be centralized.

## Spacing and Padding Controls

### Padding between Connectors and Nodes

Padding creates visual separation between connector endpoints and the nodes they connect, preventing connectors from appearing to touch or overlap with node boundaries.

* The [`sourcePadding`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#sourcepadding) property of connector defines space between the source point and the source node of the connector.

* The [`targetPadding`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#targetpadding) property of connector defines space between the end point and the target node of the connector.

* The following code example illustrates how to leave space between the connection end points and source and target nodes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectNode-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectNode-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectNode-cs2" %}

## Advanced Connector Features

### Line Bridging for Intersection Handling

Line bridging creates visual bridges where connectors intersect, helping users distinguish between different connection paths in complex diagrams. By default, [`bridgeDirection`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#bridgedirection) is set to top, with the bridge appearing based on the specified direction.
Bridging can be enabled or disabled using either **connector.constraints** or **diagram.constraints**. The following code example illustrates how to enable line bridging.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBridging-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBridging-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsBridging-cs1" %}

N> The connector bridging module must be injected into the diagram to use this feature.

The [`bridgeSpace`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#bridgespace) property of connectors can be used to define the width for line bridging.

**Limitation**: Bezier segments do not support bridging functionality.

### Hit Padding for Interaction

* The [`hitPadding`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#hitpadding) property defines the clickable area around the connector path, making it easier for users to select connectors, especially thin ones. This improves user experience by expanding the interactive zone without changing the visual appearance. The default value for hitPadding is 10.

* The following code example illustrates how to specify hit padding for connectors.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorHitPadding-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorHitPadding-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorHitPadding-cs1" %}

## Corner Radius for Rounded Connectors

Corner radius creates connectors with rounded corners instead of sharp angles, providing a more polished appearance for diagrams. The radius of the rounded corner is set with the [`cornerRadius`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#cornerradius) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsCornerRadius-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsCornerRadius-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsCornerRadius-cs1" %}

## Connector Appearance

* The connector’s `strokeWidth`, `strokeColor`, `strokeDashArray`, and `opacity`] properties are used to customize the appearance of the connector segments.

* The [`visible`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#visible) property of the connector enables or disables the visibility of connector.

* Default values for all the `connectors` can be set using the `getConnectorDefaults` properties. For example, if all connectors have the same type or having the same property then such properties can be moved into `getConnectorDefaults`.

### Segment Appearance

The following code example illustrates how to customize the segment appearance.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsAppearance-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsAppearance-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsAppearance-cs1" %}

## Connector Constraints and Behavior

* The [`constraints`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#constraints) property of connector allows to enable/disable certain features of connectors.

* To enable or disable the constraints, refer `constraints`.

The following code illustrates how to disable selection for a connector.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsConstraints-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsConstraints-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsConstraints-cs1" %}

## Additional Connector Properties

### Adding Custom Information

The [`addInfo`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#addinfo) property of connectors allows maintaining additional information or metadata associated with connectors for application-specific requirements.

``` ts

var connectors = {
        id: 'connector1',
        //AddInfo for connector
        addInfo: {type:'connector',id:'connector1'},
        type: 'Straight',
        sourcePoint: {x: 300,y: 100},
        targetPoint: {x: 300,y: 200}
    }

```

## ZIndex for Connector

The connectors [`zIndex`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#zindex) property specifies the stack order of connectors. A connector with a greater stack order appears in front of connectors with lower stack orders, enabling precise control over visual layering.

The following code illustrates how to render connectors based on stack order.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5zindex-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5zindex-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5zindex-cs1" %}

### Connector Spacing for Routing

* The [`connectorSpacing`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#connectorspacing) property defines the minimum distance between the source node and the connector when automatic routing occurs. This determines how far the connector will reroute around obstacles or the minimum length for new segments.

The following code example illustrates how to configure connector spacing.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsDecAppearance-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsDecAppearance-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsDecAppearance-cs1" %}

#### Maximum Segment Thumbs

The [`maxSegmentThumb`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#maxsegmentthumb)property limits the number of segment manipulation handles displayed on a connector, helping maintain clean interfaces in complex diagrams.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5MaxSegThump-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5MaxSegThump-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5MaxSegThump-cs1" %}

![maxSegmentThumb](images/maxSegmentThumb.png)

## Reset Segments

The [`resetSegments`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#resetsegments) method resets connector segments to their default state based on connection points. This operation removes custom segments and restores connectors to their original configuration, useful for cleaning up user modifications.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ResetSegment-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ResetSegment-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ResetSegment-cs1" %}

## Dynamic Connector Manipulation

### Enable Connector Splitting

Connector splitting allows creating new connections when a node is dropped onto an existing connector. The connector splits at the drop point, creating connections between the new node and the existing connected nodes. Enable this feature by setting [`enableConnectorSplit`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#enableconnectorsplit) to **true**. The default value is **false**.

The following code illustrates how to enable connector splitting functionality..

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorSplit-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorSplit-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorSplit-cs1" %}

![Enable Connector Split](images/EnableSplit.gif)

### Preserve Connector Styling During Splitting

When splitting a connector using [`enableConnectorSplit`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#enableconnectorsplit), the newly created connector appears as a default connector without inheriting the original connector's styling. To maintain consistent styling, use the collectionChange event to apply the original connector's properties to the new connector.

The following example demonstrates how to preserve the original connector's styling for newly created connectors during splitting:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5PreserveStyle-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5PreserveStyle-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5PreserveStyle-cs1" %}