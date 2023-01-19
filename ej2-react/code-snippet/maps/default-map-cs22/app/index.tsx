
{% raw %}
import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
ReactDOM.render(
            <MapsComponent id="maps" mapsArea={{
                background: '#CCD1D1',
                border: {
                    width: 2,
                    color: 'green'
                } }}>
                <LayersDirective>
                    <LayerDirective shapeData={world_map}
                        shapeSettings={ {
                            autofill: true
                        } }>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>,
document.getElementById("maps") as HTMLElement
);
{% endraw %}


