


import { world_map } from '../world-map';
import * as React from "react";
import { createRoot } from 'react-dom/client';
import { MapsComponent, LayersDirective, LayerDirective, Inject, MapsTooltip } from '@syncfusion/ej2-react-maps';

export function App() {
    return(<MapsComponent >
            <Inject services={[MapsTooltip]} />
                <LayersDirective>
                    <LayerDirective shapeData={world_map}
                     tooltipSettings={ {
                        visible: true,
                        valuePath: 'name'
                    } }>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
    );
}

const root = createRoot(document.getElementById('container'));
root.render(<App />);

 

