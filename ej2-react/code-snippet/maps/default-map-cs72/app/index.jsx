
import { world_map } from 'world-map.ts';
import { cluster } from 'marker-cluster.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, Point, MarkerDirective, Marker, Inject, MapsTooltip, Zoom } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
                <MapsComponent  useGroupingSeparator={true} format='n' zoomSettings={{ enable: true  }} titleSettings={{ text: 'Top 13 largest cities in the World', textStyle: { size: '16px' } }}>
                    <Inject services={[Marker, MapsTooltip, Zoom]} />
                    <LayersDirective>
                        <LayerDirective shapeData={world_map} shapeSettings={{ fill: '#C1DFF5' }} markerClusterSettings={{  
                            allowClustering: true,
                            allowClusterExpand: true,
                            shape: 'Circle',
                            height: 40,
                            width: 40,
                            labelStyle : { color: 'white'},
                            offset: new Point(10, 20),
                            opacity: 0.9,
                            fill: 'green',
                            connectorLineSettings: {
                                color: 'orange',
                                opacity: 0.8,
                                width: 2
                            }
                           }}>
                            <MarkersDirective>
                                <MarkerDirective visible={true} dataSource={cluster} shape='Balloon' tooltipSettings={{ visible: true, valuePath: 'area', }} height={15} width={15} animationDuration={0}>
                                </MarkerDirective>
                            </MarkersDirective>
                        </LayerDirective>
                    </LayersDirective>
                </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
 