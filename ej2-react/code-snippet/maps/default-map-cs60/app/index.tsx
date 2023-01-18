

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, Legend,MarkerDirective, Marker, Inject } from '@syncfusion/ej2-react-maps';

ReactDOM.render(
                <MapsComponent id="maps" legendSettings= {{visible: true, type: 'Markers'}}>
                <Inject services={[Marker, Legend]} />
                    <LayersDirective>
                        <LayerDirective shapeData={world_map}>
                        <MarkersDirective>
                            <MarkerDirective
                                    visible={true}
                                    legendText= 'city'
                                    dataSource={[
                                        { latitude: 37.0000, longitude: -120.0000, city: 'California' },
                                        { latitude: 40.7127, longitude: -74.0059, city: 'New York' },
                                        { latitude: 42, longitude: -93, city: 'Iowa' }
                                    ]}>
                            </MarkerDirective>
                        </MarkersDirective>
                        </LayerDirective>
                    </LayersDirective>
                </MapsComponent>,
            document.getElementById("maps") as HTMLElement
);


