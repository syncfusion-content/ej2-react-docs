

import { world_map } from '../world-map';
import { uncountries } from '../data';
import * as React from "react";
import { createRoot } from 'react-dom/client';
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';

export function App() {
    return(<MapsComponent >
                <LayersDirective>
                    <LayerDirective shapeData={world_map} shapeDataPath='Country' shapePropertyPath='name' dataSource={uncountries}
                        shapeSettings={ {
                            colorValuePath: 'Membership',
                            colorMapping: [
                                {
                                    value: 'Permanent', color: '#D84444'
                                },
                                {
                                    value: 'Non-Permanent', color: '#316DB5'
                                }]
                        } }>
                    </LayerDirective>
                </LayersDirective>
        </MapsComponent>
    );
}

const root = createRoot(document.getElementById('container'));
root.render(<App />);

 

