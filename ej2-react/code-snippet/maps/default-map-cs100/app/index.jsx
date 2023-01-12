import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MapsTooltip, Inject } from '@syncfusion/ej2-react-maps';
ReactDOM.render(<MapsComponent id="maps">
                        <Inject services={[MapsTooltip]}/>
                <LayersDirective>
                    <LayerDirective shapeData={world_map} tooltipSettings={{
        visible: true,
        valuePath: 'name'
    }}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>, document.getElementById("maps"));
