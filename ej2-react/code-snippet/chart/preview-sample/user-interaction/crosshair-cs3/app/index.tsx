


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,CrosshairSettingsModel,
         Legend, DateTime, Tooltip, DataLabel, LineSeries,  Crosshair}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {

  const primaryxAxis: AxisModel = { valueType: 'DateTime', crosshairTooltip: { enable: true, fill: 'green' } };
  const primaryyAxis: AxisModel = { crosshairTooltip: { enable: true, fill: 'green' } };
  const crosshair: CrosshairSettingsModel = { enable: true, line: { width: 2, color: 'green' } };
  const marker = { visible: true };

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



