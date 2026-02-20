{% raw %}



import * as React from "react";
import * as ReactDOM from 'react-dom';
import { HeatMapComponent, Inject, Legend, Tooltip, ITooltipEventArgs } from '@syncfusion/ej2-react-heatmap';
export function App() {
let heatmapData : any[]= [
    [0.72, 0.71, 0.71, 0.67, 0.72, 0.53, 0.53, 0.56, 0.58, 0.56],
    [2.28, 2.29, 2.09, 1.84, 1.64, 1.49, 1.49, 1.39, 1.32, 1.23],
    [2.02, 2.17, 2.3, 2.39, 2.36, 2.52, 2.62, 2.57, 2.57, 2.74],
    [3.21, 3.26, 3.45, 3.47, 3.42, 3.34, 3.14, 2.83, 2.64, 2.61],
    [3.22, 3.13, 3.04, 2.95, 2.69, 2.49, 2.27, 2.18, 2.06, 1.87],
    [3.3, 3.39, 3.4, 3.48, 3.6, 3.67, 3.73, 3.79, 3.79, 4.07],
    [5.8, 5.74, 5.64, 5.44, 5.18, 5.08, 5.07, 5.0, 5.35, 5.47],
    [6.91, 7.4, 8.13, 8.8, 9.04, 9.24, 9.43, 9.35, 9.49, 9.69]
];
function tooltipTemplate(args: ITooltipEventArgs): void {
    args.content = [
      'In ' +
        args.yLabel +
        ', the ' +
        args.xLabel +
        ' produced ' +
        args.value +
        ' million barrels per day'
    ];
}
return (
      <HeatMapComponent
        titleSettings={{
          text: 'Crude Oil Production of Non-OPEC Countries (in Million barrels per day)',
          textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'Segoe UI'
          }
        }}
        xAxis={{
          labels: ['Canada', 'China', 'Egypt', 'Mexico', 'Norway', 'Russia', 'UK', 'USA']
        }}
        yAxis={{
          labels: [
            '2000',
            '2001',
            '2002',
            '2003',
            '2004',
            '2005',
            '2006',
            '2007',
            '2008',
            '2009',
            '2010'
          ]
        }}
        cellSettings={{
          showLabel: false
        }}
        showTooltip={true}
        tooltipRender={tooltipTemplate as any}
        dataSource={heatmapData}
      >
        <Inject services={[Legend, Tooltip]} />
      </HeatMapComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);


{% endraw %}