{% raw %}
import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject, Legend } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
        <MapsComponent  legendSettings={ {
                                    visible: true,
                                    background: 'green',
                                    border: {
                                        color: 'blue',
                                        width: 2
                                    },
                                    fill: 'orange',
                                    labelPosition: 'Before',
                                    orientation: 'Vertical',
                                    textStyle: {
                                        size: '12px',
                                        color: 'red',
                                        fontStyle: 'italic'
                                    },
                                    title: {
                                        description: 'Legend title',
                                        text: 'Legend'
                                    },
                                    titleStyle: {
                                        size: '12px',
                                        color: '#d6e341',
                                        fontStyle: 'italic'
                                    }
                                } } >
        <Inject services={[Legend]} />
            <LayersDirective>
                <LayerDirective shapeData={world_map} shapeDataPath='Country' shapePropertyPath='name' dataSource={[
                    {  "Country": "China", "Membership": "Permanent" },
                    { "Country": "France", "Membership": "Permanent" },
                    { "Country": "Russia", "Membership": "Permanent" },
                    { "Country": "Kazakhstan", "Membership": "Non-Permanent" },
                    { "Country": "Poland", "Membership": "Non-Permanent" },
                    { "Country": "Sweden", "Membership": "Non-Permanent" }
                ]}
                    shapeSettings={ {
                        colorValuePath: 'Membership',
                        colorMapping: [
                           { value: 'Permanent', color: '#D84444' },
                           { value: 'Non-Permanent', color: '#316DB5' }]
                        } }>
                </LayerDirective>
            </LayersDirective>
        </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
{% endraw %}