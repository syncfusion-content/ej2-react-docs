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
                            <MarkerDirective visible={true}
                                            shape="Image"
                                            imageUrl="https://ej2.syncfusion.com/react/demos/src/maps/images/ballon.png"
                                            height={10}
                                            width={10}
                                            dataSource={[
                                                { latitude: 37.0000, longitude: -120.0000, city: 'California' },
                                                { latitude: 40.7127, longitude: -74.0059, city: 'New York' },
                                                { latitude: 42, longitude: -93, city: 'Iowa' }
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