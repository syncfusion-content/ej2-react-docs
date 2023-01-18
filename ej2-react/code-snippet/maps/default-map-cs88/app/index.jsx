{% raw %}
import { markerDataSource } from 'markerdata.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker, Legend, Inject } from '@syncfusion/ej2-react-maps';
ReactDOM.render(<MapsComponent id="maps" legendSettings={{
        visible: true,
        type: 'Markers',
        useMarkerShape: true,
        toggleLegendSettings: {
            enable: true,
            applyShapeSettings: false,
            border: {
                color: 'green',
                width: 2,
            },
        },
    }}>
              <Inject services={[Marker, Legend]}/>
              <LayersDirective>
                <LayerDirective urlTemplate="https://tile.openstreetmap.org/level/tileX/tileY.png">
                  <MarkersDirective>
                    <MarkerDirective visible={true} dataSource={markerDataSource} colorValuePath="color" shapeValuePath="shape" legendText="country"></MarkerDirective>
                  </MarkersDirective>
                </LayerDirective>
              </LayersDirective>
            </MapsComponent>, document.getElementById("maps"));
{% endraw %}