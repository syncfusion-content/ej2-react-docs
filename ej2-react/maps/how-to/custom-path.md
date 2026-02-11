---
layout: post
title: Custom path in React Maps component | Syncfusion
description: Learn here all about Custom path in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: Custom path 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Custom path in React Maps component

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

 