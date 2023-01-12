import { usa_map } from 'usa.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject, DataLabel } from '@syncfusion/ej2-react-maps';
ReactDOM.render(<MapsComponent id="maps">
            <Inject services={[DataLabel]}/>
                <LayersDirective>
                    <LayerDirective shapeData={usa_map} shapeSettings={{
        autofill: true
    }} dataLabelSettings={{
        visible: true,
        template: 'Label'
    }}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>, document.getElementById("maps"));
