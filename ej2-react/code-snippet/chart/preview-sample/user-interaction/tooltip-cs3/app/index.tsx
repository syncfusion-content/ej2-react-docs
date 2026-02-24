

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,TooltipSettingsModel, Legend, Category, Tooltip, DataLabel, SplineSeries}
from'@syncfusion/ej2-react-charts';
import { data1, data2, data3 } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category' };
  const tooltip: TooltipSettingsModel = {
    enable: true, header: 'Unemployment',
    format: '<b>${point.x} : ${point.y}</b>'
  };
  const marker = { visible: true, width: 10, height: 10 };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      tooltip={tooltip}
      title='Unemployment Rates 1975-2010'>
      <Inject services={[SplineSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data1} xName='x' yName='y' name='Max Temp' width={2}
          type='Spline' marker={marker} tooltipFormat='${point.x}'>
        </SeriesDirective>
        <SeriesDirective dataSource={data2} xName='x' yName='y' name='Avg Temp' width={2}
          type='Spline' marker={marker} tooltipFormat='${point.y}'>
        </SeriesDirective>
        <SeriesDirective dataSource={data3} xName='x' yName='y' name='Min Temp' width={2}
          type='Spline' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


