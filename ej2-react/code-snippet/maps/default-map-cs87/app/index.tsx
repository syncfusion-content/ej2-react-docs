

{% raw %}
import { africa_continent } from 'africa-continent.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';

ReactDOM.render(
            <MapsComponent id="maps">
                <LayersDirective>
                    <LayerDirective urlTemplate='https://tile.openstreetmap.org/level/tileX/tileY.png' />
                    <LayerDirective shapeData= {africa_continent}
                                    type= 'SubLayer'
                                    shapeSettings= {{
                                        fill: 'blue'
                                    }}
                    />
                </LayersDirective>
            </MapsComponent>,
document.getElementById("maps") as HTMLElement
);

{% endraw %}

