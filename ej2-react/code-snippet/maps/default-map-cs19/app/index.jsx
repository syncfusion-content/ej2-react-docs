

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
        <MapsComponent  titleSettings={{
            text: 'Maps Component',
            textStyle: {
                color: 'red',
                fontStyle: 'italic',
                fontWeight: 'regular',
                fontFamily: 'arial',
                size: '14px'
            },
            alignment: 'Center'
        }}>
            <LayersDirective>
                <LayerDirective shapeData={world_map}
                    shapeSettings={ {
                        autofill: true
                    } }>
                </LayerDirective>
            </LayersDirective>
        </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

 