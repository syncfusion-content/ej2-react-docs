



import { world_map } from '../world-map';
import * as React from "react";
import { createRoot } from 'react-dom/client';
import { MapsComponent, LayersDirective, LayerDirective, Inject, DataLabel } from '@syncfusion/ej2-react-maps';

export function App(){
    return(<MapsComponent >
            <Inject services={[DataLabel]} />
                <LayersDirective>
                    <LayerDirective shapeData={world_map}
                    dataLabelSettings={ {
                        visible: true,
                        labelPath: 'name',
                        smartLabelMode: 'Trim'
                    } }>
                    </LayerDirective>
                </LayersDirective>
        </MapsComponent>
    );
}

const root = createRoot(document.getElementById('container'));
root.render(<App />);


 

