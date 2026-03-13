{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Tooltip, Legend, Category, DataLabel } from '@syncfusion/ej2-react-charts';
import { SalesData } from './datasource';

function App() {
  const primaryXAxis = { valueType: 'Category' };
  const primaryYAxis = { labelFormat: '${value}k' };
  const linearGradient = { x1: 0, y1: 0, x2: 0, y2: 1,
    gradientColorStop: [
      { color: '#4F46E5', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
      { color: '#22D3EE', offset: 100, opacity: 0.95, lighten: 0, brighten: 0.9 }
    ]
  };
  const marker = { visible: true, isFilled: true, dataLabel: { visible: true } };
  return (
    <ChartComponent id="charts" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis}
      title="Monthly Sales Performance" tooltip={{ enable: true }} legendSettings={{ visible: true }}>
      <Inject services={[ColumnSeries, Tooltip, Legend, Category, DataLabel]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={SalesData} xName="Month" yName="Amount" name="Sales" type="Column" linearGradient={linearGradient} marker={marker}/>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}