

import { world_map } from 'world-map.ts';
import { usa_map } from 'usa.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
        <MapsComponent  baseLayerIndex={1}>
            <LayersDirective>
                <LayerDirective shapeData={world_map} />
                <LayerDirective shapeData={usa_map} />
            </LayersDirective>
        </MapsComponent>
    );
}  
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

 