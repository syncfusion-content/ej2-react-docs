---
layout: post
title: Layers in React Diagram Component | Syncfusion®
description: Learn here all about Layers in Syncfusion® React Diagram Component of Syncfusion Essential® JS 2 and more.
control: Layers 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Layers in React Diagram Component

**Layers** provide a powerful organizational system for managing diagram elements by grouping related shapes into named categories. This functionality enables developers to build complex diagrams with selective viewing, interaction control, and bulk property management across multiple elements simultaneously.

## Core Layer Properties

In a diagram, [Layers](https://ej2.syncfusion.com/react/documentation/api/diagram/layerModel/)  enable modification of properties for all shapes assigned to a specific layer. The primary configurable properties include:

* **Objects** - Define which elements belong to the layer.
* **Visible** - Control layer visibility.
* **Lock** - Prevent interactions with layer elements.
* **AddInfo** - Store additional custom information.

## Objects

The layer's [objects](https://ej2.syncfusion.com/react/documentation/api/diagram/layer/#objects) property specifies which diagram elements belong to that layer. This property contains a collection of element IDs that defines the categories of nodes and connectors the layer encompasses.

**Use case**: Separate different types of diagram elements for independent management - for example, keeping background elements in one layer and interactive elements in another.

In the following example, basic shapes are categorized in layer 1, and flow shapes are categorized in layer 2:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/layers/layers-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/layers/layers-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/layers/layers-cs1" %}


## Visible

The layer's [visible](https://ej2.syncfusion.com/react/documentation/api/diagram/layer/#visible)property controls the visibility of all elements assigned to the layer. This allows selective display of different diagram sections without removing elements permanently.

**Use case**: Create diagrams with multiple views where users can toggle between different information layers, such as showing only critical path items in a project diagram.

In the following example, the visibility of layer one is set to false. By default, the `visible` property of a layer is set to **true**:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/layers/layers-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/layers/layers-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/layers/layers-cs2" %}

## Lock

The layer's [lock](https://ej2.syncfusion.com/react/documentation/api/diagram/layer/#lock) property prevents or allows changes to element dimensions and positions. When a layer is locked, all interactions with objects in that layer are disabled, including selecting, dragging, rotating, and connecting operations.

**Use case**: Protect template elements or background graphics from accidental modification while allowing users to work with other diagram elements.

In the following example, the objects in layer one are locked. By default, the `lock` property of a layer is set to **false**:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/layers/layers-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/layers/layers-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/layers/layers-cs3" %}



## AddInfo

The [`addInfo`](https://ej2.syncfusion.com/react/documentation/api/diagram/layer/#addinfo) property allows storage of additional custom information with layers. This can be useful for storing metadata, configuration settings, or application-specific data associated with the layer.

**Use case**: Store layer descriptions, creation timestamps, owner information, or custom application data for enhanced layer management.

The following code illustrates how to add additional information to layers:

```ts

// A node is created and stored in nodes array.
let nodes: NodeModel[] = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{
            content: 'Default Shape'
        }]
    },
    {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        shape: {
            type: 'Path',
            data: 'M540.3643,137.9336L546.7973,159.7016L570.3633,159.7296L550.7723,171.9366L558.9053,194.9966L540.3643,' +
                '179.4996L521.8223,194.9966L529.9553,171.9366L510.3633,159.7296L533.9313,159.7016L540.3643,137.9336z'
        },
        annotations: [{
            content: 'Path Element'
        }]
    }
];
let connectors: ConnectorModel[] = [{
    id: 'connector1',
    type: 'Straight',
    sourcePoint: {
        x: 100,
        y: 300
    },
    targetPoint: {
        x: 200,
        y: 400
    },
}];
let addInfo: Object = { Description: 'Layer1' };
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      connectors={connectors}
      // Add layer
      layers = {
            [
                {
                    id: 'layer1',
                    visible: true,
                    objects: ['node1', 'node2'],
                    addInfo: addInfo
                },
                {
                    id: 'layer2',
                    visible: true,
                    objects: ['node2'],
                }
            ]
        }
      // render initialized Diagram
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

## Add Layer at Runtime

Layers can be added at runtime using the [`addLayer`](https://ej2.syncfusion.com/react/documentation/api/diagram/#addlayer) public method.

The layer's [`ID`](https://ej2.syncfusion.com/react/documentation/api/diagram/layer/#id) property defines the ID of the layer, which is used to find the layer at runtime and apply any customizations. You can also add new objects to the new layer using the `addLayer` method.

The following code illustrates how to add a new layer with new connectors stored in an object array of the new layer:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/layers/layers-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/layers/layers-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/layers/layers-cs4" %}


## Remove Layer at Runtime

Layers can be removed at runtime by using the [`removeLayer`](https://ej2.syncfusion.com/react/documentation/api/diagram/#removelayer) public method.

To remove a layer, pass the ID of the layer you want to remove as a parameter to the `removeLayer` method.

The following code illustrates how to remove a layer.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/layers/layers-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/layers/layers-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/layers/layers-cs5" %}


### MoveObjects

You can move objects from one layer to another dynamically using the [`moveObjects`](https://ej2.syncfusion.com/react/documentation/api/diagram/#moveobjects) public method of the diagram control. This can be useful for managing complex diagrams with multiple layers where you need to update the categorization of elements based on user interaction or other dynamic conditions.

The following code illustrates how to move objects from one layer to another layer.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/layers/layers-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/layers/layers-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/layers/layers-cs6" %}

## Z-Index

[`zIndex`](https://ej2.syncfusion.com/react/documentation/api/diagram/layer/#zindex) property of a layer defines its position in the stacking order within the diagram. Higher z-index values render above lower values, allowing control over which layers appear in front of others.


### Bring Layer Forward

Move a layer forward in the stacking order using the  [`bringLayerForward`](https://ej2.syncfusion.com/react/documentation/api/diagram/#bringlayerforward) public method.

The following code illustrates how to bring forward to layer.

```ts

// move the layer forward
diagram.bringLayerForward('layer1');

```

### Send Layer Backward

Move a layer backward in the stacking order using the [`sendLayerBackward`](https://ej2.syncfusion.com/react/documentation/api/diagram/#sendlayerbackward) public method.


```ts
// move the layer backward
diagram.sendLayerBackward('layer1');
  
```

The following code illustrates how to send the layer forward/backward to another layer.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/layers/layers-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/layers/layers-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/layers/layers-cs7" %}

### Layer and Objects Rendering Order

The rendering of diagram elements with layer properties involves grouping them within a `diagram_diagramLayer` for basic shape nodes and `diagram_nativeLayer_svg` for SVG-native elements. Even if different types of nodes are added within the same layer, the rendering at the DOM level occurs in separate layers. Therefore, when executing layering commands like [`bringLayerForward`](https://ej2.syncfusion.com/react/documentation/api/diagram/#bringlayerforward) and [`sendLayerBackward`](https://ej2.syncfusion.com/react/documentation/api/diagram/#sendlayerbackward), the native SVG elements will always render above the basic shape elements. 

The order of rendering is as follows: HTML shapes -> SVG shapes -> Path data shapes & Basic shapes.

## Clone Layer

Layers can be cloned with its object by using the [`cloneLayer`](https://ej2.syncfusion.com/react/documentation/api/diagram/#clonelayer) public method.This creates an identical copy of the layer and all its assigned elements.

**Use case**: Create template layers or duplicate complex layer configurations for reuse in different diagram sections.

The following code illustrates how clone the layer.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/layers/layers-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/layers/layers-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/layers/layers-cs8" %}

## Active Layer

The active layer represents the layer with the highest z-index in a diagram. When objects are added at runtime, they are automatically assigned to the active layer. If no layers are explicitly defined, a default layer is created and set as the **active layer**. When multiple layers exist, the layer with the highest z-index becomes the active layer.

**Use case**: Ensure new elements are added to the appropriate layer in multi-layer diagrams, particularly in interactive editing scenarios.

### Get ActiveLayer

Retrieve the current active layer of the diagram using the [`getActiveLayer`](https://ej2.syncfusion.com/react/documentation/api/diagram/#getactivelayer) public method.

The following code illustrates how fetch active layer from the diagram

```ts
    
// gets the active layer of diagram
diagram.getActiveLayer();

```

### Set ActiveLayer

You can set any layer to be the active layer of the diagram by using the[`setActiveLayer`](https://ej2.syncfusion.com/react/documentation/api/diagram/#setactivelayer) public method.

The following code illustrates how to set active layer for diagram

```ts
// set the active layer
//@param layerName defines the name of the layer which is to be active layer
diagram.setActiveLayer('layer2');

```