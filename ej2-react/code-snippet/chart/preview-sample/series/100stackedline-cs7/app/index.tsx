


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, StackingLineSeries, Selection}
from'@syncfusion/ej2-react-charts';
import { chartData } from './datasource';

function App() {

  const marker = { visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' } };
  const emptyPoint: object = { mode: 'Average', fill: 'red', border: {width: 1.5, fill: 'green'} };
  const emptyPoint1: object = { mode: 'Gap' };
  return <ChartComponent id='charts'
          primaryXAxis={{ interval: 1,  valueType: 'Category' }}
          primaryYAxis={{ title: 'Expense', interval: 20 }}
          title='Family Expense for Month'>
          <Inject services={[StackingLineSeries, Legend, Tooltip, DataLabel, Category]} />
          <SeriesCollectionDirective>
          <SeriesDirective dataSource={chartData} xName='x' yName='y' name='John' type='StackingLine100' marker={{ visible: true }} emptyPointSettings={emptyPoint}>
              </SeriesDirective>
              <SeriesDirective dataSource={chartData} xName='x' yName='y1' name='Peter' type='StackingLine100' marker={{ visible: true }}>
              </SeriesDirective>
              <SeriesDirective dataSource={chartData} xName='x' yName='y2' name='Steve' type='StackingLine100' marker={{ visible: true }} emptyPointSettings={emptyPoint1}>
              </SeriesDirective>
              <SeriesDirective dataSource={chartData} xName='x' yName='y3' name='Charle' type='StackingLine100' marker={{ visible: true }}>
              </SeriesDirective>
              </SeriesCollectionDirective>
         </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


