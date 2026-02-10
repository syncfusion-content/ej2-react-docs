


import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  MapsComponent, LayersDirective, LayerDirective,
  Inject, Zoom
} from '@syncfusion/ej2-react-maps';
export function App() {
return(
      <MapsComponent  zoomSettings={{
        enable: false,
        zoomFactor: 13
      }} centerPosition={{
        latitude: 25.54244147012483,
        longitude: -89.62646484375
      }} >
        <Inject services={[Zoom]} />
        <LayersDirective>
          <LayerDirective shapeData={world_map}>
          </LayerDirective>
        </LayersDirective>
      </MapsComponent>
      );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

 