{% raw %}


import { world_map } from 'world-map.ts';
import { africa_continent } from 'africa-continent.ts';
import { dafaultData } from 'data.ts';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { MapsComponent, LayersDirective, LayerDirective, Inject, Highlight, Marker, MarkerDirective,MarkersDirective, IShapeSelectedEventArgs } from '@syncfusion/ej2-react-maps';
export function App() {
  let mapInstance : MapsComponent;
  function shapeSelected(args: IShapeSelectedEventArgs) {
    let shape = args.shapeData.continent;
    if (mapInstance.baseLayerIndex === 0) {
      if (shape === 'Africa') {
        mapInstance.baseLayerIndex = 1;
        mapInstance.refresh();
      }
    }
  }
  return (
      <MapsComponent  height="400" ref={m => (mapInstance = m)}
                     shapeSelected={shapeSelected}>
        <Inject services={[Highlight, Marker]} />
        <LayersDirective>
          <LayerDirective shapeData={world_map} shapeDataPath="continent" shapePropertyPath="continent" dataSource={dafaultData}
          shapeSettings={{
              colorValuePath: 'drillColor'
            }}>
            <MarkersDirective>
              <MarkerDirective visible={true}
                              template='<div style="font-size: 12px;color:white;text-shadow: 0px 1px 1px black;font-weight: 500;width:50px">Africa</div>'
                              dataSource={[
                                  { latitude: 10.97274101999902, longitude: 16.390625 }
                              ]}
                               animationDuration={0}/>
            </MarkersDirective>
          </LayerDirective>
          <LayerDirective shapeData={africa_continent}
                          shapeSettings={{
                              fill: '#80306A'
                          }}
                          highlightSettings={{
                              enable: true,
                              fill: '#80306A'
                          }}
          />
        </LayersDirective>
      </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);


{% endraw %}