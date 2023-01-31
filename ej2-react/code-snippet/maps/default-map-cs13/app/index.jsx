{% raw %}
import { world_map } from 'world-map.ts';
import { uncountries } from 'data.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
ReactDOM.render(<MapsComponent id="maps">
                <LayersDirective>
                    <LayerDirective shapeData={world_map} shapeDataPath='Country' shapePropertyPath='name' dataSource={uncountries} shapeSettings={{
        fill: '#E5E5E5',
        colorMapping: [
            {
                value: 'Permanent',
                color: '#EDB46F'
            },
            {
                color: '#F1931B',
                value: 'Non-Permanent'
            }
        ],
        colorValuePath: 'Membership'
    }}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>, document.getElementById("maps"));
{% endraw %}