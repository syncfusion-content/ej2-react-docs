{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineSeries, LineSeries, Trendlines, Tooltip,
  Legend, Category, TrendlinesDirective, TrendlineDirective
 } from '@syncfusion/ej2-react-charts';
import { OrdersData } from './datasource';

function App() {
  const primaryXAxis: AxisModel = { valueType: 'Category', majorGridLines: { width: 0 } };
  const primaryYAxis: AxisModel = { lineStyle: { width: 0 }, majorTickLines: { width: 0 } };
  const radialGradient = {
    cx: 0.5, cy: 0.5,
    fx: 0.5, fy: 0.5, r: 0.5,
    gradientColorStop: [
      { color: '#FFFF00', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
      { color: '#7C3AED', offset: 100, opacity: 0.95, lighten: 0, brighten: 0.9 }
    ]
  };
  return (
    <ChartComponent id="charts" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} title="Retail Orders Processed" legendSettings={{ visible: true }} >
      <Inject services={[SplineSeries, LineSeries, Trendlines, Tooltip, Legend, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={OrdersData} xName="Month" yName="Orders" type="Spline" marker={{ visible: true }} name="Orders">
          <TrendlinesDirective>
            <TrendlineDirective type="Linear" width={3} name="Orders Trend" radialGradient={radialGradient} />
          </TrendlinesDirective>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));


{% endraw %}