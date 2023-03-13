{% raw %}
import { world_map } from 'world-map.ts';
import { default_data } from 'data.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MapsTooltip, Inject } from '@syncfusion/ej2-react-maps';
export function App() {
        return(<div><MapsComponent >
        <Inject services={[MapsTooltip]}/>
            <LayersDirective>
              <LayerDirective shapeData={world_map} dataSource={default_data} shapeDataPath='continent'
              shapePropertyPath='continent'
              tooltipSettings={{
                  visible: true,
                  valuePath: 'continent',
                  format: '${continent}',
                  fill: '#D0D0D0',
                  textStyle: {
                    color: 'green',
                    fontFamily: 'Times New Roman',
                    fontStyle: 'Sans-serif'
                }
              }}/>
            </LayersDirective>
           </MapsComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
{% endraw %}