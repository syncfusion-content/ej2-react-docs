


import {
  AxisModel, Category, ChartComponent, DataLabel, Inject, Legend,
  LegendSeriesModel, LineSeries, SeriesCollectionDirective, SeriesDirective, MarkerSettingsModel
} from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { data } from './datasource';

function App() {
  const primaryYAxis: AxisModel = { labelFormat: '${value}K' };
  const primaryXAxis: AxisModel = { valueType: 'Category' };
  const legendSettings: LegendSeriesModel = { visible: true };
  const marker: MarkerSettingsModel = { dataLabel: { visible: true } };

  return <ChartComponent id="charts" primaryXAxis={primaryXAxis} legendSettings={legendSettings} primaryYAxis={primaryYAxis}>
    <Inject services={[DataLabel, Legend, LineSeries, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales' marker={marker} type='Line'/>
    </SeriesCollectionDirective>
  </ChartComponent>
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts'));
root.render(<App />);


