

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries, Category } from '@syncfusion/ej2-react-charts';
import { splineData } from './datasource';

function App() {

  const primaryxAxis = {
    title: 'Month',
    valueType: 'Category'
  };
  const primaryyAxis = {
    minimum: -5,
    maximum: 30,
    interval: 5,
    title: 'Temperature in Celsius',
    labelFormat: '{value}°C'
  };
  const border = { width: 2, color: '#FFA500', dashArray: '5,5' };
  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    title='Climate Graph-2012'>
    <Inject services={[SplineAreaSeries, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={splineData} xName='x' yName='y' type='SplineArea' border={border}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

