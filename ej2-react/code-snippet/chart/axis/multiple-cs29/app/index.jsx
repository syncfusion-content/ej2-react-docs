import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, StripLine, DateTime, ColumnSeries, Legend, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
function App() {
    const chartData = [{ x: new Date(2000, 0, 1), y: 10 }, { x: new Date(2002, 0, 1), y: 40 },
        { x: new Date(2004, 0, 1), y: 20 }, { x: new Date(2006, 0, 1), y: 50 },
        { x: new Date(2008, 0, 1), y: 15 }, { x: new Date(2010, 0, 1), y: 30 }];
    const primaryxAxis = { valueType: 'DateTime', intervalType: 'Years',
        stripLines: [{ start: new Date(2002, 0, 1), size: 2, sizeType: 'Years', color: 'rgba(167,169,171, 0.3)' }] };
    const primaryyAxis = { minimum: 0, maximum: 60, interval: 10 };
    const marker = { visible: true };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis}>
      <Inject services={[ColumnSeries, Legend, LineSeries, Tooltip, DataLabel, DateTime, StripLine]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='x' yName='y' type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
