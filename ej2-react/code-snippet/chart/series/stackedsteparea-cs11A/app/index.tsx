

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DataLabel
         Legend, StackingStepAreaSeries}
from'@syncfusion/ej2-react-charts';
import { stepAreaData } from './datasource';

function App() {
  const primaryxAxis: AxisModel = { valueType: 'Double', title: 'Overs' };
  const primaryyAxis: AxisModel = { title: 'Runs' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Annual Temperature Comparison'
      stackLabels={{ visible: true, fill: 'rgba(0, 123, 255, 0.5)', format: '{value}', angle: 45, rx: 10, ry: 10, margin: { left: 10, right: 10, top: 10, bottom: 10 }, border: { width: 2, color: '#000' }, font: { size: '14px', color: '#fff', weight: 'bold', family: 'Arial', textAlignment: 'Left' } }}
      >
      <Inject services={[StackingStepAreaSeries, Legend DataLabel]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stepAreaData} xName='x' yName='y' name='England' type='StackingStepArea' marker={{ dataLabel: { visible: true } }}>
        </SeriesDirective>
        <SeriesDirective dataSource={stepAreaData} xName='x' yName='y1' name='India' type='StackingStepArea' marker={{ dataLabel: { visible: true } }}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


