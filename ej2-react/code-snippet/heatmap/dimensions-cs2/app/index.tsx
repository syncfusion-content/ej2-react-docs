

{% raw %}
import * as React from "react";
import * as ReactDOM from 'react-dom';
import { HeatMapComponent, Inject, Legend, Tooltip, Adaptor } from '@syncfusion/ej2-react-heatmap';
let heatmapData : any[] = [
        [73, 39, 26, 39, 94, 0],
        [93, 58, 53, 38, 26, 68],
        [99, 28, 22, 4, 66, 90],
        [14, 26, 97, 69, 69, 3],
        [7, 46, 47, 47, 88, 6],
        [41, 55, 73, 23, 3, 79],
        [56, 69, 21, 86, 3, 33],
        [45, 7, 53, 81, 95, 79],
        [60, 77, 74, 68, 88, 51],
        [25, 25, 10, 12, 78, 14],
        [25, 56, 55, 58, 12, 82],
        [74, 33, 88, 23, 86, 59]
];
export function App() {
return ( <HeatMapComponent
        width = {'80%'}
        height = {'90%'}
        titleSettings = { {
            text: 'Sales Revenue per Employee (in 1000 US$)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        } }
        xAxis = { {
            labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
        'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin',   'Mario'],
        } }
        yAxis = { {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        } }
        cellSettings = { {
            showLabel: true,
        } }
        dataSource={heatmapData}>
            <Inject services={[Tooltip]} />
            </HeatMapComponent> );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}

