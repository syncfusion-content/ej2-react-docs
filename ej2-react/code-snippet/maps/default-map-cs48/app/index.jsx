import { world_map } from 'world-map.ts';
import { usa_map } from 'usa.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
ReactDOM.render(<MapsComponent id="maps" baseLayerIndex={1}>
                <LayersDirective>
                    <LayerDirective shapeData={world_map}/>
                    <LayerDirective shapeData={usa_map}/>
                </LayersDirective>
            </MapsComponent>, document.getElementById("maps"));
