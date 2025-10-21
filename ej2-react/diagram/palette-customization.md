---
layout: post
title: Symbol Palette customization in EJ2 React Diagram Component | Syncfusion®
description: Learn here all about Symbol palette customization in React Diagram Component of Syncfusion Essential® JS 2 and more.
platform: ej2-react
control: Symbol palette 
documentation: ug
domainurl: ##DomainURL##
---
# Symbol Palette customization in React Diagram Component

## Customize the Palette Header

The header of a symbol palette serves as a label that identifies the category or group of symbols it contains. It helps users quickly locate and understand the purpose of each palette.

The [`title`](https://ej2.syncfusion.com/react/documentation/api/diagram/paletteModel/#title) property displayed as the header text of palette.

The [`expanded`](https://ej2.syncfusion.com/react/documentation/api/diagram/paletteModel/#expanded) property of the palette allows users to expand or collapse its palette items.

The [`height`](https://ej2.syncfusion.com/react/documentation/api/diagram/paletteModel/#height) property of palette sets the height of the palette / symbol group.

The [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/diagram/paletteModel/#iconcss) property sets the icon to be rendered with the title.

The following code example illustrates how to customize palette headers.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/palette-header/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/palette-header/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/custompalette/palette-header" %}

## Animation

The expand and collapse operations of the symbol palette can be animated by utilizing the [`enableAnimation`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette/#enableanimation) property of the symbol palette. The following example demonstrates how to enable and disable animation for the symbol palette.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/palette-animate/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/palette-animate/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/custompalette/palette-animate" %}

## Description for Symbols
The [`description`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolDescription/) property defines the descriptive text that appears beneath each symbol in the palette. This text provides additional information about the symbol's purpose or usage within the diagramming context. The description can be dynamically retrieved and defined using the [`getSymbolInfo`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette#getsymbolinfo) property, allowing information to assist users in understanding the function or meaning of each symbol.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-desc/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-desc/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/custompalette/symbol-desc" %}

### Text wrapping and Text Overflow
The descriptive text that appears beneath each symbol can vary in length. In cases where the text might overlap neighboring symbols in the palette, text wrapping is employed. Text wrapping is controlled using the symbolInfo's [`description`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolDescription/#symboldescription) property [`wrap`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolDescription/#wrap) , which supports three modes: `Wrap`, `NoWrap`, `WrapWithOverflow`. By default, text wrapping is set to '`Wrap`'.
Additionally, to handle overflowing text, the [`overflow`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolDescription/#overflow) property can be used. By default, textOverflow is set to '`Ellipsis`', which truncates overflowing text with an ellipsis (...).

The following example demonstrates how text wrapping and text overflow are applied based on the symbol ID:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-textWrp/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-textWrp/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/custompalette/symbol-textWrp" %}

### Appearance of Symbol Description
The appearance of a symbol description in the palette can be customized by changing its [`color`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolDescription/#color) , [`fill`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolDescription/#fill), [`fontSize`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolDescription/#fontsize) , [`fontFamily`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolDescription/#fontfamily), [`bold`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolDescription/#bold) [`italic`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolDescription/#italic), [`textDecoration`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolDescription/#textdecoration)  and [`margin`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolDescription/#margin)

The following code example shows how to customize the symbol description.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-text/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-text/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/custompalette/symbol-text" %}

## Symbol Size and Symbol Margin
The size of individual symbols can be customized. The [`symbolWidth`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette/#symbolwidth) and  [`symbolHeight`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette/#symbolheight) properties enables you to define the size of the symbols.
The [`symbolMargin`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolPaletteModel/#symbolmargin) property is used to create space around elements, outside of any defined borders. By setting the symbol margin with specific values for left, right, top, and bottom, you can create consistent spacing on all sides around the shape.

The following code example illustrates how to set symbol size and symbol margin for the symbol palette.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/size-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/size-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/custompalette/size-cs1" %}

## Symbol Preview

The symbol preview size of the palette items can be customized using [`symbolPreview`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolPreview) property of symbol palette. 
The [`width`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolPreview#width-number) and [`height`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolPreview#height-number) properties allow you to define the preview size for all the symbol palette items. The [`offset`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolPreview#offset-PointModel) property specifies the position of the dragging helper relative to the mouse cursor.

The following code example illustrates how to change the preview size of a palette item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-preview/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-preview/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/custompalette/symbol-preview" %}

## Symbol Drag Size
The [`symbolDragSize`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolPaletteModel/#symboldragsize) property sets the dimensions (height and width) of a shape while it is being dragged from the palette to the diagram canvas. This differs from the preview size, which only affects how symbols appear in the palette itself. The following code illustrates how to set `symbolDragSize` for the symbol palette.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-dragSize/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-dragSize/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/custompalette/symbol-dragSize" %}

N> If the size of the symbol is not defined, the default size will be determined based on its shape.

## Expand Mode

The [`expandMode`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette/#expandmode) property of the symbol palette allows you to customize whether to expand all palettes simultaneously or to expand only one palette at a time.

The following example demonstrates how to set the `expandMode` property to control the expansion behavior of the palettes:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/expandMode/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/expandMode/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/custompalette/expandMode" %}

### Restrict Expand/Collapse of the Palette
The symbol palette panel can be restricted from expanding. When the expand icon of the palette is clicked, the [paletteExpanding](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolPaletteModel/#paletteexpanding) event is triggered. In this event, we can determine whether the palette's panel should be expanded or collapsed by utilizing the **cancel** argument of the event. By default, the panel is expanded. This restriction can be applied to each palette in the symbol palette as desired.

In the following code example, the basic shapes palette is restricted from expanding, and the flow shapes palette is restricted from collapsing, whereas the swimlane shapes palette can be expanded or collapsed:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/restrict-expand/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/restrict-expand/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/custompalette/restrict-expand" %}

## Tooltip for Symbols in Symbol Palette
The symbol palette supports displaying tooltips when the mouse hovers over symbols. You can customize the tooltip for each symbol in the symbol palette.
### Default Tooltip for Symbols

When hovering over symbols in the symbol palette, the default tooltip displays the symbol's ID.
Refer to the image below for an illustration of the tooltip behavior in the symbol palette.

![SymmbolPaletteTooltip](./images/SymbolPalatteTooltip.gif)

### Custom Tooltip for Symbols
To customize tooltips for symbols in the symbol palette, assign a custom tooltip to the [`content`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramTooltipModel/#content) property of ['tooltip'](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeModel/#tooltip) for each symbol. Once you define the custom tooltip, enable the [`Tooltip`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeConstraints/) constraints for each symbol, ensuring that the tooltips are displayed when users hover over them.
The code provided below demonstrates how to define tooltip content for symbols within a symbol palette.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-desc/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-desc/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/custompalette/symbol-desc" %}

### How to enable or disable the default tooltip for shapes in the symbol palette

By default, the symbol ID is displayed as a tooltip when hovering over a symbol in the Symbol Palette. To disable this default tooltip, you can use the [`showTooltip`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolInfo/#showTooltip/) property within the [`getSymbolInfo`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette#getsymbolinfo/) method. The `showTooltip` property is set to **true** by default, which enables the tooltip.

The following example demonstrates how to configure selective tooltip display:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/tooltip-custom/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/tooltip-custom/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/custompalette/tooltip-custom" %}

N> This property is effective only when tooltip constraints are disabled for the symbol palette element.


### How to provide different tooltip for Symbol palette and diagram elements.

When a custom tooltip is defined for a symbol, it will be displayed for both the symbol and the dropped node in the diagram canvas. 

However, to provide distinct tooltips for symbols in the palette and dropped nodes, capture the dragEnter event and assign specific tooltips dynamically.  

When a symbol is dragged from the symbol palette onto the diagram canvas, the [`DragEnter`](https://ej2.syncfusion.com/react/documentation/api/diagram#dragenter), event is triggered. This event provides an argument of type [`IDragEnterEventArgs`](https://ej2.syncfusion.com/react/documentation/api/diagram/iDragEnterEventArgs). Within this event, you can define a custom tooltip for the dropped node by assigning content to its tooltip property, allowing you to display context-specific information.

The following image illustrates the differentiation of tooltips displayed in the Symbol Palette and the Diagram.
![SymmbolPaletteCustomTooltip](./images/different-tooltip.gif)
The following code snippet demonstrates how to define two different tooltips for symbols in the symbol palette and dropped nodes in the diagram canvas.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-tooltip/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-tooltip/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/custompalette/symbol-tooltip" %}

## Localization

To localize the symbol palette search box, we need to define the [`locale`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette#locale) property of the symbol palette with the preferred culture. In the example below, **'de-DE'** is used, which is the locale code for German as used in Germany.
The following code shows how to localize symbol palette.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/locale/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/locale/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/custompalette/locale" %}

## Restrict Symbol Dragging from Palette
You can restrict the symbols getting dragged from the symbol palette by setting the [`allowDrag`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette#allowdrag) property of symbol palette as **false**. By default, the allowDrag is set as **true**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/restrict-drag/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/restrict-drag/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/custompalette/restrict-drag" %}

## Search Symbol
The diagram provides support for enabling the search option in the palette. The [`enableSearch`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette#enablesearch) property of the palette is used to show or hide the search textbox in the palette. You can search for symbols in the palette by entering the symbol ID (e.g., “rectangle”) and search keywords into the search text box. The symbols are retrieved by matching the value of the ID property with the string entered in the search textbox.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-search/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-search/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/custompalette/symbol-search" %}

## Ignore Symbols on Search
The [`ignoreSymbolsOnSearch`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette#ignoresymbolsonsearch) property allows you to specify which symbols should be excluded from search results within the symbol palette. By setting this property, you can control the visibility of specific symbols during a search operation. This feature is useful for hiding certain symbols that should not be shown through search functionality.
In the following example, the symbol with the ID 'plus' is ignored, so it will not appear in search results.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-search-ig/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-search-ig/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/custompalette/symbol-search-ig" %}

## Filter Search
You can filter the search results based on your specific requirements. To achieve this, customize the [`filterSymbols`](https://ej2.syncfusion.com/react/documentation/api/symbol-palette#filtersymbols) method of the symbol palette according to your needs. In the following example, the results are filtered to display only flow shapes in the search palette.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-filter/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/symbol-palette/custompalette/symbol-filter/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/custompalette/symbol-filter" %}

N> The diagram provides support to cancel the drag and drop operation from the symbol palette to the diagram when the ESC key is pressed.

## See Also

* [How to add the symbol to the diagram.](./nodes)