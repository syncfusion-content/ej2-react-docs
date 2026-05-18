import { Category, ChartComponent, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import { data } from './datasource';
function App() {

  return <ChartComponent id="charts" primaryXAxis={{valueType: 'Category'}}>
    <Inject services={[LineSeries, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales' type='Line'/>
    </SeriesCollectionDirective>
  </ChartComponent>;
}
export default App;