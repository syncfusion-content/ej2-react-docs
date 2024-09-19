


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, StripLine,DateTime,
ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries,  Selection, StripLinesDirective, StripLineDirective}
from'@syncfusion/ej2-react-charts';
import { chartData } from './datasource';
function App() {

  const primaryxAxis: AxisModel = { valueType: 'DateTime', intervalType: 'Years',
       stripLines:[{start:new Date(2002, 0, 1) , size: 2, sizeType: 'Years', color: 'rgba(167,169,171, 0.3)'}] };
  const primaryyAxis: AxisModel={ minimum: 0, maximum: 60, interval: 10 }
  const marker = { visible: true };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}>
      <Inject services={[ColumnSeries, Legend, LineSeries, Tooltip, DataLabel, DateTime, StripLine]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='x' yName='y' type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


