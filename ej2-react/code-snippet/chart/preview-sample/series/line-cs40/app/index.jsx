


import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, Tooltip, ColumnSeries } from '@syncfusion/ej2-react-charts';
import { cylindricalData } from './datasource';
function App() {
  const primaryxAxis = { valueType: 'Category', title: 'Countries' };
  const primaryyAxis = { minimum: 0, maximum: 80, interval: 20, title: 'Medals' };
  const tooltip = { enable: true, header: "<b>${point.tooltip}</b>", format: "Gold Medal: <b>${point.y}</b>" };
  return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} tooltip={tooltip} title='Olympic Gold Medal Counts - RIO'>
    <Inject services={[ColumnSeries, Category, Tooltip]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={cylindricalData} xName='country' yName='gold' type='Column' columnFacet='Cylinder' tooltipMappingName='tooltipMappingName'>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>;
}
;
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts'));
root.render(<App />);


