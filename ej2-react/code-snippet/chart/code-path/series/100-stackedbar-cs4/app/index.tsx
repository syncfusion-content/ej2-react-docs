{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AxisModel, BorderModel, StackingBarSeries } from '@syncfusion/ej2-react-charts';
import { stackBarData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { title: 'Months' };
  const primaryyAxis: AxisModel = {
    title: 'Percentage (%)',
    labelFormat: '{value}%'
  };
  const border: BorderModel = { width: 2, color: '#ff4251', dashArray: '5,5' };
  const border1: BorderModel = { width: 2, color: '#66BDB7', dashArray: '5,5' };
  const border2: BorderModel = { width: 2, color: '#794F1B', dashArray: '5,5' };

  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    title='Sales Comparison'>
    <Inject services={[StackingBarSeries]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={stackBarData} xName='x' yName='y' name='Apple' type='StackingBar100' border={border}>
      </SeriesDirective>
      <SeriesDirective dataSource={stackBarData} xName='x' yName='y1' name='orange' type='StackingBar100' border={border1}>
      </SeriesDirective>
      <SeriesDirective dataSource={stackBarData} xName='x' yName='y2' name='Wastage' type='StackingBar100' border={border2}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
