{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, StackingStepAreaSeries } from '@syncfusion/ej2-react-charts';
import { stepAreaData } from './datasource';

function App() {
  const primaryxAxis = {
    title: 'Years',
    edgeLabelPlacement: 'Shift',
    majorTickLines: { width: 0 }
  };
  const primaryyAxis = {
    title: 'Spend in Billions',
    minimum: 0,
    maximum: 4,
    interval: 1,
    labelFormat: '{value}B',
    majorTickLines: { width: 0 }
  };
  const border = { width: 2, color: '#ff4251', dashArray: '5,5' };
  const border1 = { width: 2, color: '#4C4C4C', dashArray: '5,5' };
  const border2 = { width: 2, color: '#794F1B', dashArray: '5,5' };

  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    title='Trend in Sales of Ethical Produce'>
    <Inject services={[StackingStepAreaSeries, Legend]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={stepAreaData} xName='x' yName='y' name='Organic' type='StackingStepArea' border={border}>
      </SeriesDirective>
      <SeriesDirective dataSource={stepAreaData} xName='x' yName='y1' name='Fair-trade' type='StackingStepArea' border={border1}>
      </SeriesDirective>
      <SeriesDirective dataSource={stepAreaData} xName='x' yName='y2' name='Fair-trade' type='StackingStepArea' border={border2}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}