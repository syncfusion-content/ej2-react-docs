{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AxisModel, BorderModel, Category, RangeStepAreaSeries } from '@syncfusion/ej2-react-charts';
import { splineRangeData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = {
    valueType: 'Category',
    title: 'Month',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 }
  };
  const primaryyAxis: AxisModel = {
    labelFormat: '{value}˚C',
    title: 'Temperature',
    lineStyle: { width: 0 },
    minimum: 10,
    maximum: 40,
    majorTickLines: { width: 0 }
  };
  const border: BorderModel = { width: 2, color: '#ff4251', dashArray: '5,5' };

  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    title='Monthly Temperature Range'>
    <Inject services={[RangeStepAreaSeries, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={splineRangeData} xName='x' high='high' low='low' type='RangeStepArea' border={border}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
