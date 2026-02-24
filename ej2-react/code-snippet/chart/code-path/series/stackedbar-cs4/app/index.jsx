{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingBarSeries } from '@syncfusion/ej2-react-charts';
import { stackBarData } from './datasource';

function App() {

  const primaryxAxis = { valueType: 'Category', title: 'Months' };
  const primaryyAxis = {
    title: 'Percentage (%)', minimum: -20, maximum: 100,
    edgeLabelPlacement: 'Shift', labelFormat: '{value}%'
  };
  const border = { width: 2, color: '#ff4251', dashArray: '5,5' };
  const border1 = { width: 2, color: '#66BDB7', dashArray: '5,5' };
  const border2 = { width: 2, color: '#794F1B', dashArray: '5,5' };

  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    title='Sales Comparison'>
    <Inject services={[StackingBarSeries, Legend, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={stackBarData} xName='x' yName='y' name='Apple' type='StackingBar' border={border}>
      </SeriesDirective>
      <SeriesDirective dataSource={stackBarData} xName='x' yName='y1' name='Orange' type='StackingBar' border={border1}>
      </SeriesDirective>
      <SeriesDirective dataSource={stackBarData} xName='x' yName='y2' name='Wastage' type='StackingBar' border={border2}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
