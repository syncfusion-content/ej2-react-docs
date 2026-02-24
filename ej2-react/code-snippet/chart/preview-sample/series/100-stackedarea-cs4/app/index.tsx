

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  Legend, DateTime, Tooltip, DataLabel, Zoom, Crosshair, StackingAreaSeries, Selection
}
  from '@syncfusion/ej2-react-charts';
import { percentData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = {
    title: 'Years', valueType: 'DateTime', intervalType: 'Years',
    edgeLabelPlacement: 'Shift', labelFormat: 'y'
  };
  const primaryyAxis: AxisModel = { title: 'Temperature (%)', labelFormat: '{value}%', rangePadding: 'None' };
  const marker: object = { visible: true };
  const emptyPoint: object = { mode: 'Average' };
  const emptyPoint1: object = { mode: 'Zero' };
  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    title='Annual Temperature Comparison'>
    <Inject services={[StackingAreaSeries, Legend, Tooltip, DataLabel, DateTime]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={percentData} xName='x' yName='y' name='USA' type='StackingArea100' marker={marker} emptyPointSettings={emptyPoint1}>
      </SeriesDirective>
      <SeriesDirective dataSource={percentData} xName='x' yName='y1' name='UK' type='StackingArea100' marker={marker} >
      </SeriesDirective>
      <SeriesDirective dataSource={percentData} xName='x' yName='y2' name='Canada Alternatives' type='StackingArea100' marker={marker} emptyPointSettings={emptyPoint}>
      </SeriesDirective>
      <SeriesDirective dataSource={percentData} xName='x' yName='y3' name='China' type='StackingArea100' marker={marker} >
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


