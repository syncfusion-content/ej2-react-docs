

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, AreaSeries,  Selection}
from'@syncfusion/ej2-react-charts';
import { areaData } from 'datasource.ts';

function App() {

  const primaryxAxis: AxisModel = {
    title: 'Year', minimum: 1900, maximum: 2000, interval: 10,
    edgeLabelPlacement: 'Shift'
  };
  const primaryyAxis: AxisModel = { minimum: 2, maximum: 5, interval: 0.5, title: 'Sales Amount in Millions' };
  const border = { color: 'red', width: 2 };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Average Sales Comparison'>
      <Inject services={[AreaSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={areaData} xName='x' yName='y' name='Product A'
          fill='green' width={2} dashArray='5,5' border={border}
          opacity={0.6} type='Area'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


