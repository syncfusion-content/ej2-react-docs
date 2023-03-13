{% raw %}
import { world_map } from 'world-map.ts';
import { uncountries } from 'data.ts'
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject, Legend } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
        <MapsComponent  legendSettings={ { visible: true } } >
        <Inject services={[Legend]} />
            <LayersDirective>
                <LayerDirective shapeData={world_map} shapeDataPath='Country' shapePropertyPath='name' dataSource={uncountries}
                    shapeSettings={ {
                        colorValuePath: 'Membership',
                        colorMapping: [
                            { from: 0, to: 100, color: 'rgb(153,174,214)' },
                            { from: 101, to: 200, color: 'rgb(115,143,199)' },
                            { color: 'rgb(77,112,184)' }
                        ]
                    } }>
                </LayerDirective>
            </LayersDirective>
        </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
{% endraw %}