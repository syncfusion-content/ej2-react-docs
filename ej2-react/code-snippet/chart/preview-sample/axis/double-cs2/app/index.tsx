

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject,
ColumnSeries, Legend, Tooltip, DataLabel, TooltipSettingsModel, AxisModel }
from'@syncfusion/ej2-react-charts';
import { loadCldr, setCurrencyCode } from '@syncfusion/ej2-base';
import { data } from './datasource';
setCurrencyCode('EUR');

function App() {

  const primaryxAxis: AxisModel = { edgeLabelPlacement: 'Shift', title: 'Years' };
  const primaryyAxis: AxisModel = { labelFormat: 'c', title: 'Sales Amount in Millions' };
  const marker = { dataLabel: { visible: true } };
  const tooltip: TooltipSettingsModel = { enable: true, format: '${point.x} : ${point.y}' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Average Sales Comparison'
      tooltip={tooltip}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='Product X' type='Column'
          marker={marker}>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y1' name='Product Y' type='Column'
          marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



