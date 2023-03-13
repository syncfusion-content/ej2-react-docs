{% raw %}

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
                        <BubbleDirective visible={true} valuePath="population" dataSource={[
                                        { name: 'India', population: '38332521' },
                                        { name: 'New Zealand', population: '19651127' },
                                        { name: 'Pakistan', population: '3090416' }]}
                                        minRadius={5} colorValuePath= "population"  colorMapping={[
                                            { value: '38332521', color: '#C3E6ED' },
                                            { value: '19651127', color: '#F1931B' },
                                            { value: '3090416', color: 'blue'}]}/>
                    </BubblesDirective>
                </LayerDirective>
            </LayersDirective>
        </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}
