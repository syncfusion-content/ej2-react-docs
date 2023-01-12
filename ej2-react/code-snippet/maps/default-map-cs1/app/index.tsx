

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject } from '@syncfusion/ej2-react-maps';
import { AnnotationsDirective, AnnotationDirective, Annotations} from '@syncfusion/ej2-react-maps';


ReactDOM.render(
            <MapsComponent id="maps">
            <Inject services={[Annotations]}/>
                <AnnotationsDirective>
                    <AnnotationDirective content='<div id="first"><h1>Maps</h1></div>' x="0%" y="50%" zIndex="-1"/>
                </AnnotationsDirective>
                <LayersDirective>
                    <LayerDirective shapeData={world_map}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>,
            document.getElementById("maps") as HTMLElement
);


