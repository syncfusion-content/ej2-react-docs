


import { world_map } from 'world-map.ts';
import { uncountries } from 'data.ts'
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';

export function App() {
   return(
            <MapsComponent id="maps">
                <LayersDirective>
                    <LayerDirective shapeData={world_map} shapeDataPath='Country' shapePropertyPath='name' dataSource={uncountries}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
    );
}

const root = ReactDOM.createRoot(document.getElementById('maps'));
root.render(<App />);



