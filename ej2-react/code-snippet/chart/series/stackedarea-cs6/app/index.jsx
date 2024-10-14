{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, StackingAreaSeries } from '@syncfusion/ej2-react-charts';
import { stackedData } from './datasource';
function App() {
    const primaryxAxis = {
        title: 'Years', valueType: 'DateTime', intervalType: 'Years',
        majorTickLines: { width: 0 }, labelFormat: 'y', edgeLabelPlacement: 'Shift'
    };
    const primaryyAxis = {
        title: 'Spend in Billions', minimum: 0, maximum: 7, interval: 1,
        majorTickLines: { width: 0 }, labelFormat: '{value}B'
    };
    const marker = { visible: true };
    const emptyPoint = { mode: 'Zero', fill: 'red', border: {width: 1.5, color: 'green'} };
    const emptyPoint1 = { mode: 'Gap' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Trend in Sales of Ethical Produce'>
      <Inject services={[StackingAreaSeries, Legend, Tooltip, DataLabel, DateTime]}/>
      <SeriesCollectionDirective>
      <SeriesDirective dataSource={stackedData} xName='x' yName='y' name='Organic' type='StackingArea' emptyPointSettings={emptyPoint} marker={marker}>
        </SeriesDirective>
        <SeriesDirective dataSource={stackedData} xName='x' yName='y1' name='Fair-trade' type='StackingArea'>
        </SeriesDirective>
        <SeriesDirective dataSource={stackedData} xName='x' yName='y2' name='Veg Alternatives' type='StackingArea' emptyPointSettings={emptyPoint1} marker={marker}>
        </SeriesDirective>
        <SeriesDirective dataSource={stackedData} xName='x' yName='y3' name='Others' type='StackingArea'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}