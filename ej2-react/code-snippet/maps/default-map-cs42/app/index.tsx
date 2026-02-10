


import { usa_map } from 'usa.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  MapsComponent, LayersDirective, LayerDirective, MarkersDirective,
  MarkerDirective, Inject, Marker
} from '@syncfusion/ej2-react-maps';
export function App() {
return(
      <MapsComponent >
        <Inject services={[Marker]} />
        <LayersDirective>
          <LayerDirective shapeData={usa_map}>
            <MarkersDirective>
              <MarkerDirective visible={true} shape='Circle' fill='white' width={3} animationDuration={0}
                dataSource={[
                  { latitude: 37.0000, longitude: -120.0000, city: 'California' }
                ]}
                border={{ width: 2, color: '#333' }}>
              </MarkerDirective>
            </MarkersDirective>
          </LayerDirective>
        </LayersDirective>
      </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

 