---
layout: post
title: Other maps in React Maps component | Syncfusion
description: Learn here all about Other maps in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: Other maps 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Other maps in React Maps component

Apart from OpenStreetMap and Bing Maps, you can also render Maps from other online map service providers by specifying the URL provided by those providers in the [urlTemplate](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel/#urltemplate) property. The URL template concept has been implemented in such a way that any online map service providers using the following template can benefit from previewing their Map in the Syncfusion React Maps component.

<!-- markdownlint-disable MD034 -->

Sample Template: https://< domain_name >/maps/basic/{z}/{x}/{y}.png

* "${z}" - It represents zoom factor (level).
* "${x}" - It indicates tile image x-position (tileX).
* "${y}" - It indicates tile image y-position (tileY).

In this case, the key generated for those online map service providers can also be appended to the URL. This allows to create personalized Maps with your own content and imagery.

Following is an example of how to add a TomTom map. You can generate an API key by following the steps in this [link](https://developer.tomtom.com/map-display-api/documentation/product-information/introduction) and then adding the key to the URL.

```ts

import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';


export function App() {
return(
            <MapsComponent>
                <LayersDirective>
                    <LayerDirective urlTemplate= "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key" />
                </LayersDirective>
            </MapsComponent>
);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
```

![TomTom Maps](../images/MapProviders/tomtom-maps.PNG)

## Enabling zooming and panning

Tile Maps layer can be zoomed and panned. Zooming helps to get a closer look at a particular area on a Maps for in-depth analysis. Panning helps to move a Maps around to focus the targeted area.

{% raw %}

```ts

import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Zoom, Maps, Inject } from '@syncfusion/ej2-react-maps';

export function App() {
return(
            <MapsComponent zoomSettings = { { enable: true, toolbars: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset']} }>
            <Inject services={[Zoom]}/>
                <LayersDirective>
                    <LayerDirective urlTemplate= "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key" />
                </LayersDirective>
            </MapsComponent>
);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

```
{% endraw %}

![TomTom Maps with Zooming and Panning](../images/MapProviders/tomtom-maps-zooming.PNG)

## Adding markers and navigation line

Markers can be added to the layers of tile Maps by setting the corresponding location's coordinates of latitude and longitude using [MarkerDirective](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel/#markersettings) tag. Navigation lines can be added on top of an tile Maps layer for highlighting a path among various places by setting the corresponding location's coordinates of latitude and longitude in the [NavigationLineDirective](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel/#navigationlinesettings) tag.

{% raw %}

```ts

import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Zoom, MarkersDirective, NavigationLine, NavigationLinesDirective, NavigationLineDirective, MarkerDirective, Marker, Maps, Inject } from '@syncfusion/ej2-react-maps';

export function App() {
return(
            <MapsComponent zoomSettings= {{ zoomFactor: 4}}
                                     centerPosition = {{
                                         latitude: 29.394708,
                                         longitude: -94.954653
                                     }}>
            <Inject services={[Zoom, NavigationLine, Marker]} />
                <LayersDirective>
                    <LayerDirective urlTemplate= "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key">
                        <MarkersDirective>
                        <MarkerDirective visible={true}
                                            height={25}
                                            width={15}
                                            dataSource={[
                                                {
                                                    latitude: 34.060620,
                                                    longitude: -118.330491,
                                                    name: "California"
                                                },
                                                {
                                                    latitude: 40.724546,
                                                    longitude: -73.850344,
                                                    name: "New York"
                                                }
                                            ]}
                                        >
                            </MarkerDirective>
                            </MarkersDirective>
                            <NavigationLinesDirective>
                            <NavigationLineDirective visible={true}
                                                     latitude={[34.060620, 40.724546]}
                                                     longitude={[-118.330491,-73.850344]}
                                                     color="blue"
                                                     angle={90}
                                                     width={5} />
                        </NavigationLinesDirective>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

```
{% endraw %}

![TomTom Maps with Markers and Navigation Line](../images/MapProviders/tomtom-maps-marker-and-line.PNG)

## Adding sublayer

Any GeoJSON shape can be rendered as a sublayer on top of the tile Maps layer for highlighting a particular continent or country in tile Maps by adding another layer and specifying the [type](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel/#type) property of Maps layer to **SubLayer**.

{% raw %}

```ts

import { africa_continent } from 'africa-continent.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';

export function App() {
return(
            <MapsComponent>
                <LayersDirective>
                    <LayerDirective urlTemplate= "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key" />
                    <LayerDirective shapeData= {africa_continent}
                                    type= 'SubLayer'
                                    shapeSettings = {{
                                        fill: 'blue'
                                    }}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
```
{% endraw %}

![TomTom Maps with Sublayer](../images/MapProviders/tomtom-map-sublayer.PNG)

## Enabling legend

The legend can be added to the tile Maps by setting the [visible](https://ej2.syncfusion.com/react/documentation/api/maps/legendSettingsModel/#visible) property of [legendSettings](https://ej2.syncfusion.com/react/documentation/api/maps/legendSettingsModel) to **true**.

{% raw %}

```ts

import { markerDataSource } from 'markerdata.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker, Legend, Inject } from '@syncfusion/ej2-react-maps';

export function App() {
return(
            <MapsComponent
              legendSettings={{
                visible: true,
                type: 'Markers',
                useMarkerShape: true,
                toggleLegendSettings: {
                  enable: true,
                  applyShapeSettings: false,
                  border: {
                    color: 'green',
                    width: 2,
                  },
                },
              }}
            >
              <Inject services={[Marker, Legend]} />
              <LayersDirective>
                <LayerDirective urlTemplate="http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key">
                  <MarkersDirective>
                    <MarkerDirective
                      visible={true}
                      dataSource={markerDataSource}
                      colorValuePath="color"
                      shapeValuePath="shape"
                      legendText="country"
                    ></MarkerDirective>
                  </MarkersDirective>
                </LayerDirective>
              </LayersDirective>
            </MapsComponent>
);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

```
{% endraw %}

![TomTom Maps with Legend](../images/MapProviders/tomtom-map-legend.PNG)