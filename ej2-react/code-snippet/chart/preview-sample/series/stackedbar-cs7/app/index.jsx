

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, StackingBarSeries } from '@syncfusion/ej2-react-charts';
import { stackBarData } from './datasource';
function App() {
    const primaryxAxis = { valueType: 'Category', title: 'Months' };
    const primaryyAxis = {
        title: 'Percentage (%)', minimum: -20, maximum: 100,
        edgeLabelPlacement: 'Shift', labelFormat: '{value}%'
    };
    const emptyPoint = { mode: 'Zero' };
    const emptyPoint1 = { mode: 'Gap' };
    const emptyPoint2 = { mode: 'Average', fill: 'red', border: {width: 1.5, color: 'blue'} };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Sales Comparison'>
      <Inject services={[StackingBarSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
      <SeriesDirective dataSource={stackBarData} xName='x' yName='y' type='StackingBar' emptyPointSettings={emptyPoint}>
        </SeriesDirective>
        <SeriesDirective dataSource={stackBarData} xName='x' yName='y1' type='StackingBar' emptyPointSettings={emptyPoint1}>
        </SeriesDirective>
        <SeriesDirective dataSource={stackBarData} xName='x' yName='y2' type='StackingBar' emptyPointSettings={emptyPoint2}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

