

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Selection, Marker, Inject } from '@syncfusion/ej2-react-maps';

ReactDOM.render(
                <MapsComponent id="maps">
                <Inject services={[Marker, Selection]} />
                    <LayersDirective>
                        <LayerDirective shapeData={world_map}>
                        <MarkersDirective>
                            <MarkerDirective visible={true}
                                            height={20}
                                            width={20}
                                            animationDuration={0}
                                            fill="green"
                                            shape="Balloon"
                                            dataSource={[
                                                { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'Europe' },
                                                { latitude: 59.88893689676585, longitude: -109.3359375, name:'North America'},
                                                { latitude: -6.64607562172573, longitude: -55.54687499999999, name:'South America'}
                                            ]}
                                            initialMarkerSelection={{
                                                latitude: -6.64607562172573, longitude: -55.54687499999999
                                            }}
                                            selectionSettings={{
                                                enable: true,
                                                fill: 'blue',
                                                border: { color: 'white', width: 2}
                                            }}>
                            </MarkerDirective>
                        </MarkersDirective>
                        </LayerDirective>
                    </LayersDirective>
                </MapsComponent>,
            document.getElementById("maps") as HTMLElement
);


