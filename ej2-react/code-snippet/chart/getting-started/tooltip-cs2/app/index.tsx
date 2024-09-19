


import {
    AxisModel, Category, ChartComponent, ColumnSeries, DataLabel, Inject,
    Legend, LegendSeriesModel, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip, TooltipSettingsModel
} from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { data } from './datasource';

function App() {
  const tooltip: TooltipSettingsModel = { enable: true, shared: false }
  const primaryyAxis: AxisModel = { labelFormat: '${value}K' }
  const primarxyAxis: AxisModel = { valueType: 'Category' }
  const legendSettings: LegendSeriesModel = { visible: true }
  const marker = { dataLabel: { visible: true } };

  return <ChartComponent id="charts" primaryXAxis={primarxyAxis} legendSettings={legendSettings}
    primaryYAxis={primaryyAxis} tooltip={tooltip}>
    <Inject services={[ColumnSeries, DataLabel, Tooltip, Legend, LineSeries, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales' marker={marker} />
    </SeriesCollectionDirective>
  </ChartComponent>
};
export default App;



