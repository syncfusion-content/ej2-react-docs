---
layout: post
title: User interactions in React Maps component | Syncfusion
description: Learn here all about User interactions in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: User interactions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# User interactions in React Maps component

## Zooming

The zooming feature is used to zoom in and out of Maps to show in-depth information. It is controlled by the [`zoomFactor`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/#zoomfactor) property of the [`zoomSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel) of the Maps. The Map is zoomed in when the [`zoomFactor`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/#zoomfactor) is increased. The [`zoomFactor`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/#zoomfactor) is increased or decrease dynamically based on zoom in and out interaction.

<b>Enable zooming</b>

Zooming of Maps is enabled by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/#enable) property of [`zoomSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/) to **true**.

<b>Enable panning</b>

To enable the panning feature, set the [`enablePanning`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/#enablepanning) property of [`zoomSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel) to **true**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs89/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs89/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs89" %}

### Various type of zooming

Zooming can be performed in following types:

#### Zooming toolbar

By default, the toolbar is rendered with **zoom-in**, **zoom-out**, and **reset** options when it is set to **true** in the [`enable`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/#enable) property of [`zoomSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/).

The following options are available in toolbar.

1. Zoom - Provides rectangular zoom support.
2. ZoomIn - Zooms in the Maps.
3. ZoomOut - Zooms out the Maps.
4. Pan - Switches to panning if rectangular zoom is activated.
5. Reset - Restores the Maps to the default view.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs90/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs90/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs90" %}

#### Pinch zooming

To enable or disable the pinch zooming, use the [`pinchZooming`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/#pinchzooming) property in [`zoomSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel).

{% raw %}

```ts

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Zoom, Inject } from '@syncfusion/ej2-react-maps';
export function App() {
   return(
            <MapsComponent  zoomSettings={ { enable: true, pinchZooming: true } }>
            <Inject services={[Zoom]}/>
                <LayersDirective>
                    <LayerDirective shapeData={world_map}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

```
{% endraw %}

#### Single-click zooming

To enable or disable the single-click zooming, use the [`zoomOnClick`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/#zoomonclick) property in [`zoomSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel).

{% raw %}

```ts

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Zoom, Inject } from '@syncfusion/ej2-react-maps';
export function App() {
  return(
            <MapsComponent  zoomSettings={ { enable: true, zoomOnClick: true } }>
            <Inject services={[Zoom]}/>
                <LayersDirective>
                    <LayerDirective shapeData={world_map}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

```
{% endraw %}

#### Double-click zooming

To enable or disable the double-click zooming, use the [`doubleClickZoom`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/#doubleclickzoom) property in [`zoomSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/).

{% raw %}

```ts

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Zoom, Inject } from '@syncfusion/ej2-react-maps';
export function App() {
   return(
            <MapsComponent  zoomSettings={ { enable: true, doubleClickZoom: true } }>
            <Inject services={[Zoom]}/>
                <LayersDirective>
                    <LayerDirective shapeData={world_map}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

```
{% endraw %}

#### Mouse wheel zooming

To enable or disable mouse wheel zooming, use the [`mouseWheelZoom`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/#mousewheelzoom) property in [`zoomSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/).

{% raw %}

```ts

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Zoom, Inject } from '@syncfusion/ej2-react-maps';
export function App() {
   return(
            <MapsComponent  zoomSettings={ { enable: true, mouseWheelZoom: true } }>
            <Inject services={[Zoom]}/>
                <LayersDirective>
                    <LayerDirective shapeData={world_map}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

```
{% endraw %}

#### Selection zooming

To enable or disable selection zooming, use the [`enableSelectionZooming`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/#enableselectionzooming) property in [`zoomSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/). The [`enablePanning`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/#enablepanning) property must be set to **false** to enable the selection zooming in Maps.

{% raw %}

```ts

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Zoom, Inject } from '@syncfusion/ej2-react-maps';
export function App() {
   return(
            <MapsComponent  zoomSettings={ { enable: true, enableSelectionZooming: true,
                                                      enablePanning: false } }>
            <Inject services={[Zoom]}/>
                <LayersDirective>
                    <LayerDirective shapeData={world_map}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

```
{% endraw %}

### Setting minimum and maximum values for zoom factor

The zooming range can be adjusted using the [`minZoom`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/#minzoom) and [`maxZoom`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/#maxzoom) properties in [`zoomSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/). The minZoom value is set to 1 by default, and the maxZoom value is set to 10.

{% raw %}

```ts

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Zoom, Inject } from '@syncfusion/ej2-react-maps';
export function App() {
   return(
            <MapsComponent  zoomSettings={ { enable: true, minZoom: 2,
                                                      maxZoom: 12 } }>
            <Inject services={[Zoom]}/>
                <LayersDirective>
                    <LayerDirective shapeData={world_map}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

```
{% endraw %}

### Customizing the zoom toolbar

The zoom toolbar can be customized by using the [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/#toolbarsettings) option in the [zoomSettings](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel). The following properties can be used to customize the zoom toolbar.

* [backgroundColor](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarSettingsModel/#backgroundcolor) - It is used to customize the background color of the zoom toolbar.
* [borderOpacity](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarSettingsModel/#borderopacity) - It is used to customize the opacity of the border of the zoom toolbar.
* [borderWidth](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarSettingsModel/#borderwidth) - It is used to customize the thickness of the border of the zoom toolbar.
* [borderColor](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarSettingsModel/#bordercolor) - It is used to customize the color of the border of the zoom toolbar.
* [horizontalAlignment](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarSettingsModel/#horizontalalignment) - It is used to position the zoom toolbar in near, far, and center positions to customize its horizontal placement.
* [verticalAlignment](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarSettingsModel/#verticalalignment) - It is used to position the zoom toolbar in near, far, and center positions to customize its vertical placement.
* [orientation](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarSettingsModel/#orientation) - It is used to change the orientation (horizontal/vertical) of the zoom toolbar.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs105/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs105/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs105" %}

<!-- markdownlint-disable MD036 -->
**Customizing the buttons in the zoom toolbar**

The appearance of the buttons in the zoom toolbar can be customized by using the [buttonSettings](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarSettingsModel/#buttonsettings) option in the [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/#toolbarsettings) of the [zoomSettings](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel). The following properties can be used to customize the zoom toolbar buttons.

* [fill](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarButtonSettingsModel/#fill) - It is used to set the background color of the buttons.
* [color](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarButtonSettingsModel/#color) - It is used to customize the color of the icons inside the button.
* [borderOpacity](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarButtonSettingsModel/#borderopacity) - It is used to set the opacity of the border of the zoom toolbar buttons.
* [borderWidth](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarButtonSettingsModel/#borderwidth) - It is used to set the thickness of the border of the zoom toolbar buttons.
* [borderColor](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarButtonSettingsModel/#bordercolor) - It is used to set the color of the border of the zoom toolbar buttons.
* [radius](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarButtonSettingsModel/#radius) - It is used to set the size of the button.
* [selectionColor](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarButtonSettingsModel/#selectioncolor) - It is used to set the color of the icons inside the button when selection is performed.
* [highlightColor](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarButtonSettingsModel/#highlightcolor) - It is used to change the color of the button when the mouse is hovered over it.
* [padding](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarButtonSettingsModel/#padding) - It is used to change the padding space between each button.
* [opacity](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarButtonSettingsModel/#opacity) - It is used to change the opacity of the button.
* [toolbarItems](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarButtonSettingsModel/#toolbaritems) - It is used to change the items that should be displayed in the zoom toolbar. By default, zoom-in, zoom-out, and reset buttons will be available. Other options include selection zoom and panning.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs106/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs106/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs106" %}

<!-- markdownlint-disable MD036 -->
**Customizing the tooltip of the zoom toolbar**

The appearance of the tooltip of the zoom toolbar can be customized by using the [tooltipSettings](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarTooltipSettingsModel/) option in the [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel/#toolbarsettings) of the [zoomSettings](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel). The following properties are available to customize the zoom toolbar tooltip.

* [visible](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarTooltipSettingsModel/#visible) - Enables or disables the tooltip of the zoom toolbar.
* [fill](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarTooltipSettingsModel/#fill) - It is used to change the background color of the tooltip of the zoom toolbar.
* [borderOpacity](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarTooltipSettingsModel/#borderopacity) - It is used to change the opacity of the border of the zoom toolbar's tooltip.
* [borderWidth](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarTooltipSettingsModel/#borderwidth) - It is used to change the thickness of the border of the zoom toolbar's tooltip.
* [borderColor](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarTooltipSettingsModel/#bordercolor) - It is used to change the color of the border of the zoom toolbar's tooltip.
* [fontColor](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarTooltipSettingsModel/#fontcolor) - It is used to change the color of the text in the tooltip of the zoom toolbar.
* [fontFamily](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarTooltipSettingsModel/#fontfamily) - It is used to change the font family of the text in the tooltip of the zoom toolbar.
* [fontStyle](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarTooltipSettingsModel/#fontstyle) - It is used to change the font style of the text in the tooltip of the zoom toolbar.
* [fontWeight](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarTooltipSettingsModel/#fontweight) - It is used to change the font weight of the text in the tooltip of the zoom toolbar.
* [fontSize](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarTooltipSettingsModel/#fontsize) - It is used to change the size of the text in the tooltip of the zoom toolbar.
* [fontOpacity](https://ej2.syncfusion.com/react/documentation/api/maps/zoomToolbarTooltipSettingsModel/#fontopacity) - It is used to change the opacity of the text in the tooltip of the zoom toolbar.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs107/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs107/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs107" %}

### Zooming with animation

To zoom in or zoom out the Maps with animation, use the [`animationDuration`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel/#animationduration) property in [`layers`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel).

{% raw %}

```ts

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Zoom, Inject } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
            <MapsComponent  zoomSettings={ { enable: true } }>
            <Inject services={[Zoom]}/>
                <LayersDirective>
                    <LayerDirective shapeData={world_map} animationDuration={500}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

```
{% endraw %}

## Selection

Each shape in the Maps can be selected and deselected during interaction with the shapes. Selection is enabled by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/maps/selectionSettingsModel/#enable) property of [`selectionSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/selectionSettingsModel) to **true**.

The following properties are available to customize the selection of Maps elements such as shapes, bubbles, markers and legends.

* [`border`](https://ej2.syncfusion.com/react/documentation/api/maps/selectionSettingsModel/#border) - To customize the color, width and opacity of the border of which element is selected in Maps.
* [`fill`](https://ej2.syncfusion.com/react/documentation/api/maps/selectionSettingsModel/#fill) - Applies the color for the element that is selected.
* [`opacity`](https://ej2.syncfusion.com/react/documentation/api/maps/selectionSettingsModel/#opacity) - To customize the transparency for the element that is selected.
* [`enableMultiSelect`](https://ej2.syncfusion.com/react/documentation/api/maps/selectionSettingsModel/#enablemultiselect) - To enable or disable the selection for multiple shapes or markers or bubbles in the Maps.

By tapping on the specific legend, the shapes which are bounded to the selected legend is also selected and vice versa.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs91/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs91/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs91" %}

### Enable selection for bubbles

To enable the selection for bubbles in Maps, set the [`selectionSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/selectionSettingsModel) in [`bubbleSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel/) and set the [`enable`](https://ej2.syncfusion.com/react/documentation/api/maps/selectionSettingsModel/#enable) property of [`selectionSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/selectionSettingsModel) as **true**.

>To use the bubble feature, the Bubble module must be injected.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs92/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs92/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs92" %}

### Enable selection for markers

To enable the selection for markers in Maps, set the [`selectionSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/selectionSettingsModel) in the [`markerSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/markerSettingsModel) and set the [`enable`](https://ej2.syncfusion.com/react/documentation/api/maps/selectionSettingsModel/#enable) property of the [`selectionSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/selectionSettingsModel) as **true**.

>To use the marker feature, the Marker module must be injected.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs93/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs93/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs93" %}

### Public method for the shape selection

The [`shapeSelection`](https://ej2.syncfusion.com/react/documentation/api/maps/#shapeselection) method can be used to select each shape in the Maps.
LayerIndex, propertyName, country name, and selected value as a boolean state(true / false) are the input parameters for this method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs94/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs94/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs94" %}

### Initial shape selection

The shape is initially selected using the [`initialShapeSelection`](https://ej2.syncfusion.com/react/documentation/api/maps/initialShapeSelectionSettingsModel/), and the values are mapped to the [`shapePath`](https://ej2.syncfusion.com/react/documentation/api/maps/initialShapeSelectionSettingsModel/#shapepath) and [`shapeValue`](https://ej2.syncfusion.com/react/documentation/api/maps/initialShapeSelectionSettingsModel/#shapevalue).

>initialShapeSelection is an Array property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs95/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs95/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs95" %}

### Initial marker selection

Using the [`initialMarkerSelection`](https://ej2.syncfusion.com/react/documentation/api/maps/initialMarkerSelectionSettingsModel), the marker shape can be selected initially. Markers render based on the [`latitude`](https://ej2.syncfusion.com/react/documentation/api/maps/initialMarkerSelectionSettingsModel/#latitude) and [`longitude`](https://ej2.syncfusion.com/react/documentation/api/maps/initialMarkerSelectionSettingsModel/#longitude) values.

>initialMarkerSelection is an Array property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs96/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs96/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs96" %}

## Highlight

Each shape in the Maps can be highlighted during mouse hover on the Maps elements such as shapes, bubbles, markers and legends. Highlight is enabled by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/maps/highlightSettingsModel/#enable) property of [`highlightSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/highlightSettingsModel) to **true**.

The following properties are available to customize the highlight of Maps elements such as shapes, bubbles, markers and legends.

* [`border`](https://ej2.syncfusion.com/react/documentation/api/maps/highlightSettingsModel/#border) - To customize the color, width and opacity of the border of which element is highlighted in Maps.
* [`fill`](https://ej2.syncfusion.com/react/documentation/api/maps/highlightSettingsModel/#fill) - Applies the color for the element that is highlighted.
* [`opacity`](https://ej2.syncfusion.com/react/documentation/api/maps/highlightSettingsModel/#opacity) - To customize the transparency for the element that is highlighted.

Hovering on the specific legend, the shapes which are bounded to the selected legend is also highlighted and vice versa.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs97/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs97/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs97" %}

### Enable highlight for bubbles

To enable the highlight for bubbles in Maps, set the [`highlightSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/highlightSettingsModel) in [`bubbleSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel) and set the [`enable`](https://ej2.syncfusion.com/react/documentation/api/maps/highlightSettingsModel/#enable) property of [`highlightSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/highlightSettingsModel) as **true**.

>To use the bubble feature, the Bubble module must be injected.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs98/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs98/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs98" %}

### Enable highlight for markers

To enable the highlight for markers in Maps, set the [`highlightSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/highlightSettingsModel) in [`markerSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/markerSettingsModel) and set the [`enable`](https://ej2.syncfusion.com/react/documentation/api/maps/highlightSettingsModel/#enable) property of [`highlightSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/highlightSettingsModel) as **true**.

>To use the marker feature, the Marker module must be injected.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs99/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs99/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs99" %}

## Tooltip

On mouse over or touch end event, the tooltip is used to get more information about the layer, bubble, or marker. To enable tooltip in Maps, the **Tooltip** module must be injected into Maps using **Inject services={[Tooltip]}** tag. It can be enabled separately for layer or bubble or marker by using the [`visible`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel/#visible) property of [`tooltipSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel/) as **true**. The [`valuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel/#valuepath) property in the tooltip takes the field name that presents in data source and displays that value as tooltip text. The [`tooltipDisplayMode`](https://ej2.syncfusion.com/react/documentation/api/maps/mapsModel/#tooltipdisplaymode) property is used to change the display mode of the tooltip in Maps. Following display modes of tooltip are available in the Maps component. By default,  [`tooltipDisplayMode`](https://ej2.syncfusion.com/react/documentation/api/maps/mapsModel/#tooltipdisplaymode) is set to **MouseMove**.

* MouseMove
* Click
* DoubleClick

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs100/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs100/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs100" %}

### Customization

The following properties are available in the [`tooltipSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel/) to customize the tooltip of the Maps component.

* [`border`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel/#border) - To customize the color, width and opacity of the border of the tooltip in layers, markers, and bubbles of Maps.
* [`fill`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel/#fill) - Applies the color of the tooltip in layers, markers, and bubbles of Maps.
* [`format`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel/#format) - To customize the format of the tooltip in layers, markers, and bubbles of Maps
* [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel/#textstyle) - To customize the style of the text in the tooltip for layers, markers, and bubbles of Maps.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs101/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs101/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs101" %}

### Tooltip template

The HTML element can be rendered in the tooltip of the Maps using the [`template`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel/#template) property of the [`tooltipSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs102/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs102/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs102" %}