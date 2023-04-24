

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, BarSeries,  Selection}
from'@syncfusion/ej2-react-charts';
import { data } from 'datasource.ts';

function App() {

  const primaryxAxis: AxisModel = { minimum: 2005, maximum: 2012, interval: 1, title: 'Year' };
  const primaryyAxis: AxisModel = {
    title: 'Percentage',
    labelFormat: '{value}%'
  };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Unemployment rate (%)'>
      <Inject services={[BarSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='India' type='Bar'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


