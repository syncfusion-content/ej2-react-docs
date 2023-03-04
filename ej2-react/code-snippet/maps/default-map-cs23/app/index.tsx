

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
        <MapsComponent >
            <LayersDirective>
                <LayerDirective shapeData={world_map}
                    shapeSettings={ {
                        autofill: true,
                        palette: ['#C7DE6C', '#59A076', '#88D0BC', '#FEA78C', '#FFC557'],
                        border: { color: '#FEE1DD', width: 3},
                        dashArray: '1',
                        opacity: 0.9
                    } }>
                </LayerDirective>
            </LayersDirective>
        </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



