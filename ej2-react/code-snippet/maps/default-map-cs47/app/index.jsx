{% raw %}
import { texas } from 'texas.ts';
import { usa_map } from 'usa.ts';
import { california } from 'california.ts'
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
export function App() {
   return(
        <MapsComponent >
            <LayersDirective>
                <LayerDirective shapeData={usa_map}
                    shapeSettings={ {
                        fill: '#E5E5E5',
                        border: { width: 0.1, color: 'Black' },
                    } } />
                <LayerDirective shapeData={texas} type="SubLayer"
                    shapeSettings={ {
                        fill: 'rgba(141, 206, 255, 0.6)',
                        border: { width: 0.25, color: '#1a9cff' },
                    } } />
                <LayerDirective shapeData={california} type="SubLayer"
                    shapeSettings={ {
                        fill: 'rgba(141, 206, 255, 0.6)',
                        border: { width: 0.25, color: '#1a9cff' },
                    } } />
            </LayersDirective>
        </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
{% endraw %}