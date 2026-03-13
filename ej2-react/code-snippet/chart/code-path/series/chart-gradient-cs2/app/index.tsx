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
  const trendLinearGradient = { x1: 0, y1: 0, x2: 1, y2: 0,
    gradientColorStop: [
      { color: '#F97316', offset: 0, opacity: 1 },
      { color: '#4F46E5', offset: 100, opacity: 1 }
    ]
  };
  return (
    <ChartComponent id="charts" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} title="Retail Orders Processed" legendSettings={{ visible: true }} >
      <Inject services={[SplineSeries, LineSeries, Trendlines, Tooltip, Legend, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={OrdersData} xName="Month" yName="Orders" type="Spline" marker={{ visible: true }} name="Orders">
          <TrendlinesDirective>
            <TrendlineDirective type="Linear" width={3} name="Orders Trend" linearGradient={trendLinearGradient} />
          </TrendlinesDirective>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));

{% endraw %}