import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject } from '@syncfusion/ej2-react-maps';
import { BubblesDirective, BubbleDirective, Bubble, Legend } from '@syncfusion/ej2-react-maps';
ReactDOM.render(<MapsComponent id="maps" legendSettings={{ visible: true, type: 'Bubbles' }}>
            <Inject services={[Bubble, Legend]}/>
                <LayersDirective>
                    <LayerDirective shapeData={world_map} shapeDataPath="name" shapePropertyPath="name">
                        <BubblesDirective>
                            <BubbleDirective visible={true} valuePath="population" colorValuePath="color" dataSource={[
        { color: 'green', name: 'India', population: '38332521' },
        { color: 'purple', name: 'New Zealand', population: '19651127' },
        { color: 'blue', name: 'Pakistan', population: '3090416' }
    ]} minRadius={20} maxRadius={40}/>
                        </BubblesDirective>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>, document.getElementById("maps"));
