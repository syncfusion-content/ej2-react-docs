import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, DateTimeCategory, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
import { dateTimeCategoryData } from './datasource';
function App() {
    const primaryxAxis = { valueType: 'DateTimeCategory', skeleton: 'Ed' };
    const primaryyAxis = { title: 'Sales Amount in millions(USD)' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Average Sales Comparison'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, DateTimeCategory]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={dateTimeCategoryData} xName='x' yName='y' name='Sales' type='Line'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
