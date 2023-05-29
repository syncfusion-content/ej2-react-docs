{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
      </LayersDirective>
    </MapsComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}