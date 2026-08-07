---
layout: post
title: How to add a custom path in React Maps | Syncfusion
description: Learn how to build custom-path layouts in React Maps using normal geometry shapes, demonstrated with a bus seat selection example.
control: Custom path
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to add a custom path in React Maps

Maps component can be customized as the desired layout using the custom path map feature. Here, the Maps component has been showcased with normal geometry type shapes to represent the bus seat selection layout.

{% raw %}

```ts
import { seatData } from 'seat.ts';
import * as React from 'react';
import {
  MapsComponent, LayersDirective, LayerDirective,
  Inject, Selection
} from '@syncfusion/ej2-react-maps';
import * as ReactDOM from 'react-dom';
  export function App() {
        return (
          <div className='control-section row'>
            <div className='col-md-8'>
              <div style={{ width: 200, margin: 'auto', paddingBottom: 20 }}>
                <div id="sampletitle">Bus seat selection</div>
              </div>
              <div style={{ border: '3px solid darkgray', width: 200, display: 'block', margin: 'auto' }}>
                <MapsComponent  height='400'>
                  <Inject services={[Selection]} />
                  <LayersDirective>
                    <LayerDirective shapeData={seat} geometryType='Normal'>
                    </LayerDirective>
                  </LayersDirective>
                </MapsComponent>
              </div></div></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
```

{% endraw %}

 