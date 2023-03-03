

import { world_map } from 'world-map.ts';
import { uncountries } from 'data.ts'
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Zoom, Inject } from '@syncfusion/ej2-react-maps';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
    'ar-AR': {
        'maps': {
            ZoomIn: 'تكبير',
            ZoomOut: 'تصغير',
            Zoom: 'زوم',
            Pan: 'مقلاة',
            Reset: 'إعادة تعيين'
        },
    }
});
export function App() {
   return(
            <MapsComponent  locale="ar-AR" zoomSettings={ { enable: true } }>
            <Inject services={[Zoom]}/>
                <LayersDirective>
                    <LayerDirective shapeData={world_map}
                                    shapeDataPath='Country'
                                    shapePropertyPath='name'
                                    dataSource={uncountries}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);


