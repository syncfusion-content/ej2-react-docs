


import * as React from "react";
import * as ReactDOM from 'react-dom';
import { HeatMapComponent, Inject, Legend, Adaptor, Tooltip, BubbleTooltipData, ITooltipEventArgs } from '@syncfusion/ej2-react-heatmap';
export function App() {
    let heatmapData: any[] = [
        [0, 0, [4, 39]], [0, 1, [3, 8]], [0, 2, [1, 3]], [0, 3, [1, 10]], [0, 4, [4, 4]], [0, 5, [2, 15]],
        [1, 0, [4, 28]], [1, 1, [5, 92]], [1, 2, [5, 73]], [1, 3, [3, 1]], [1, 4, [3, 4]], [1, 5, [4, 126]],
        [2, 0, [4, 45]], [2, 1, [5, 152]], [2, 2, [0, 44]], [2, 3, [4, 54]], [2, 4, [5, 243]], [2, 5, [2, 45]]
    ];
    function tooltipTemplate(args: ITooltipEventArgs): void {
        args.content = ['Year ' + ' : ' + args.xLabel + '<br/>' + 'Months ' + ' : ' + args.yLabel + '<br/>'
            + 'Accidents ' + ' : ' + (args.value as BubbleTooltipData[])[0].bubbleData + '<br/>' + 'Fatalities ' + ' : '
            + (args.value as BubbleTooltipData[])[1].bubbleData];
    };
    return (<HeatMapComponent
        titleSettings={{
            text: 'Commercial Aviation Accidents and Fatalities by year 2012 - 2017',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        }}
        xAxis={{
            labels: ['2017', '2016', '2015']
        }}
        yAxis={{
            labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec']
        }}
        paletteSettings={{
            palette: [
                { color: '#C06C84' },
                { color: '#6C5B7B' },
                { color: '#355C7D' }
            ],
            type: "Gradient"
        }}
        legendSettings={{
            visible: true
        }}
        cellSettings={{
            border: {
                width: 1
            },
            tileType: 'Bubble',
            bubbleType: 'SizeAndColor'
        }}
        tooltipRender={tooltipTemplate}
        dataSource={heatmapData}
        dataSourceSettings={{
            isJsonData: false,
            adaptorType: 'Cell'
        }}>
        <Inject services={[Legend, Adaptor, Tooltip]} />
    </HeatMapComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



