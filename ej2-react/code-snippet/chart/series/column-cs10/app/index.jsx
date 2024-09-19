import * as React from "react";
import * as ReactDOM from "react-dom";
import { Category, ChartComponent, ColumnSeries, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';
import { chartData } from './datasource';
function App() {
    const primaryxAxis = { valueType: 'Category' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} dataSource={chartData}>
      <Inject services={[ColumnSeries, Legend, LineSeries, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective xName='month' type='Column' yName='sales'/>
        <SeriesDirective xName='month' type='Column' yName='sales1'/>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
