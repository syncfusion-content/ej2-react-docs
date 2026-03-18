import { Category, ChartComponent, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { data } from './datasource';
function App() {
  const legendSettings = { visible: true };
  const primaryXAxis = { valueType: 'Category' };
  return <ChartComponent id="charts" primaryXAxis={primaryXAxis} legendSettings={legendSettings}>
    <Inject services={[Legend, LineSeries, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales' type='Line'/>
    </SeriesCollectionDirective>
  </ChartComponent>;
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts'));
root.render(<App />);