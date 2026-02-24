

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries,  Selection, ErrorBar }
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
  const primaryxAxis: AxisModel = { minimum: 2005, maximum: 2012, interval: 1, title: 'Year' };
  const primaryyAxis: AxisModel = { minimum: 3, maximum: 12, interval: 1, title: 'Percentage', labelFormat: '{value}%' };
  const marker = { visible: true };
  const errorbar = { visible: true };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Unemployment rate (%)'>
      <Inject services={[LineSeries, Legend, Category, ErrorBar]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='India' type='Line'
          marker={marker} errorBar={errorbar}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



