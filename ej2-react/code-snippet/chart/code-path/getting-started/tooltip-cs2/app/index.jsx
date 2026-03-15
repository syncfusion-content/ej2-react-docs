{% raw %}

import { Category, ChartComponent, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import { createRoot } from 'react-dom/client';
import { data } from './datasource';
function App() {
  const tooltip = { enable: true, shared: false };
  const primaryYAxis = { labelFormat: '${value}K' };
  const primaryXAxis = { valueType: 'Category' };
  const legendSettings = { visible: true };
  const marker = { dataLabel: { visible: true } };
  return <ChartComponent id="charts" primaryXAxis={primaryXAxis} legendSettings={legendSettings} primaryYAxis={primaryYAxis} tooltip={tooltip}>
    <Inject services={[DataLabel, Tooltip, Legend, LineSeries, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales' marker={marker} type='Line'/>
    </SeriesCollectionDirective>
  </ChartComponent>;
}
export default App;
createRoot(document.getElementById('charts')).render(<App />);

{% endraw %}