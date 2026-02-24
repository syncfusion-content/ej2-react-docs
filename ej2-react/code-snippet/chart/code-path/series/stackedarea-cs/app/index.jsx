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
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Trend in Sales of Ethical Produce'>
      <Inject services={[StackingAreaSeries, Legend, Tooltip, DataLabel, DateTime]}/>
      <SeriesCollectionDirective>
      <SeriesDirective dataSource={stackedData} xName='x' yName='y' name='Organic' type='StackingArea' fill='grey'>
        </SeriesDirective>
        <SeriesDirective dataSource={stackedData} xName='x' yName='y1' name='Fair-trade' type='StackingArea' fill='yellow'>
        </SeriesDirective>
        <SeriesDirective dataSource={stackedData} xName='x' yName='y2' name='Veg Alternatives' type='StackingArea' fill='blue'>
        </SeriesDirective>
        <SeriesDirective dataSource={stackedData} xName='x' yName='y3' name='Others' type='StackingArea' fill='red'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}