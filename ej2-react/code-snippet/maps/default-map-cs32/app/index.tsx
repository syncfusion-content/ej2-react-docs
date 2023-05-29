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
                    <LayerDirective shapeData={usa_map} shapePropertyPath="name" shapeDataPath="Name"
                                    dataSource ={ [
                                        { "Name": "Iowa", "Population": "29863010" },
                                        { "Name": "Utah", "Population": "1263010" },
                                        { "Name": "Texas"," Population": "963010" }
                                    ] }
                                    shapeSettings= {{
                                        autofill: true
                                    }}
                                    dataLabelSettings={ {
                                        visible: true,
                                        labelPath:'Name',
                                        template: '<div><div><img src="https://ej2.syncfusion.com/demos/src/maps/images/weather-clear.png" style="width:22px;height:22px"> </div> ${Name}</img></div>'
                                    } }>
                    </LayerDirective>
            </LayersDirective>
        </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



{% endraw %}