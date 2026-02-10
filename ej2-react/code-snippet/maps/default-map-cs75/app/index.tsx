

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject, NavigationLine, NavigationLinesDirective, NavigationLineDirective } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
            <MapsComponent id="element">
                <Inject services={[NavigationLine]} />
                <LayersDirective>
                    <LayerDirective shapeData={world_map}>
                        <NavigationLinesDirective>
                            <NavigationLineDirective visible={true}
                                                     latitude={[37.6276571, -122.4276688]}
                                                     longitude={[-74.0060, -117.7418381]}
                                                     color="black"
                                                     angle={90}
                                                     width={2}
                                                     dashArray="4"/>
                        </NavigationLinesDirective>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);


 
