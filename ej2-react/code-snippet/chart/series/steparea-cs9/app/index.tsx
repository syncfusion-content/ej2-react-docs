

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, StepAreaSeries, IPointRenderEventArgs}
from'@syncfusion/ej2-react-charts';
import { stepAreaData } from './datasource';

function App() {
  const primaryxAxis: AxisModel = { valueType: 'Double', title: 'Overs' };
  const primaryyAxis: AxisModel = { title: 'Runs' };
  const pointRender = (args: IPointRenderEventArgs) => {
    if (args.point.y <= 8) {
      args.fill = '#ff6347';
  }
  else {
      args.fill = '#009cb8';
  }
};
  const marker: object = {visible: true};
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Annual Temperature Comparison'
      pointRender={pointRender}>
      <Inject services={[StepAreaSeries, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stepAreaData} xName='x' yName='y' type='StepArea' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


