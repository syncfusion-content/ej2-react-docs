{% raw %}



import { usa_map } from 'usa.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject, DataLabel, MapsTooltip } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
        <MapsComponent >
        <Inject services={[DataLabel, MapsTooltip]} />
           <LayersDirective>
               <LayerDirective shapeData={usa_map}
                                shapeSettings= {{
                                   autofill: true
                                }}
                                dataLabelSettings={ {
                                   visible: true,
                                   smartLabelMode: 'Hide',
                                   intersectionAction: 'Trim',
                                   labelPath: 'name',
                                   border: {
                                       color: 'green',
                                       width: 2
                                   },
                                   fill: 'transparent',
                                   opacity: 0.9,
                                   textStyle: {
                                       size: '17px',
                                       fontStyle: 'Sans-serif',
                                       fontWeight: 'normal'
                                   }
                                } }
                                tooltipSettings= {{
                                  visible: true,
                                  valuePath: 'name'
                            }}>
               </LayerDirective>
        </LayersDirective>
        </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



{% endraw %}