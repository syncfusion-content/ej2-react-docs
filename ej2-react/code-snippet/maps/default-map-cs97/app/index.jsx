
import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Highlight, Inject, Legend } from '@syncfusion/ej2-react-maps';
export function App() {
   return(
            <MapsComponent  legendSettings={{visible: true}}>
            <Inject services={[Highlight, Legend]} />
                <LayersDirective>
                    <LayerDirective shapeData={world_map}  highlightSettings={ {
                        enable: true,
                        fill: 'green',
                        border: { color: 'white', width: 2 }
                    } }
                        dataSource={[
                            { "Country": "China", "Membership": "Permanent"},
                            { "Country": "France", "Membership": "Permanent" },
                            { "Country": "Russia", "Membership": "Permanent"},
                            { "Country": "Kazakhstan", "Membership": "Non-Permanent"},
                            { "Country": "Poland", "Membership": "Non-Permanent"},
                            { "Country": "Sweden", "Membership": "Non-Permanent"}
                        ]} shapePropertyPath="name" shapeDataPath="Country"
                         shapeSettings={{
                            colorValuePath: 'Membership',
                            colorMapping: [
                                { value: 'Permanent', color: '#D84444' },
                                { value: 'Non-Permanent', color: '#316DB5'}]
                         }}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

 