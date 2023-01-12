import { world_map } from 'world-map.ts';
import { cluster } from 'marker-cluster.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker, Inject, MapsTooltip, Zoom } from '@syncfusion/ej2-react-maps';
ReactDOM.render(<MapsComponent id="maps" useGroupingSeparator={true} format='n' zoomSettings={{ enable: true }} titleSettings={{ text: 'Top 13 largest cities in the World', textStyle: { size: '16px' } }}>
                    <Inject services={[Marker, MapsTooltip, Zoom]}/>
                    <LayersDirective>
                        <LayerDirective shapeData={world_map} shapeSettings={{ fill: '#C1DFF5' }} markerClusterSettings={{ allowClustering: true, shape: 'Circle', height: 30, width: 30, labelStyle: { color: 'white' }, }}>
                            <MarkersDirective>
                                <MarkerDirective visible={true} dataSource={cluster} shape='Balloon' tooltipSettings={{ visible: true, valuePath: 'area', }} height={15} width={15} animationDuration={0}>
                                </MarkerDirective>
                            </MarkersDirective>
                        </LayerDirective>
                    </LayersDirective>
                </MapsComponent>, document.getElementById("maps"));
