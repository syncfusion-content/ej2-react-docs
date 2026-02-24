{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, StackingLineSeries, Selection}
from'@syncfusion/ej2-react-charts';
import { chartData } from './datasource';

function App() {

  const marker = { visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' } };


  return <ChartComponent id='charts'
          primaryXAxis={{ interval: 1,  valueType: 'Category' }}
          primaryYAxis={{ title: 'Expense', minimum: 0, maximum: 400, interval: 100, labelFormat: '${value}' }}>
         <Inject services={[StackingLineSeries, Legend, Tooltip, DataLabel, Category]} />
              <SeriesCollectionDirective>
              <SeriesDirective dataSource={chartData} xName='x' yName='y' name='John' type='StackingLine' width={5}>
                    </SeriesDirective>
                    <SeriesDirective dataSource={chartData} xName='x' yName='y1' name='Peter' type='StackingLine' width={5}>
                    </SeriesDirective>
                    <SeriesDirective dataSource={chartData} xName='x' yName='y2' name='Steve' type='StackingLine' width={5}>
                    </SeriesDirective>
                    <SeriesDirective dataSource={chartData} xName='x' yName='y3' name='Charle' type='StackingLine' width={5}>
                    </SeriesDirective>
                    </SeriesCollectionDirective>
         </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}