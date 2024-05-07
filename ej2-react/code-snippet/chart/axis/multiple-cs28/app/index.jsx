import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, StripLine, ColumnSeries, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
function App() {
    const chartData = [{ x: 1, y: 5 }, { x: 2, y: 39 }, { x: 3, y: 21 }, { x: 4, y: 51 }, { x: 5, y: 30 },
        { x: 6, y: 25 }, { x: 7, y: 10 }, { x: 8, y: 40 }, { x: 9, y: 50 }, { x: 10, y: 20 }];
    const primaryxAxis = { stripLines: [{ start: 1, size: 1, isRepeat: true, repeatEvery: 2, color: 'rgba(167,169,171, 0.3)' }]
    };
    const marker = { visible: true };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis}>
      <Inject services={[ColumnSeries, LineSeries, Legend, Tooltip, DataLabel, Category, StripLine]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='x' yName='y' type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
