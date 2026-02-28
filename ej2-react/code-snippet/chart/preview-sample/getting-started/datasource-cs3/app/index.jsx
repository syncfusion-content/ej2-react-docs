import { Category, ChartComponent, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { data } from './datasource';
function App() {
  const primaryXAxis = { valueType: 'Category' };
  return <ChartComponent id="charts" primaryXAxis={primaryXAxis}>
    <Inject services={[LineSeries, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales' type='Line'/>
    </SeriesCollectionDirective>
  </ChartComponent>;
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts'));
root.render(<App />);