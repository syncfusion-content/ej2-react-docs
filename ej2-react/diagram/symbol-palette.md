---
layout: post
title: Symbol palette in React Diagram Component | Syncfusion®
description: Learn here all about Symbol palette in Syncfusion® React Diagram Component of Syncfusion Essential® JS 2 and more.
control: Symbol palette 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Symbol Palette in React Diagram Component
The [`symbolPalette`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette)  is a gallery of reusable symbols and diagram elements that can be dragged and dropped on the diagram surface multiple times. It provides an efficient way to organize and access frequently used nodes, connectors, and groups, streamlining the diagram creation process.
## Create Symbol Palette
The [`width`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette#height) properties of the symbol palette allows to define the size of the symbol palette.

```ts
import {
  SymbolPalette,
  SymbolPaletteComponent,
} from "@syncfusion/ej2-react-diagrams";
//Initializes the symbol palette
function App() {
  return (
    <SymbolPaletteComponent id="container" width={"100%"} height={"700px"} />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```

<!-- markdownlint-disable MD010 -->
## Add Nodes and Palettes to SymbolPalette
The collection of predefined symbols can be added to palettes using the [`symbols`](https://ej2.syncfusion.com/react/documentation/api/diagram/paletteModel/#symbols) property.

A palette displays a group of related symbols and textually annotates the group with its header. A [`Palettes`](https://ej2.syncfusion.com/react/documentation/api/diagram/palette/) can be added as a collection of symbol groups.

To initialize a palette, define a JSON object with the unique property [`ID`](https://ej2.syncfusion.com/react/documentation/api/diagram/paletteModel/#id). Additionally, include the symbols property, which contains an array of different symbols.

The following code example illustrates how to define symbols in a palette and how to add them to the symbol palette:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/es5palettes-cs1/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/es5palettes-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes/es5palettes-cs1" %}

## Add Connectors in Symbol Palette

Connectors can be added to the symbol palette by defining them in the symbols array of the palette. 
The following example shows how to render connectors in the symbol palette:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/palette-con/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/palette-con/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes/palette-con" %}

## Add Group Nodes in Symbol Palette
The symbol palette supports adding group nodes. To add group nodes to the palette, define the child nodes first, followed by the parent node. Refer to the following code to see how to render group nodes in the symbol palette:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/palette-grp/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/palette-grp/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes/palette-grp" %}

## Template-based symbols

### HTML and SVG node with content template

The Symbol Palette supports the creation of complex nodes using HTML or SVG templates. This allows developers to incorporate rich, interactive, and visually engaging content within diagram elements.

* For HTML content, set the node's `shape.type` property to **HTML**.
* For SVG content, set the `shape.type` property to **Native**.

Templates can be defined as strings and assigned to the node's `content` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/palette-contentTemplate/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/palette-contentTemplate/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes/palette-contentTemplate" %}

## Drag and Drop Symbols from Palette to Diagram
To drag and drop symbols from the palette to the diagram canvas, perform a mousedown action on the desired symbol in the palette, drag it to the desired location on the diagram canvas, and release the mouse button to drop it.
![Drag and drop symbols](images/symbol-palette-drag-drop.gif)
## Runtime Palette Operations
### Add Symbols to Palette at Runtime
Symbols can be added to palette at runtime by using public method, [`addPaletteItem`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette/#addpaletteitem). The following example shows how to add shapes to the palette at runtime:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/symbol-add/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/symbol-add/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes/symbol-add" %}

### Remove Symbols from Palette at Runtime
Symbols can be removed from the palette at runtime using the public method [`removePaletteItem`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette/#removepaletteitem). The following example shows how to remove shapes from the palette at runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/symbol-rmv/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/symbol-rmv/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes/symbol-rmv" %}

## Symbol Defaults

While adding more symbols such as nodes and connectors to the palette, you can define the default settings for those objects using the [`getNodeDefaults`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette/#getnodedefaults) and the [`getConnectorDefaults`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette/#getconnectordefaults) properties of symbol palette.
These properties allow you to specify default configurations for nodes and connectors, ensuring consistency and saving time when adding multiple symbols. By setting these properties, you can predefine attributes such as size, color, shape for nodes and line style, thickness, for connectors. 

In the following example, the fill color of node and target decorator shape of connector is defined in getNodeDefaults and getConnectorDefaults respectively.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/es5defaultsettings-cs1/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/es5defaultsettings-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes/es5defaultsettings-cs1" %}

### Add Palettes at Runtime
You can dynamically add palettes to the symbol palette at runtime to enhance flexibility and customization. This allows you to introduce new groups of symbols as needed without having to reload or reinitialize the diagram. The [`addPalettes`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette/#addpalettes) method of the symbol palette enables you to create and configure new palettes programmatically. This method takes parameters that define the palette's properties, such as the palette `ID`, `title`, and the `symbols` it contains.
Follow the example below to see how to add a palette at runtime:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/palette-add/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/palette-add/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes/palette-add" %}

## Remove Palettes at Runtime

You can remove palettes from the symbol palette at runtime. There are two ways to do this:

* Use the `removePalette` method to remove a single palette by its ID.
* Use the [`removePalettes`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette/#removepalettes) method to remove multiple palettes by passing an array of palette IDs as a parameter.

Follow the example below to see how to remove palettes at runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/palette-rmv/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/palette-rmv/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes/palette-rmv" %}

## Stretch the Symbols into the Palette

The [`fit`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolInfo/#fit) property determines whether a symbol should automatically scale to fit within the dimensions defined by the symbol palette.
For example, if a symbol contains a rectangle and you resize it, enabling fit ensures that the rectangle maintains its aspect ratio rather than being distorted into a square.
The following code example demonstrates how to customize symbol sizing using the fit property:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/es5fit-cs1/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/palettes/es5fit-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes/es5fit-cs1" %}

## Refresh Symbol Palette

The `refresh` method allows you to refresh the symbols dynamically in the SymbolPalette.

```ts
//To refresh the symbols in symbol palette
symbolPalette.refresh();

```
