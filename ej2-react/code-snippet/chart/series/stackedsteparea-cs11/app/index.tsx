

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, StackingStepAreaSeries, DataLabel}
from'@syncfusion/ej2-react-charts';
import { stepAreaData } from './datasource';

function App() {
  const primaryxAxis: AxisModel = { valueType: 'Double', title: 'Overs' };
  const primaryyAxis: AxisModel = { title: 'Runs' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Annual Temperature Comparison'
    stackLabels={{ visible: true }}
      >
      <Inject services={[StackingStepAreaSeries, Legend, DataLabel]} />
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


