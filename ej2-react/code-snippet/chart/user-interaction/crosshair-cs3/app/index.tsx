


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,CrosshairSettingsModel,
         Legend, DateTime, Tooltip, DataLabel, LineSeries,  Crosshair}
from'@syncfusion/ej2-react-charts';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'DateTime', crosshairTooltip: { enable: true, fill: 'green' } };
  const primaryyAxis: AxisModel = { crosshairTooltip: { enable: true, fill: 'green' } };
  const crosshair: CrosshairSettingsModel = { enable: true, line: { width: 2, color: 'green' } };
  const marker = { visible: true };
  const data: any[] = [
    { x: new Date(1975, 0, 1), y: 16, y1: 10, y2: 4.5 },
    { x: new Date(1980, 0, 1), y: 12.5, y1: 7.5, y2: 5 },
    { x: new Date(1985, 0, 1), y: 19, y1: 11, y2: 6.5 },
    { x: new Date(1990, 0, 1), y: 14.4, y1: 7, y2: 4.4 },
    { x: new Date(1995, 0, 1), y: 11.5, y1: 8, y2: 5 },
    { x: new Date(2000, 0, 1), y: 14, y1: 6, y2: 1.5 },
    { x: new Date(2005, 0, 1), y: 10, y1: 3.5, y2: 2.5 },
    { x: new Date(2010, 0, 1), y: 16, y1: 7, y2: 3.7 }
];

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      crosshair={crosshair}
      title='Sales History of Product X'>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Crosshair, DateTime]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='Product X' type='Line'
          marker={marker} >
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y1' name='Product X' type='Line'
          marker={marker} >
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



