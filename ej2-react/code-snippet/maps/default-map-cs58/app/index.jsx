
import { world_map } from 'world-map.ts';
import { population_density } from 'data.ts'
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject, Legend } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
        <MapsComponent  legendSettings={ { visible: true, toggleLegendSettings: { enable: true } } } >
        <Inject services={[Legend]} />
            <LayersDirective>
                <LayerDirective shapeData={world_map} shapeDataPath='name' shapePropertyPath='name'
                    dataSource={population_density}
                    shapeSettings={ {
                        colorValuePath: 'density',
                        colorMapping: [
                            {
                                from: 0, to: 100, color: 'rgb(153,174,214)',
                            },
                            {
                                from: 101, to: 200, color: 'rgb(115,143,199)',
                            },
                            {
                                color: 'rgb(77,112,184)'
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
 