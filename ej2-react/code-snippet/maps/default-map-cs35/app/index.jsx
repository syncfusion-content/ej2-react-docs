{% raw %}
import { world_map } from 'world-map.ts';
import { uncountries } from 'data.ts'
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';

export function App() {
return(<MapsComponent >
                <LayersDirective>
                    <LayerDirective shapeData={world_map} shapeDataPath='Country' shapePropertyPath='name' dataSource={uncountries}
                        shapeSettings={ {
                            colorValuePath: 'Membership',
                            colorMapping: [
                                {
                                    value: 'Permanent', color: '#D84444'
                                },
                                {
                                    value: 'Non-Permanent', color: '#316DB5'
                                }]
                        } }>
                    </LayerDirective>
                </LayersDirective>
        </MapsComponent>
);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
{% endraw %}