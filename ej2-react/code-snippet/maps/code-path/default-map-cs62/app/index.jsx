{% raw %}

import { world_map } from 'world-map.ts';
import { uncountries } from 'data.ts'
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Zoom, Inject } from '@syncfusion/ej2-react-maps';
importÂ { L10n } fromÂ '@syncfusion/ej2-base';

L10n.load({
    'ar-AR': {
        'maps': {
            ZoomIn: 'ØªÙƒØ¨ÙŠØ±',
            ZoomOut: 'ØªØµØºÙŠØ±',
            Zoom: 'Ø²ÙˆÙ…',
            Pan: 'Ù…Ù‚Ù„Ø§Ø©',
            Reset: 'Ø¥Ø¹Ø§Ø¯Ø© ØªØ¹ÙŠÙŠÙ†'
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
 
{% endraw %}
