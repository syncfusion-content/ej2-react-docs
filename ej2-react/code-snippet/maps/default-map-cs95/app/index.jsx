{% raw %}

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, InitialShapeSelectionsDirective, InitialShapeSelectionDirective, LayerDirective, Selection, Inject } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
            <MapsComponent >
            <Inject services={[Selection]} />
                <LayersDirective>
                    <LayerDirective shapeData={world_map}  selectionSettings={{
                        enable: true,
                        fill: 'green',
                        border: { color: 'white', width: 2 }
                    }}>
        <InitialShapeSelectionsDirective>
            <InitialShapeSelectionDirective shapePath={'continent'} shapeValue={'Africa'}>
            </InitialShapeSelectionDirective>
            <InitialShapeSelectionDirective shapePath={'name'} shapeValue={'India'}>
            </InitialShapeSelectionDirective>
        </InitialShapeSelectionsDirective>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
{% endraw %}