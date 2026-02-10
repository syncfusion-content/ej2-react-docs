

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  MapsComponent,
  LayersDirective,
  LayerDirective,
  Inject,
  Zoom,
} from '@syncfusion/ej2-react-maps';
export function App() {
  return (
    <MapsComponent
      zoomSettings={{
        enable: true,
        toolbarSettings: {
            buttonSettings: {
                toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset']
            }
        }
      }}
    >
      <Inject services={[Zoom]} />
      <LayersDirective>
        <LayerDirective urlTemplate="https://tile.openstreetmap.org/level/tileX/tileY.png" />
      </LayersDirective>
    </MapsComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

 