

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { MapsComponent, LayersDirective, LayerDirective, Inject, ImageExport } from '@syncfusion/ej2-react-maps';
export function App() {
    let mapsInstance : MapsComponent;
    function clickHandler(){
        mapsInstance.export('PNG', 'Maps');
    }
    return (<div>
        <ButtonComponent onClick= { clickHandler}>Export</ButtonComponent>
        <MapsComponent  allowImageExport={true}
                                 ref={g => mapsInstance = g}
                                 titleSettings={ { text: 'OSM' } }>
            <Inject services={[ImageExport]} />
            <LayersDirective>
                <LayerDirective urlTemplate="https://tile.openstreetmap.org/level/tileX/tileY.png">
                </LayerDirective>
            </LayersDirective>
        </MapsComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

 
