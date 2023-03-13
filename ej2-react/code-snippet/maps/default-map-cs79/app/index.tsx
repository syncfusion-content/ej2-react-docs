
{% raw %}

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { MapsComponent, LayersDirective, LayerDirective, Inject, Print, DataLabel } from '@syncfusion/ej2-react-maps';
export function App() {
    let mapsInstance : MapsComponent;
    function clickHandler(){
        mapsInstance.print();
    }
    return (<div>
        <ButtonComponent onClick= { clickHandler}>print</ButtonComponent>
            <MapsComponent  allowPrint={true} ref={g => mapsInstance = g}>
                <Inject services={[DataLabel, Print]} />
                <LayersDirective>
                    <LayerDirective shapeData={world_map}
                     dataLabelSettings={ {
                            visible: true,
                            labelPath: 'name',
                            smartLabelMode: 'Trim'
                        } }>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}

