

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject,
ColumnSeries, Legend, Tooltip, DataLabel, TooltipSettingsModel, AxisModel }
from'@syncfusion/ej2-react-charts';
import { loadCldr, setCurrencyCode } from '@syncfusion/ej2-base';
setCurrencyCode('EUR');

function App() {

  const data: any[] = [
    { x: 1900, y: 4, y1: 2.6, y2: 2.8 }, { x: 1920, y: 3.0, y1: 2.8, y2: 2.5 },
    { x: 1940, y: 3.8, y1: 2.6, y2: 2.8 }, { x: 1960, y: 3.4, y1: 3, y2: 3.2 },
    { x: 1980, y: 3.2, y1: 3.6, y2: 2.9 }, { x: 2000, y: 3.9, y1: 3, y2: 2 }
  ];
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



