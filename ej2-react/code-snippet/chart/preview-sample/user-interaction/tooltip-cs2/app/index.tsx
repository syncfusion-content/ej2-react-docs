

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,TooltipSettingsModel,
         Legend, DateTime, Tooltip, DataLabel, StepLineSeries}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {

  const primaryxAxis: AxisModel = { valueType: 'DateTime' };
  const tooltip: TooltipSettingsModel = {
    enable: true, header: 'Unemployment',
    format: '<b>${point.x} : ${point.y}</b>'
  };
  const marker = { visible: true, width: 10, height: 10 };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      tooltip={tooltip}
      title='Unemployment Rates 1975-2010'>
      <Inject services={[StepLineSeries, Legend, Tooltip, DataLabel, DateTime]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='China' width={2}
          type='StepLine' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


