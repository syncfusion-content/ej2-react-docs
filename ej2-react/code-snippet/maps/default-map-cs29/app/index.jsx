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
        labelPath: 'name',
        border: {
            color: 'green',
            width: 2
        },
        fill: 'red',
        opacity: 0.9,
        textStyle: {
            color: 'blue',
            size: '10px',
            fontStyle: 'Sans-serif',
            fontWeight: 'normal'
        }
    }}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>, document.getElementById("maps"));
