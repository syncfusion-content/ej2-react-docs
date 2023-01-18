{% raw %}
import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject } from '@syncfusion/ej2-react-maps';
import { BubblesDirective, BubbleDirective, Bubble, Highlight } from '@syncfusion/ej2-react-maps';
ReactDOM.render(<MapsComponent id="maps">
            <Inject services={[Bubble, Highlight]}/>
                <LayersDirective>
                    <LayerDirective shapeData={world_map} shapeDataPath="name" shapePropertyPath="name">
                        <BubblesDirective>
                            <BubbleDirective visible={true} valuePath="population" dataSource={[
        { name: 'India', population: '38332521' },
        { name: 'Pakistan', population: '3090416' },
        { name: 'New Zealand', population: '19651127' }
    ]} highlightSettings={{
        enable: true,
        fill: 'green',
        border: { color: 'white', width: 2 }
    }}/>
                        </BubblesDirective>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>, document.getElementById("maps"));
{% endraw %}