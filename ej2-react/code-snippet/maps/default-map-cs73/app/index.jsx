

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker, Inject, Zoom } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
                <MapsComponent  zoomSettings= {{enable: true, mouseWheelZoom : true }}>
                    <Inject services={[Marker, Zoom]} />
                    <LayersDirective>
                        <LayerDirective shapeData={world_map} markerClusterSettings={{ allowClustering: true,  allowClusterExpand: true,shape: 'Circle', height: 40, width: 40, labelStyle: { color: 'white' }, }}>
                            <MarkersDirective>
                                <MarkerDirective visible={true} dataSource={[
                                                { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'Europe' },
                                                { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'Europe' },
                                                { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'Europe' },
                                                { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'Europe' },
                                                { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'Europe' },
                                                { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'Europe' },
                                                { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'Europe' },
                                                { latitude: 59.88893689676585, longitude: -109.3359375, name:'North America' },
                                                { latitude: -6.64607562172573, longitude: -55.54687499999999, name:'South America'}
                                                ]}  animationDuration={0}>
                                </MarkerDirective>
                            </MarkersDirective>
                        </LayerDirective>
                    </LayersDirective>
                </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

 