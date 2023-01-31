{% raw %}
import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject, MapsTooltip } from '@syncfusion/ej2-react-maps';
export function App() {
    return (<MapsComponent id="maps">
            <Inject services={[MapsTooltip]}/>
                <LayersDirective>
                    <LayerDirective shapeData={world_map} tooltipSettings={{
            visible: true,
            valuePath: 'name'
        }}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('maps'));
root.render(<App />);
{% endraw %}