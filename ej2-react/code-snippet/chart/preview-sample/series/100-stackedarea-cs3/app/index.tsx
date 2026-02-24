

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AxisModel, BorderModel, Legend, DateTime, StackingAreaSeries } from '@syncfusion/ej2-react-charts';
import { percentData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = {
    valueType: 'DateTime',
    title: 'Years',
    intervalType: 'Years',
    labelFormat: 'y',
    edgeLabelPlacement: 'Shift'
  };
  const primaryyAxis: AxisModel = {
    title: 'Temperature (%)',
    labelFormat: '{value}%',
    rangePadding: 'None'
  };
  const border: BorderModel = { width: 2, color: '#ff4251', dashArray: '5,5' };
  const border1: BorderModel = { width: 2, color: '#4C4C4C', dashArray: '5,5' };
  const border2: BorderModel = { width: 2, color: '#794F1B', dashArray: '5,5' };
  const border3: BorderModel = { width: 2, color: '#1a9a6f', dashArray: '5,5' };
  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    title='Annual Temperature Comparison'>
    <Inject services={[StackingAreaSeries, Legend, DateTime]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={percentData} xName='x' yName='y' name='USA' type='StackingArea100' border={border}>
      </SeriesDirective>
      <SeriesDirective dataSource={percentData} xName='x' yName='y1' name='UK' type='StackingArea100' border={border1}>
      </SeriesDirective>
      <SeriesDirective dataSource={percentData} xName='x' yName='y2' name='Canada' type='StackingArea100' border={border2}>
      </SeriesDirective>
      <SeriesDirective dataSource={percentData} xName='x' yName='y3' name='China' type='StackingArea100' border={border3}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


