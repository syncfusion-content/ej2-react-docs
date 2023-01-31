{% raw %}
import { world_map } from 'world-map.ts';
import { dafaultData } from 'data.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject, Legend } from '@syncfusion/ej2-react-maps';
ReactDOM.render(<MapsComponent id="maps" legendSettings={{ visible: true, valuePath: 'continent', removeDuplicateLegend: true }}>
            <Inject services={[Legend]}/>
                <LayersDirective>
                    <LayerDirective shapeData={world_map} shapeDataPath='continent' shapePropertyPath='continent' dataSource={dafaultData} shapeSettings={{
        colorValuePath: 'color',
    }}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>, document.getElementById("maps"));
{% endraw %}