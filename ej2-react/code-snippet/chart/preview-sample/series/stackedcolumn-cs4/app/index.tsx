

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AxisModel, BorderModel, Legend, Category, StackingColumnSeries } from '@syncfusion/ej2-react-charts';
import { stackColumndata } from './datasource';

function App() {

  const primaryxAxis: AxisModel = {
    title: 'Years',
    interval: 1,
    valueType: 'Category'
  };
  const primaryyAxis: AxisModel = {
    title: 'Sales in Billions',
    minimum: 0,
    maximum: 700,
    interval: 100,
    labelFormat: '{value}B'
  };
  const border: BorderModel = { width: 2, color: '#ff4251', dashArray: '5,5' };
  const border1: BorderModel = { width: 2, color: '#66BDB7', dashArray: '5,5' };
  const border2: BorderModel = { width: 2, color: '#794F1B', dashArray: '5,5' };
  const border3: BorderModel = { width: 2, color: '#1a9a6f', dashArray: '5,5' };

  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    title='Mobile Game Market by Country'>
    <Inject services={[StackingColumnSeries, Legend, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={stackColumndata} xName='x' yName='y' name='UK' type='StackingColumn' border={border}>
      </SeriesDirective>
      <SeriesDirective dataSource={stackColumndata} xName='x' yName='y1' name='Germany' type='StackingColumn' border={border1}>
      </SeriesDirective>
      <SeriesDirective dataSource={stackColumndata} xName='x' yName='y2' name='France' type='StackingColumn' border={border2}>
      </SeriesDirective>
      <SeriesDirective dataSource={stackColumndata} xName='x' yName='y3' name='Italy' type='StackingColumn' border={border3}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


