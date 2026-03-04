{% raw %}
import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject, Zoom } from '@syncfusion/ej2-react-maps';
export function App() {
   return(
    <MapsComponent zoomSettings= {{
        enable: true,
        toolbarSettings:{
            buttonSettings: {
                 fill:'pink',
                 padding: 10,
                 toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'],
                 color: 'red',
                 borderColor:'green',
                 radius:35,
                 selectionColor:'#d55e5e',
                 hightlightColor:'#5ed59a',
                 opacity:0.6,
                 borderWidth: 2
             }
        }
    }}>
    <Inject services={[Zoom]} />
        <LayersDirective>
            <LayerDirective shapeData={world_map} 
            shapeSettings= {{
                fill: '#C1DFF5'
            }}>
            </LayerDirective>
        </LayersDirective>
    </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
 
{% endraw %}