import { Category, ChartComponent, ColumnSeries, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { data } from './datasource';
function App() {
    const primaryxAxis = { valueType: 'Category' };
    const primaryyAxis = { labelFormat: '${value}K' };
    return <ChartComponent id="charts" primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis}>
    <Inject services={[ColumnSeries, Tooltip, LineSeries, Category]}/>
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales'/>
    </SeriesCollectionDirective>
  </ChartComponent>;
}
;
export default App;
