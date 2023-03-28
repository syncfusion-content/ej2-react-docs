{% raw %}

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker, Inject } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
                <MapsComponent >
                <Inject services={[Marker]} />
                    <LayersDirective>
                        <LayerDirective shapeData={world_map}>
                        <MarkersDirective>
                        <MarkerDirective visible={true} shape= "Diamond" height={15} fill="green" width={15}
                                        dataSource={[
                                            { latitude: 37.0000, longitude: -120.0000, name:'California'},
                                            { latitude: 40.7127, longitude: -74.0059, name:"New York" },
                                            { latitude: 42, longitude: -93, name:'Iowa' }
                                        ]}>
                                        </MarkerDirective>
                        <MarkerDirective visible={true} height={10} width={10} fill="blue" shape= "Circle"
                                        dataSource={[
                                            { latitude: 19.228825, longitude: 72.854118, name: "Mumbai"},
                                            { latitude: 28.610001, longitude: 77.230003, name: "Delhi"},
                                            { latitude: 13.067439, longitude: 80.237617, name: "Chennai"}
                                        ]}>
                        </MarkerDirective>
                        </MarkersDirective>
                        </LayerDirective>
                    </LayersDirective>
                </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);


{% endraw %}
