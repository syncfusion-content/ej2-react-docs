

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject } from '@syncfusion/ej2-react-maps';
import { BubblesDirective, BubbleDirective, Bubble } from '@syncfusion/ej2-react-maps';


ReactDOM.render(
            <MapsComponent id="maps">
            <Inject services={[Bubble]}/>
                <LayersDirective>
                    <LayerDirective shapeData={world_map} shapeDataPath="name" shapePropertyPath="name">
                        <BubblesDirective>
                            <BubbleDirective visible={true} valuePath="population"
                                             dataSource={[
                                                { name: 'India', population: '38332521', color: 'blue' },
                                                { name: 'New Zealand', population: '19651127', color: '#c2d2d6' },
                                                { name: 'Pakistan', population: '3090416', color: '#09156d' }
                                             ]}
                                             minRadius={20} maxRadius={40} colorValuePath="color"/>
                        </BubblesDirective>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>,
            document.getElementById("maps") as HTMLElement
);


