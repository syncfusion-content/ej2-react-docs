

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject,
ColumnSeries, Legend, DateTimeCategory, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, Selection}
from'@syncfusion/ej2-react-charts';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'DateTimeCategory', skeleton: 'Ed' };
  const primaryyAxis: AxisModel = { title: 'Sales Amount in millions(USD)' };
  const dateTimeCategoryData: any[] = [{ x: new Date(2017, 11, 20), y: 21 }, { x: new Date(2017, 11, 21), y: 24 },
    { x: new Date(2017, 11, 22), y: 24 }, { x: new Date(2017, 11, 26), y: 70 },
    { x: new Date(2017, 11, 27), y: 75 }, { x: new Date(2018, 0, 2), y: 82 },
    { x: new Date(2018, 0, 3), y: 53 }, { x: new Date(2018, 0, 4), y: 54 },
    { x: new Date(2018, 0, 5), y: 53 }, { x: new Date(2018, 0, 8), y: 45 }
];
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Average Sales Comparison'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, DateTimeCategory]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={dateTimeCategoryData} xName='x' yName='y' name='Sales' type='Line'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


