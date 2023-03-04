

import { world_map } from 'world-map.ts';
import { population_density } from 'data.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
        <MapsComponent >
            <LayersDirective>
                <LayerDirective shapeData={world_map} shapeDataPath='name' shapePropertyPath='name'
                    dataSource={population_density}
                    shapeSettings={ {
                        colorValuePath: 'density',
                        colorMapping: [
                            {
                                from: 0, to: 100, color: 'rgb(153,174,214)',
                                minOpacity: 0.2, maxOpacity: 1
                            },
                            {
                                from: 101, to: 260, color: 'rgb(115,143,199)',
                                minOpacity: 0.3, maxOpacity: 1
                            }
                        ]
                    } }>
                </LayerDirective>
            </LayersDirective>
        </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);


