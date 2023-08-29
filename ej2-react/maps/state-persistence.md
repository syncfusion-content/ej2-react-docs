---
layout: post
title: State persistence in React Maps component | Syncfusion
description: Learn here all about State persistence in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: State persistence 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in React Maps component

## State Persistence

State persistence allows the Maps to retain the current model value in the browser cookies for state maintenance. This action is handled through the [`enablePersistence`](https://ej2.syncfusion.com/react/documentation/api/maps/#enablepersistence) property which is set to **false** by default. When this property is set to **true**, some of the Maps component model values are preserved even after the page is refreshed.

{% raw %}

```ts

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Zoom, Inject } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
            <MapsComponent  enablePersistence={true} zoomSettings={ { enable: true } }>
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