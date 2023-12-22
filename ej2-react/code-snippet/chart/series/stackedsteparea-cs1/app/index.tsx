

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, StackingStepAreaSeries}
from'@syncfusion/ej2-react-charts';
import { stepAreaData } from 'datasource.ts';

function App() {
  const primaryxAxis: AxisModel = { valueType: 'Double', title: 'Overs' };
  const primaryyAxis: AxisModel = { title: 'Runs' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Annual Temperature Comparison'>
      <Inject services={[StackingStepAreaSeries, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stepAreaData} xName='x' yName='y' name='England' type='StackingStepArea' fill='red' dashArray="5" border={{width: 2, color: 'yellow'}} opacity={0.7} step='Center'>
        </SeriesDirective>
        <SeriesDirective dataSource={stepAreaData} xName='x' yName='y1' name='India' type='StackingStepArea' fill='green' dashArray="5" border={{width: 2, color: 'yellow'}} opacity={0.7} step='Center'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


