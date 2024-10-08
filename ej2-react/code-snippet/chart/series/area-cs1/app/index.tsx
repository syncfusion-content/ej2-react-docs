

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, AreaSeries, Selection
}
  from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {

  const primaryxAxis: AxisModel = {
    title: 'Year', minimum: 1900, maximum: 2000, interval: 10,
    edgeLabelPlacement: 'Shift'
  };
  const primaryyAxis: AxisModel = { minimum: 2, maximum: 5, interval: 0.5, title: 'Sales Amount in Millions' };

  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    title='Average Sales Comparison'>
    <Inject services={[AreaSeries, Legend, Tooltip, DataLabel, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y' name='Product A' fill='#69D2E7'
        opacity={0.6} type='Area'>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


