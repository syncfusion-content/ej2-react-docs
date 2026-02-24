

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, BarSeries,  Selection}
from'@syncfusion/ej2-react-charts';
import { customData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { minimum: 2005, maximum: 2012, interval: 1, title: 'Year' };
  const primaryyAxis: AxisModel = {
    minimum: 3, maximum: 12, interval: 1, title: 'Percentage',
    labelFormat: '{value}%'
  };
  const emptyPoint: Object = {
    mode: 'Gap',
  };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Unemployment rate (%)'>
      <Inject services={[BarSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={customData} xName='x' yName='y' type='Bar' emptyPointSettings={emptyPoint}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


