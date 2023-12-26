{% raw %}



import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import {
    MapsComponent,
    LayersDirective,
    LayerDirective,
    MarkersDirective,
    MarkerDirective,
    Inject,
    Marker,
    Zoom,
} from '@syncfusion/ej2-react-maps';
export function App() {
    let mapsInstance: MapsComponent;
    function formatKey(key) {
        if (key === 'minLatitude') {
            return 'Minimum Latitude';
        } else if (key === 'maxLatitude') {
            return 'Maximum Latitude';
        } else if (key === 'minLongitude') {
            return 'Minimum Longitude';
        } else if (key === 'maxLongitude') {
            return 'Maximum Longitude';
        }
    }

    function getMinMaxValues() {
        var mapBoundCoordinates;
        mapBoundCoordinates = mapsInstance.getMinMaxLatitudeLongitude();
        const displayDiv = document.getElementById('coordinatesDisplay');
        displayDiv.innerHTML = '';
        if (mapBoundCoordinates) {
            for (const key in mapBoundCoordinates) {
                if (Object.hasOwnProperty.call(mapBoundCoordinates, key)) {
                    const p = document.createElement('p');
                    const formattedKey = formatKey(key);
                    p.textContent = `${formattedKey}: ${mapBoundCoordinates[key]}`;
                    displayDiv.appendChild(p);
                }
            }
        } else {
            displayDiv.textContent = 'No coordinates available';
        }
    }
    return (
        <div>
            <ButtonComponent onClick={getMinMaxValues}>
                GetMinMaxLatitudeLongitude
            </ButtonComponent>
            <p id="coordinatesDisplay"></p>
            <MapsComponent
                ref={(g) => (mapsInstance = g)}
                zoomSettings={{ enable: true, zoomFactor: 7 }}
                centerPosition={{
                    latitude: 21.815447,
                    longitude: 80.1932,
                }}
            >
                <Inject services={[Marker, Zoom]} />
                <LayersDirective>
                    <LayerDirective shapeData={world_map}>
                        <MarkersDirective>
                            <MarkerDirective
                                visible={true}
                                height={25}
                                width={25}
                                shape="Circle"
                                animationDuration={1500}
                                dataSource={[
                                    {
                                        latitude: 22.572646,
                                        longitude: 88.363895,
                                    },
                                    {
                                        latitude: 25.0700428,
                                        longitude: 67.2847875,
                                    },
                                ]}
                            ></MarkerDirective>
                        </MarkersDirective>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



{% endraw %}