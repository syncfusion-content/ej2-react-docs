{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, LineSeries, StackingColumnSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    const primaryxAxis = { title: 'Years', interval: 1, labelIntersectAction: 'Rotate45', valueType: 'Category' };
    const primaryyAxis = { title: 'Growth', minimum: -3, maximum: 3, interval: 1 };
    const marker = { visible: true, width: 10, opacity: 0.6, height: 10 };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Annual Growth GDP in France'>
      <Inject services={[StackingColumnSeries, LineSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='Private Consumption' type='StackingColumn'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y1' name='Government Consumption' type='StackingColumn'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y2' name='Investment' type='StackingColumn'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y3' name='Net Foreign Trade' type='StackingColumn'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y4' name='GDP' type='Line' opacity={0.6} marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}