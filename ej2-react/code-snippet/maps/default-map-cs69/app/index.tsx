

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker, Inject } from '@syncfusion/ej2-react-maps';

ReactDOM.render(
                <MapsComponent id="maps">
                <Inject services={[Marker]} />
                    <LayersDirective>
                        <LayerDirective shapeData={world_map}>
                        <MarkersDirective>
                            <MarkerDirective visible={true}
                                            latitudeValuePath = "latitude"
                                            longitudeValuePath= "longitude"
                                            dataSource={[
                                                { latitude: 49.95121990866204, longitude: 18.468749999999998 },
                                                { latitude: 59.88893689676585, longitude: -109.3359375},
                                                { latitude: -6.64607562172573, longitude: -55.54687499999999 }
                                            ]}>
                            </MarkerDirective>
                        </MarkersDirective>
                        </LayerDirective>
                    </LayersDirective>
                </MapsComponent>,
            document.getElementById("maps") as HTMLElement
);


