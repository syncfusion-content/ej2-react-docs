


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, Selection } from '@syncfusion/ej2-react-charts';

function App() {

  const primaryxAxis: AxisModel = { crossesAt: 15 };
  const primaryyAxis: AxisModel = { crossesAt: 5 };
  const stripData: any[] = [
    {x: 1, y: 20},
    {x: 2, y: 22},
    {x: 3, y: 0},
    {x: 4, y: 12},
    {x: 5, y: 5},
    {x: 6, y: 15},
    {x: 7, y: 6},
    {x: 8, y: 12},
    {x: 9, y: 34},
    {x: 10, y: 7}
  ];

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stripData} xName='x' yName='y' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



