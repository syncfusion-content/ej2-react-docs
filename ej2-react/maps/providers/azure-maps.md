---
layout: post
title: Azure maps in React Maps component | Syncfusion
description: Learn here all about Azure maps in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: Azure maps 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Azure maps integration in React Maps component

Azure Maps is an online map service provider from Microsoft. Similar to OSM and Bing Maps, it provides map tile images based on requests and combines them to display the map area. Azure Maps offers various map styles including satellite imagery, road maps, and terrain views with global coverage.

## Prerequisites

Before using Azure Maps with the Maps component, the following prerequisites must be met:

* **Azure account** - An active Microsoft Azure account is required
* **Azure Maps subscription** - Create an Azure Maps account in the Azure portal
* **Subscription key** - Generate a subscription key (primary or secondary) for authentication

To obtain an Azure Maps subscription key, follow the steps outlined in the [Azure Maps authentication documentation](https://docs.microsoft.com/en-us/azure/azure-maps/how-to-manage-authentication). The subscription key must be included in all API requests to authenticate and access Azure Maps services.

>Refer to [Azure Maps Licensing](https://azure.microsoft.com/en-in/support/legal/) for terms of use and pricing information.

## Adding Azure Maps

The Azure Maps can be rendered using the [urlTemplate](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#urltemplate) property with the tile server URL provided by Azure Maps. The URL template must include the subscription key for authentication. Replace `Your-Key` in the URL template below with the actual subscription key obtained from the Azure portal.

The URL template contains several parameters that are automatically replaced by the Maps component:

* **subscription-key** - The Azure Maps authentication key (replace with actual key)
* **api-version** - The Azure Maps API version (e.g., 1.0, 2.0)
* **style** - The map style type (satellite, road, night, etc.)
* **zoom** - The zoom level (automatically populated as `level`)
* **x** - The tile X coordinate (automatically populated as `tileX`)
* **y** - The tile Y coordinate (automatically populated as `tileY`)

```ts

import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';

export function App() {
    return(
            <MapsComponent>
                <LayersDirective>
                    <LayerDirective urlTemplate='https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY' />
                </LayersDirective>
            </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

```

## Enabling zooming and panning

The Azure Maps layer supports zooming and panning interactions for enhanced map exploration. Zooming provides a closer view of specific areas for detailed analysis, while panning allows navigation across different regions of the map. These features can be enabled using the [zoomSettings](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel) property with toolbar controls for user interaction.



```ts

import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Zoom, Maps, Inject } from '@syncfusion/ej2-react-maps';

export function App() {
  return(
          <MapsComponent zoomSettings = { { enable: true,
              toolbarSettings:{
                  buttonSettings: {
                    toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset']
                  }
              }} 
          }>
          <Inject services={[Zoom]} />
                <LayersDirective>
                    <LayerDirective urlTemplate='https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY' />
                </LayersDirective>
          </MapsComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

```
 

## Adding markers and navigation line

Markers can be added to Azure Maps layers to highlight specific locations by setting the latitude and longitude coordinates using [MarkerDirective](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#markersettings) tag. Navigation lines can be added on top of the Azure Maps layer for highlighting a path among various places by setting the corresponding location's coordinates of latitude and longitude in the [NavigationLineDirective](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#navigationlinesettings) with corresponding latitude and longitude coordinates.



```ts

import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, NavigationLineDirective, LayerDirective, Zoom, MarkersDirective, NavigationLine, NavigationLinesDirective, MarkerDirective, Marker, Inject, Maps } from '@syncfusion/ej2-react-maps';

export function App() {
  return(
          <MapsComponent zoomSettings = { { zoomFactor: 4 } } centerPosition = {{ latitude: 29.394708, longitude: -94.954653}}>
          <Inject services={[Marker, NavigationLine, Zoom]} />
                <LayersDirective>
                    <LayerDirective urlTemplate='https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY'>
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
 

## Adding sublayer

GeoJSON shapes can be rendered as a sublayer on top of the Azure Maps base layer to highlight specific regions such as continents, countries, or custom geographic areas. This is accomplished by adding an additional layer and setting the [type](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#type) property to **SubLayer**. The sublayer overlays the Azure Maps tiles while maintaining interactivity with the base map.



```ts

import { africa_continent } from 'africa-continent.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';

export function App() {
    return(
            <MapsComponent>
                <LayersDirective>
                    <LayerDirective urlTemplate='https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY' />
                    <LayerDirective shapeData= {africa_continent}
                                    type= 'SubLayer'
                                    shapeSettings= {{
                                        fill: 'blue'
                                    }}
                    />
                </LayersDirective>
            </MapsComponent>
);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

```
 

## Enabling legend

A legend can be displayed with Azure Maps to provide visual context for markers, shapes, or data classifications. The legend is enabled by setting the [visible](https://ej2.syncfusion.com/react/documentation/api/maps/legendSettingsModel#visible) property of [legendSettings](https://ej2.syncfusion.com/react/documentation/api/maps/legendSettingsModel) to **true**. The legend can be configured to display marker shapes, custom icons, and interactive toggle functionality for controlling layer visibility.



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
                <LayerDirective urlTemplate="https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY">
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
 