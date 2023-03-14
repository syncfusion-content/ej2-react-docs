{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { TreeMapComponent, Inject, TreeMapLegend } from '@syncfusion/ej2-react-treemap';
export function App() {
  return ( <TreeMapComponent 
        dataSource={[
                       { fruit:'Apple', count:5000, visibility: true , color: '#71B081' },
                       { fruit:'Grape', count:3000, visibility: false, color: '#5A9A77' },
                       { fruit:'Apple', count:2300, visibility: true, color: '#498770' },
                       { fruit:'Banana', count:500, visibility: false, color: '#39776C' },
                       { fruit:'Grape', count:4300, visibility: true, color: '#266665' },
                       { fruit:'Papaya', count:1200, visibility: false, color: '#124F5E' }
                    ]}
        weightValuePath= 'count'
        colorValuePath='color'
        palette= {[]}
        legendSettings= {{
            visible: true,
            valuePath: 'fruit',
            removeDuplicateLegend: true
        }}
        leafItemSettings=  {{
            labelPath: 'fruit',
        }}>
        <Inject services={[TreeMapLegend]} />
    </TreeMapComponent> );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
{% endraw %}