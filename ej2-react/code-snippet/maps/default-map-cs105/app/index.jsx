
import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject, Zoom  } from '@syncfusion/ej2-react-maps';
export function App() {
   return(
    <MapsComponent zoomSettings= {{
        enable: true,
        toolbarSettings:{
            orientation:'Vertical',
            backgroundColor:'pink',
            borderWidth:3,
            borderColor:'green',
            verticalAlignment:'Near',
            buttonSettings: {
               toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset']
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
 