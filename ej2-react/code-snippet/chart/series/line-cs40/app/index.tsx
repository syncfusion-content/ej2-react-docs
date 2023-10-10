{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, TooltipSettingsModel,
  Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, ColumnSeries, Selection
}
  from '@syncfusion/ej2-react-charts';
import { cylindricalData } from 'datasource.ts';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category', interval: 1 };
  const primaryyAxis: AxisModel = { minimum: 0, maximum: 80, interval: 10, title: 'Medal Count' };
  const tooltip: TooltipSettingsModel = { enable: true, header: "<b>${point.tooltip}</b>", format: "Gold Medal: <b>${point.y}</b>" };
  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    tooltip={tooltip}
    title='Olympic Gold Medal Counts - RIO'>
    <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={cylindricalData} xName='country' yName='gold' type='Column' columnFacet='Cylinder' tooltipMappingName='tooltipMappingName'>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}