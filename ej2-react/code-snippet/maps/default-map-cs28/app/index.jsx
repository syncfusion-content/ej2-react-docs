import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject, DataLabel } from '@syncfusion/ej2-react-maps';
ReactDOM.render(<MapsComponent id="maps">
            <Inject services={[DataLabel]}/>
                <LayersDirective>
                    <LayerDirective shapeData={world_map} shapePropertyPath="name" shapeDataPath="name" shapeSettings={{
        autofill: true
    }} dataSource={[
        { "name": "Afghanistan", "value": 53, "countryCode": "AF", "population": "29863010", "color": "red", "density": "119", "continent": "Asia" },
        { "name": "Albania", "value": 117, "countryCode": "AL", "population": "3195000", "color": "Blue", "density": "111", "continent": "Europe" },
        { "name": "Algeria", "value": 15, "countryCode": "DZ", "population": "34895000", "color": "Green", "density": "15", "continent": "Africa" }
    ]} dataLabelSettings={{
        visible: true,
        labelPath: 'continent',
        smartLabelMode: 'Trim'
    }}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>, document.getElementById("maps"));
