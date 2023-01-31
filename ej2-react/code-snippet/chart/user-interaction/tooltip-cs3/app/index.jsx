import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, SplineSeries } from '@syncfusion/ej2-react-charts';
function App() {
    const primaryxAxis = { valueType: 'Category' };
    const tooltip = {
        enable: true, header: 'Unemployment',
        format: '<b>${point.x} : ${point.y}</b>'
    };
    const marker = { visible: true, width: 10, height: 10 };
    const data1 = [
        { x: 'Sun', y: 15 }, { x: 'Mon', y: 22 },
        { x: 'Tue', y: 32 },
        { x: 'Wed', y: 31 },
        { x: 'Thu', y: 29 }, { x: 'Fri', y: 24 },
        { x: 'Sat', y: 18 },
    ];
    const data2 = [
        { x: 'Sun', y: 10 }, { x: 'Mon', y: 18 },
        { x: 'Tue', y: 28 },
        { x: 'Wed', y: 28 },
        { x: 'Thu', y: 26 }, { x: 'Fri', y: 20 },
        { x: 'Sat', y: 15 }
    ];
    const data3 = [
        { x: 'Sun', y: 2 }, { x: 'Mon', y: 12 },
        { x: 'Tue', y: 22 },
        { x: 'Wed', y: 23 },
        { x: 'Thu', y: 19 }, { x: 'Fri', y: 13 },
        { x: 'Sat', y: 8 },
    ];
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} tooltip={tooltip} title='Unemployment Rates 1975-2010'>
      <Inject services={[SplineSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data1} xName='x' yName='y' name='Max Temp' width={2} type='Spline' marker={marker} tooltipFormat='${point.x}'>
        </SeriesDirective>
        <SeriesDirective dataSource={data2} xName='x' yName='y' name='Avg Temp' width={2} type='Spline' marker={marker} tooltipFormat='${point.y}'>
        </SeriesDirective>
        <SeriesDirective dataSource={data3} xName='x' yName='y' name='Min Temp' width={2} type='Spline' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
