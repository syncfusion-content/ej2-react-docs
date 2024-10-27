---
layout: post
title: Layers in React Diagram component | Syncfusion
description: Learn here all about Layers in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Layers 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Layers in React Diagram component

**Layer** organizes related shapes within a diagram control as named categories. Assigning shapes to different layers enables selective viewing, removal, and locking of distinct shape categories.

In a diagram, [Layers](https://ej2.syncfusion.com/react/documentation/api/diagram) facilitate the modification of properties for all shapes assigned to a specific layer. Key properties that can be configured include:

* Objects
* Visible
* Lock
* AddInfo

## Objects

The layer's [objects](https://ej2.syncfusion.com/react/documentation/api/diagram/layer#objects-string[]) property specifies which diagram elements belong to that layer. This property contains a collection where you can define the categories of nodes and connectors that the layer encompasses.

In the following example, the basic shapes are categorized in layer 1, and the flow shapes are categorized in layer 2.

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

The layer's [visible](https://ej2.syncfusion.com/react/documentation/api/diagram/layer#visible-boolean) property is used to control the visibility of the elements assigned to the layer. You can hide objects in one layer while showing objects in another layer.

In the following example, the visibility of layer one is set to false. By default, the `visible` property of a layer is set to **true**.

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

The layer's [lock](https://ej2.syncfusion.com/react/documentation/api/diagram/layer#lock-boolean) property is used to prevent or allow changes to the element's dimensions and positions. Locking a layer prevents any interactions with the objects in that layer, such as selecting, dragging, rotating, and connecting. 

In the following example the objects in layer one is locked. By default, the `lock` property of a layer is set to **false**.

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

The [`addInfo`](https://ej2.syncfusion.com/react/documentation/api/diagram/layer#addinfo-Object) property of layers allow you to maintain additional information to the layers.

The following code illustrates how to add additional information to the layers.

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

### Add layer at runtime

Layers can be added at runtime using the [`addLayer`](https://ej2.syncfusion.com/react/documentation/api/diagram#addLayer) public method.

The layer's [`ID`](https://ej2.syncfusion.com/react/documentation/api/diagram/layer#id-string) property defines the ID of the layer, which is used to find the layer at runtime and apply any customizations. You can also add new objects to the new layer using the `addLayer` method.

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


### Remove layer at runtime

Layers can be removed at runtime by using the [`removeLayer`](https://ej2.syncfusion.com/react/documentation/api/diagram#removeLayer) public method.

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


### moveObjects

You can move objects from one layer to another dynamically using the [`moveObjects`](https://ej2.syncfusion.com/react/documentation/api/diagram#moveObjects) public method of the diagram control. This can be useful for managing complex diagrams with multiple layers where you need to update the categorization of elements based on user interaction or other dynamic conditions.

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

[`zIndex`](https://ej2.syncfusion.com/react/documentation/api/diagram/layer/#zindex) property of a layer defines its Z order within the diagram. This property allows you to control the layer's position in the stacking order. You can adjust the layer's z-index by moving it forward or backward relative to other layers in the diagram.


### bringLayerForward

Layers can be moved forward at runtime by using the [`bringLayerForward`](https://ej2.syncfusion.com/react/documentation/api/diagram#bringLayerForward) public method.

The following code illustrates how to bring forward to layer.

```ts

    // move the layer forward
    diagram.bringLayerForward('layer1');

```

### sendLayerBackward

Layers can be moved backward at runtime by using the [`sendLayerBackward`](https://ej2.syncfusion.com/react/documentation/api/diagram#sendLayerBackward) public method.


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

### Layer and objects rendering order

The rendering of diagram elements with layer properties involves grouping them within a `diagram_diagramLayer` for basic shape nodes and `diagram_nativeLayer_svg` for SVG-native elements. Even if different types of nodes are added within the same layer, the rendering at the DOM level occurs in separate layers. Therefore, when executing layering commands like [`bringLayerForward`](https://ej2.syncfusion.com/react/documentation/api/diagram#bringLayerForward) and [`sendLayerBackward`](https://ej2.syncfusion.com/react/documentation/api/diagram#sendLayerBackward), the native SVG elements will always render above the basic shape elements. 

The order of rendering is as follows: HTML shapes -> SVG shapes -> Path data shapes & Basic shapes.

## cloneLayer

Layers can be cloned with its object by using the [`cloneLayer`](https://ej2.syncfusion.com/react/documentation/api/diagram#cloneLayer) public method.

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

## Active layer

Active Layer refers to the layer with the highest z-index in a diagram compared to other layers. When adding objects at runtime, they are stored in this active layer. If no layers are explicitly defined in the diagram, a default layer is created and automatically set as the active layer. However, when multiple layers are defined, the layer with the highest z-index takes precedence as the active layer.

Public methods are available to get and set the active layer, which are explained below.

### Get ActiveLayer

Active layer of the diagram can be retrieved by using the[`getActiveLayer`](https://ej2.syncfusion.com/react/documentation/api/diagram#getActiveLayer) public method.

The following code illustrates how fetch active layer from the diagram

```ts
    
    // gets the active layer of diagram
    diagram.getActiveLayer();
```

### Set ActiveLayer

You can set any layer to be the active layer of the diagram by using the[`setActiveLayer`](https://ej2.syncfusion.com/react/documentation/api/diagram#setActiveLayer) public method.

The following code illustrates how to set active layer for diagram

```ts
    // set the active layer
    //@param layerName defines the name of the layer which is to be active layer
    diagram.setActiveLayer('layer2');

```