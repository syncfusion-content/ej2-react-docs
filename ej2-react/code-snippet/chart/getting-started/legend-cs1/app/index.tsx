


import { AxisModel, Category, ChartComponent, ColumnSeries, Inject, Legend, LegendSeriesModel, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { data } from './datasource';

function App() {

  const legendSettings: LegendSeriesModel = { visible: true };
  const primaryxAxis: AxisModel = { valueType: 'Category' };

  return <ChartComponent id="charts" primaryXAxis={primaryxAxis}
    legendSettings={legendSettings}>
    <Inject services={[ColumnSeries, Tooltip, Legend, LineSeries, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales' />
    </SeriesCollectionDirective>
  </ChartComponent>
};
export default App;



