
{% raw %}

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject } from '@syncfusion/ej2-react-maps';
import { AnnotationsDirective, AnnotationDirective, Annotations} from '@syncfusion/ej2-react-maps';

export function App() {
    return(
        <MapsComponent >
        <Inject services={[Annotations]}/>
            <AnnotationsDirective>
                <AnnotationDirective content='<div id="first"><h1>Maps</h1></div>' x="0%" y="50%" zIndex="-1"/>
            </AnnotationsDirective>
            <LayersDirective>
                <LayerDirective shapeData={world_map}>
                </LayerDirective>
            </LayersDirective>
        </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}