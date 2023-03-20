

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject,
ColumnSeries, Legend, DateTime, Logarithmic, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, Selection}
from'@syncfusion/ej2-react-charts';

function App() {
  const primaryxAxis: AxisModel = { valueType: 'DateTime', title: 'Years', labelFormat: 'y' };
  const primaryyAxis: AxisModel = { valueType: 'Logarithmic', title: 'Profit' };
  const logData: any[] = [
    { x: new Date(1995, 0, 1), y: 80 }, { x: new Date(1996, 0, 1), y: 200 },
    { x: new Date(1997, 0, 1), y: 400 }, { x: new Date(1998, 0, 1), y: 600 },
    { x: new Date(1999, 0, 1), y: 700 }, { x: new Date(2000, 0, 1), y: 1400 },
    { x: new Date(2001, 0, 1), y: 2000 }, { x: new Date(2002, 0, 1), y: 4000 },
    { x: new Date(2003, 0, 1), y: 6000 }, { x: new Date(2004, 0, 1), y: 8000 },
    { x: new Date(2005, 0, 1), y: 11000 }
  ];

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Product X Growth [1995-2005]'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Logarithmic, LineSeries, DateTime]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={logData} xName='x' yName='y' name='Product X' type='Line'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


