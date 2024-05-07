


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject,
ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, AreaSeries, Selection}
from'@syncfusion/ej2-react-charts';

function App() {

  const primaryyAxis: AxisModel = { title: 'Runs' };
  const groupingData: any[] = [
    { x: 10, y: 7000 }, { x: 20, y: 1000 }, { x: 30, y: 12000 }, { x: 40, y: 14000 }, { x: 50, y: 11000 }, { x: 60, y: 5000 },
    { x: 70, y: 7300 }, { x: 80, y: 9000 }, { x: 90, y: 12000 }, { x: 100, y: 14000 }, { x: 110, y: 11000 }, { x: 120, y: 5000 },
  ];

  return <ChartComponent id='charts'
      primaryYAxis={primaryyAxis}
      title='England - Sales Rate' useGroupingSeparator={true}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, AreaSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={groupingData} xName='x' yName='y' name='England' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



