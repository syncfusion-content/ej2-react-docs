import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
ReactDOM.render(<MapsComponent id="maps">
                <LayersDirective>
                    <LayerDirective urlTemplate='https://tile.openstreetmap.org/level/tileX/tileY.png'/>
                </LayersDirective>
            </MapsComponent>, document.getElementById("maps"));
