

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
                        <MarkerDirective visible={true}
                                            shape= {'Circle'} shapeValuePath= {'shape'} colorValuePath= {'color'}
                                            dataSource={[
                                                { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'Europe', color:'red', shape:'Triangle' },
                                                { latitude: 59.88893689676585, longitude: -109.3359375, name:'North America',
                                                color:'blue', shape:'Pentagon' },
                                                { latitude: -6.64607562172573, longitude: -55.54687499999999, name:'South America',
                                                color:'green', shape:'InvertedTriangle' }
                                                ]}
                                        >
                                        </MarkerDirective>
                                        </MarkersDirective>
                        </LayerDirective>
                    </LayersDirective>
                </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);


 
