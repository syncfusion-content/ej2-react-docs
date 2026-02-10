



import { world_map } from 'world-map.ts';
import { complexData } from 'data.ts'
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject, MapsTooltip } from '@syncfusion/ej2-react-maps';
import { BubblesDirective, BubbleDirective, Bubble } from '@syncfusion/ej2-react-maps';
import { MarkersDirective, MarkerDirective, Marker } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
            <MapsComponent >
			<Inject services={[Marker, Bubble, MapsTooltip]}/>
                <LayersDirective>
                    <LayerDirective shapeData={world_map} shapeDataPath='data.continent' shapePropertyPath='continent' dataSource={complexData}
					shapeSettings={{
					colorValuePath:'data.color'
					}} tooltipSettings={{
						visible: true,
						valuePath: 'data.continent'
					}}>
					<BubblesDirective>
                            <BubbleDirective visible={true} valuePath="data.value"
                            animationDuration={0} opacity={0.8} minRadius={20} maxRadius={90}
							dataSource={[
                                { 'name': 'India', 'value': 18.89685398845257, 'population': 391292635,
                                data: { 'color': 'red', 'population': 391292635,
                                'value': 189685398845257 }
                                }]}
					            tooltipSettings={{
				            		visible: true,
                                    valuePath: 'data.population',
                                    template:"<div>${data.population}</div>"
					            }}/>
                    </BubblesDirective>
					<MarkersDirective>
                        <MarkerDirective visible={true} height={20} animationDuration={0}
                            width={20}  longitudeValuePath= "data.y" latitudeValuePath= "data.x" shapeValuePath= "data.shape" colorValuePath= "data.color"
				            tooltipSettings={{
					            visible: true,
                                valuePath: 'data.name',
                                format: "${data.name}: ${data.x} : ${data.y}"
				            }}
				            offset = {{
				            	y: -10,
                                x: 0
				            }}
                            dataSource={[
                                { latitude: 37.6276571, longitude: -122.4276688,
                                name: 'San Bruno',
                                data: { x: 37.6276571, y: -122.4276688, name: 'San Bruno',
                                shape: 'Pentagon', color: 'red', imageUrl: 'images/ballon.png' }
                                },
                                { latitude: 33.5302186, longitude: -117.7418381, name: 'Laguna Niguel',
                                data: { x: 33.5302186, y: -117.7418381, name: 'Laguna Niguel',
                                color: 'blue', shape: 'Pentagon', imageUrl: 'images/ballon.png' }
                            }]}>
                        </MarkerDirective>
					</MarkersDirective>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



 