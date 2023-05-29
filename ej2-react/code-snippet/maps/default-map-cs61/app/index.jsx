{% raw %}
import { world_map } from 'world-map.ts';
import { markerDataSource } from 'markerdata.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, Legend, MarkerDirective, Marker, Inject } from '@syncfusion/ej2-react-maps';
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
            <LayerDirective
              shapeData={world_map}
              shapeSettings={{
                fill: '#E5E5E5',
              }}
            >
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
{% endraw %}