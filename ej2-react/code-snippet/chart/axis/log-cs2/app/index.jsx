import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, DateTime, Logarithmic, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
import { logData } from 'datasource.ts';
function App() {
    const primaryxAxis = { valueType: 'DateTime', title: 'Years', labelFormat: 'y' };
    const primaryyAxis = { valueType: 'Logarithmic', title: 'Profit', minimum: 100, maximum: 10000 };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Product X Growth [1995-2005]'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Logarithmic, LineSeries, DateTime]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={logData} xName='x' yName='y' name='Product X' type='Line'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
