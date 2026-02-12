


import * as React from "react";
import * as ReactDOM from 'react-dom';
import { HeatMapComponent, Inject, Legend, Tooltip, Adaptor } from '@syncfusion/ej2-react-heatmap';
export function App() {
    let heatmapData: any[] = [
        [0, 0, [4, 39]],
        [0, 1, [3, 8]],
        [0, 2, [1, 3]],
        [0, 3, [1, 10]],
        [0, 4, [4, 4]],
        [0, 5, [2, 15]],
        [1, 0, [4, 28]],
        [1, 1, [5, 92]],
        [1, 2, [5, 73]],
        [1, 3, [3, 1]],
        [1, 4, [3, 4]],
        [1, 5, [4, 126]],
        [2, 0, [4, 45]],
        [2, 1, [5, 152]],
        [2, 2, [0, 44]],
        [2, 3, [4, 54]],
        [2, 4, [5, 243]],
        [2, 5, [2, 45]]
    ];
    return (<HeatMapComponent
        titleSettings={{
            text: 'Commercial Aviation Accidents and Fatalities by year 2015 - 2017',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            },
        }}
        xAxis={{
            labels: ['2015', '2016', '2017']
        }}
        yAxis={{
            labels: [
                'Jan-Feb',
                'Mar-Apr',
                'May-Jun',
                'Jul-Aug',
                'Sep-Oct',
                'Nov-Dec'
            ],
        }}
        cellSettings={{
            labelTemplate:
                '<div style="width:25px;height:20px;text-align:center;padding-top:2px;background-color:#5BBB9C; border: 1px solid #000000; border-radius:50%;font-weight:bold;">${value}</div>'
        }}
        dataSourceSettings={{
            isJsonData: false,
            adaptorType: 'Cell'
        }}
        dataSource={heatmapData}
    >
        <Inject services={[Tooltip, Adaptor, Legend]} />
    </HeatMapComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



