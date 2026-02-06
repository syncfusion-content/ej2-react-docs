
import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
        <MapsComponent
                       background="#CCD1D1"
                       border={{ color: 'green', width: 2}}
                       margin={{
                           bottom: 10,
                           left: 20,
                           right: 20,
                           top: 10
                      }}>
            <LayersDirective>
                <LayerDirective shapeData={world_map}
                    shapeSettings={ {
                        autofill: true
                    } }>
                </LayerDirective>
            </LayersDirective>
        </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
 