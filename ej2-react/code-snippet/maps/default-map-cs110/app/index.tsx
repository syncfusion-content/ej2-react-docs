{% raw %}



import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MapsTooltip, Inject } from '@syncfusion/ej2-react-maps';
export function App() {
        return(<div><MapsComponent >
        <Inject services={[MapsTooltip]}/>
            <LayersDirective>
              <LayerDirective shapeData={world_map}
              tooltipSettings={{
                  visible: true,
                  valuePath: 'name',
                  fill: '#D0D0D0',
                  textStyle: {
                    color: 'green',
                    fontFamily: 'Times New Roman',
                    fontStyle: 'Sans-serif'
                },
                duration: 3000
              }}/>
            </LayersDirective>
           </MapsComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



{% endraw %}