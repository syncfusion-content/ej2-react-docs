

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Tooltip, Legend, Category, DataLabel } from '@syncfusion/ej2-react-charts';
import { SalesData } from './datasource';

function App() {
  const primaryXAxis: AxisModel = { valueType: 'Category' };
  const primaryYAxis: AxisModel = { labelFormat: '${value}k' };
  const radialGradient = {
    cx: 0.5, cy: 0.5,
    fx: 0.5, fy: 0.5, r: 0.5,
    gradientColorStop: [
      { color: '#FFFF00', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
      { color: '#7C3AED', offset: 100, opacity: 0.95, lighten: 0, brighten: 0.9 }
    ]
  };
  const marker = { visible: true, isFilled: true, dataLabel: { visible: true } };
  return (
    <ChartComponent id="charts" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} title="Monthly Sales Performance" tooltip={{ enable: true }} legendSettings={{ visible: true }}>
      <Inject services={[ColumnSeries, Tooltip, Legend, Category, DataLabel]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={SalesData} xName="Month" yName="Amount" name="Sales" type="Column" radialGradient={radialGradient} marker={marker} />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('charts'));