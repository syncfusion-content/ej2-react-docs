
{% raw %}

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker, Inject } from '@syncfusion/ej2-react-maps';
export function App() {
    return (
        <MapsComponent >
            <Inject services={[Marker]} />
            <LayersDirective>
                <LayerDirective shapeData={world_map}>
                    <MarkersDirective>
                        <MarkerDirective visible={true}
                            shape='Circle'
                            widthValuePath='width'
                            heightValuePath='height'
                            dataSource={[
                                { latitude: 49.95121990866204, longitude: 18.468749999999998, width: 30, height: 30 },
                                { latitude: 59.88893689676585, longitude: -109.3359375, width: 20, height: 20 },
                                { latitude: -6.64607562172573, longitude: -55.54687499999999, width: 10, height: 10 }
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
