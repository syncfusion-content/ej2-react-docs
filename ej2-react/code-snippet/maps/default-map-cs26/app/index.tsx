
{% raw %}
import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
ReactDOM.render(
            <MapsComponent id="element" projectionType='Miller'>
                <LayersDirective>
                    <LayerDirective shapeData={world_map}
                        shapeSettings={ {
                            autofill: true,
                            palette: ['#33CCFF', '#FF0000', '#800000', '#FFFF00', '#808000']
                        } }>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>,
            document.getElementById("maps") as HTMLElement
);
{% endraw %}

