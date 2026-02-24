

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,TooltipSettingsModel,LegendSettingsModel,Category,
         Legend, DateTime, Tooltip, DataLabel, ColumnSeries}
from'@syncfusion/ej2-react-charts';
import {chartData} from './datasource';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'DateTime' };
  const tooltip: TooltipSettingsModel = {enable: true, format: '${point.tooltip}'};
  const legendSettings: LegendSettingsModel = { visible: false};

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      tooltip={tooltip}
      legendSettings={legendSettings}
      title='Internet Users in Million – 2016'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, DateTime, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='x' yName='y'
          type='Column' tooltipMappingName='country'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


