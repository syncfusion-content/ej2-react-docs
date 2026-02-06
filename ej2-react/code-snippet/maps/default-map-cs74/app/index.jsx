
import { usa_map } from 'usa.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, MapsTooltip, Marker, Inject } from '@syncfusion/ej2-react-maps';
export function App() {
   return(
                <MapsComponent >
                <Inject services={[Marker, MapsTooltip]} />
                    <LayersDirective>
                        <LayerDirective shapeData={usa_map}>
                        <MarkersDirective>
                            <MarkerDirective visible={true}
                                            height={20}
                                            width={20}
                                            animationDuration={0}
                                            tooltipSettings={{
                                                visible: true,
                                                valuePath:'city'
                                            }}
                                            dataSource={[
                                                { latitude: 40.7424509, longitude: -74.0081468, city: 'New York' }
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
 