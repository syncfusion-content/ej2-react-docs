{% raw %}
import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
ReactDOM.render(<MapsComponent id="maps">
                <LayersDirective>
                    <LayerDirective shapeData={world_map} shapePropertyPath="continent" shapeDataPath="continent" dataSource={[
        { continent: "North America", color: '#71B081' },
        { continent: "South America", color: '#5A9A77' },
        { continent: "Africa", color: '#498770' },
        { continent: "Europe", color: '#39776C' },
        { continent: "Asia", color: '#266665' },
        { continent: "Oceania", color: '#124F5E' }
    ]} shapeSettings={{
        colorValuePath: 'color'
    }}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>, document.getElementById("maps"));
{% endraw %}