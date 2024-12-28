{% raw %}



import { usa_map } from 'usa.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject, DataLabel } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
        <MapsComponent >
        <Inject services={[DataLabel]} />
            <LayersDirective>
                    <LayerDirective shapeData={usa_map} 
                                    shapeSettings= {{
                                        autofill: true
                                    }}
                                    dataLabelSettings={ {
                                        visible: true,
                                        labelPath:'Name',
                                        template: '<div><div><img src="https://ej2.syncfusion.com/demos/src/maps/images/weather-clear.png" style="width:22px;height:22px"> </div> ${name}</img></div>'
                                    } }>
                    </LayerDirective>
            </LayersDirective>
        </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



{% endraw %}