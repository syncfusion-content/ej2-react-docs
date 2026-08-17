{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import type { AxisModel, TooltipSettingsModel } from "@syncfusion/ej2-react-charts";
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  Category, Tooltip, ColumnSeries
}
  from '@syncfusion/ej2-react-charts';
import { cylindricalData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category', interval: 1 };
  const primaryyAxis: AxisModel = { minimum: 0, maximum: 80, interval: 10, title: 'Medal Count' };
  const tooltip: TooltipSettingsModel = { enable: true, header: "<b>${point.tooltip}</b>", format: "Gold Medal: <b>${point.y}</b>" };
  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    tooltip={tooltip}
    title='Olympic Gold Medal Counts - RIO'>
    <Inject services={[ColumnSeries, Category, Tooltip]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={cylindricalData} xName='country' yName='gold' type='Column' columnFacet='Cylinder' tooltipMappingName='tooltipMappingName'>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts') as HTMLElement);
root.render(<App />);


{% endraw %}