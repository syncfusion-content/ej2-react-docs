
{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, StackingLineSeries, ISeriesRenderEventArgs}
from'@syncfusion/ej2-react-charts';
import { chartData } from './datasource';

function App() {

  const marker = { visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' } };
  const seriesRender= (args: ISeriesRenderEventArgs) => {
    if (args.series.index === 0) {
        args.fill = '#ff4251';
    }
    else if (args.series.index === 1) {
        args.fill = '#4C4C4C';
    }
    else if (args.series.index === 2) {
        args.fill = '#794F1B';
    }
    else if (args.series.index === 3) {
        args.fill = '#1a9a6f';
    }
}
  return <ChartComponent id='charts'
          primaryXAxis={{ interval: 1,  valueType: 'Category' }}
          primaryYAxis={{ title: 'Expense', interval: 20 }}
          title='Family Expense for Month'
          seriesRender={seriesRender}>
          <Inject services={[StackingLineSeries, Legend, Tooltip, DataLabel, Category]} />
          <SeriesCollectionDirective>
          <SeriesDirective dataSource={chartData} xName='x' yName='y' name='John' type='StackingLine100' marker={{ visible: true }}>
              </SeriesDirective>
              <SeriesDirective dataSource={chartData} xName='x' yName='y1' name='Peter' type='StackingLine100' marker={{ visible: true }}>
              </SeriesDirective>
              <SeriesDirective dataSource={chartData} xName='x' yName='y2' name='Steve' type='StackingLine100' marker={{ visible: true }}>
              </SeriesDirective>
              <SeriesDirective dataSource={chartData} xName='x' yName='y3' name='Charle' type='StackingLine100' marker={{ visible: true }}>
              </SeriesDirective>
              </SeriesCollectionDirective>
         </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
