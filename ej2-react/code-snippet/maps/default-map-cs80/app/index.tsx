
{% raw %}

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { MapsComponent, LayersDirective, LayerDirective, DataLabel, Inject, ImageExport } from '@syncfusion/ej2-react-maps';
export function App() {
    let mapsInstance: MapsComponent;
    function clickHandler(){
        mapsInstance.export('PNG', 'Maps');
    }
    return (<div>
        <ButtonComponent onClick= { clickHandler}>Export</ButtonComponent>
            <MapsComponent  allowImageExport={true} ref={g => mapsInstance = g}>
                <Inject services={[DataLabel, ImageExport]} />
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
