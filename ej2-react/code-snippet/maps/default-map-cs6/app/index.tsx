import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject } from '@syncfusion/ej2-react-maps';
import { BubblesDirective, BubbleDirective, Bubble } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
        <MapsComponent >
        <Inject services={[Bubble]}/>
            <LayersDirective>
                <LayerDirective shapeData={world_map} shapeDataPath="name" shapePropertyPath="name">
                    <BubblesDirective>
                        <BubbleDirective visible={true} valuePath="population" bubbleType="Square" dataSource={[{ name: 'India', population: '38332521' },
                        { name: 'Pakistan', population: '3090416' }]} minRadius={20} maxRadius={40} />
                    </BubblesDirective>
                </LayerDirective>
            </LayersDirective>
        </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);