{% raw %}



import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Selection, Inject, Legend  } from '@syncfusion/ej2-react-maps';

ReactDOM.render(
            <MapsComponent id="maps" legendSettings={{visible: true}}>
            <Inject services={[Selection, Legend]} />
                <LayersDirective>
                    <LayerDirective shapeData={world_map} selectionSettings={ {
                        enable: true,
                        fill: 'blue',
                        border: { color: 'white', width: 2 }
                    } } dataSource={[
                        {"Country": "China", "Membership": "Permanent"},
                        {"Country": "France","Membership": "Permanent" },
                        { "Country": "Russia","Membership": "Permanent"},
                        {"Country": "Kazakhstan","Membership": "Non-Permanent"},
                        { "Country": "Poland","Membership": "Non-Permanent"},
                        {"Country": "Sweden","Membership": "Non-Permanent"}
                       ]} shapePropertyPath="name" shapeDataPath="Country"
                        shapeSettings={{
                           colorValuePath: 'Membership',
                           colorMapping: [
                               { value: 'Permanent', color: '#D84444' },
                               { value: 'Non-Permanent', color: '#316DB5'}]
                        }}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>,
document.getElementById("maps") as HTMLElement
);



{% endraw %}