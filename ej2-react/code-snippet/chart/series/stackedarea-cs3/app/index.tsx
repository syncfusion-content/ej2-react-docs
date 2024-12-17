{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AxisModel, BorderModel, Legend, DateTime, StackingAreaSeries } from '@syncfusion/ej2-react-charts';
import { stackedData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = {
    title: 'Years',
    valueType: 'DateTime',
    intervalType: 'Years',
    labelFormat: 'y',
    edgeLabelPlacement: 'Shift',
    majorTickLines: { width: 0 }
  };
  const primaryyAxis: AxisModel = {
    title: 'Spend in Billions',
    minimum: 0,
    maximum: 7,
    interval: 1,
    labelFormat: '{value}B',
    majorTickLines: { width: 0 }
  };
  const border: BorderModel = { width: 2, color: '#ff4251', dashArray: '5,5' };
  const border1: BorderModel = { width: 2, color: '#4C4C4C', dashArray: '5,5' };
  const border2: BorderModel = { width: 2, color: '#794F1B', dashArray: '5,5' };
  const border3: BorderModel = { width: 2, color: '#1a9a6f', dashArray: '5,5' };
  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    title='Trend in Sales of Ethical Produce'>
    <Inject services={[StackingAreaSeries, Legend, DateTime]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={stackedData} xName='x' yName='y' name='Organic' type='StackingArea' border={border}>
      </SeriesDirective>
      <SeriesDirective dataSource={stackedData} xName='x' yName='y1' name='Fair-trade' type='StackingArea' border={border1}>
      </SeriesDirective>
      <SeriesDirective dataSource={stackedData} xName='x' yName='y2' name='Veg Alternatives' type='StackingArea' border={border2}>
      </SeriesDirective>
      <SeriesDirective dataSource={stackedData} xName='x' yName='y3' name='Others' type='StackingArea' border={border3}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
