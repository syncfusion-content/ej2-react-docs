{% raw %}

import { Category, ChartComponent, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import { createRoot } from 'react-dom/client';
import { data } from './datasource';
function App() {
  const primaryXAxis = { valueType: 'Category' };
  const primaryYAxis = { labelFormat: '${value}K' };
  return <ChartComponent id="charts" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis}>
    <Inject services={[LineSeries, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales' type='Line'/>
    </SeriesCollectionDirective>
  </ChartComponent>;
}
export default App;
createRoot(document.getElementById('charts')).render(<App />);

{% endraw %}