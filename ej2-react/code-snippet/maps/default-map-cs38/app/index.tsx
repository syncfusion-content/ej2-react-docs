
{% raw %}

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject, DataLabel } from '@syncfusion/ej2-react-maps';

export function App(){
  return(<MapsComponent id="maps">
            <Inject services={[DataLabel]} />
                <LayersDirective>
                    <LayerDirective shapeData={world_map}
                    dataLabelSettings={ {
                        visible: true,
                        labelPath: 'name',
                        smartLabelMode: 'Trim'
                    } }>
                    </LayerDirective>
                </LayersDirective>
        </MapsComponent>
);
}
const root = ReactDOM.createRoot(document.getElementById('maps'));
root.render(<App />);

{% endraw %}

