{% raw %}



import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { africa_continent } from 'africa-continent.ts';
import {
  MapsComponent,
  LayersDirective,
  LayerDirective,
} from '@syncfusion/ej2-react-maps';
export function App() {
  return (
    <MapsComponent>
      <LayersDirective>
        <LayerDirective urlTemplate="https://tile.openstreetmap.org/level/tileX/tileY.png" />
        <LayerDirective
          shapeData={africa_continent}
          type="SubLayer"
          shapeSettings={{
            fill: 'blue',
          }}
        />
      </LayersDirective>
    </MapsComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}