import * as React from "react";
import { createRoot } from 'react-dom/client';
import {  ChartComponent, Inject, SeriesCollectionDirective, SeriesDirective, Category, LineSeries } from '@syncfusion/ej2-react-charts';

const data: Object[] = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];
const xAxisCategory = { valueType: 'Category' };

function App() {
  return <ChartComponent id="charts" primaryXAxis={xAxisCategory}>
    <Inject services={[LineSeries, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales' type='Line'/>
    </SeriesCollectionDirective>
  </ChartComponent>
}
export default App;
const root = createRoot(document.getElementById('charts'));
root.render(<App />);