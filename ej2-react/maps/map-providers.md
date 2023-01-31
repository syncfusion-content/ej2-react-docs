---
layout: post
title: Map providers in React Maps component | Syncfusion
description: Learn here all about Map providers in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: Map providers 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Map providers in React Maps component

Maps component support map providers such as OpenStreetMap that can be added to any layers in maps.

## Open Street Map

OpenStreetMap(OSM) is a online map provider. The OpenStreetMap allows you to view, edit and use geographical data in a collaborative way from any place on the Earth. One of the most important features in Maps component is the built-in online map provider support. By using this feature, you can render OpenStreetMaps in the maps component. This provides the ability to visualize street map tiles without using any external shape files.


``` ts
import * as React from 'react';
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
import './App.css';
class App extends React.Component {
    render() {
        return (
            <MapsComponent id="element">
                <LayersDirective>
                    <LayerDirective urlTemplate="http://a.tile.openstreetmap.org/level/tileX/tileY.png">
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>);
    }
}
export default App;
```


## Bing Maps

Bing Maps is a online map provider for accessing the external geospatial imagery services for deep-zoom satellite view which is supported in the Maps component. This provides the ability to visualize satellite, aerial, and street maps without using any external shape files.


```ts
import * as React from 'react';
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
import './App.css';
class App extends React.Component {
    load(args) {
        args.maps.getBingUrlTemplate("https://dev.virtualearth.net/REST/V1/Imagery/Metadata/AerialWithLabel?output=json&uriScheme=https&key=?").then(function(url) {
            args.maps.layers[0].urlTemplate= url;
        });
    }
    render() {
        return (
            <MapsComponent id="element" load={this.load.bind(this)}>
                <LayersDirective>
                    <LayerDirective>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>);
    }
}
export default App;
```
