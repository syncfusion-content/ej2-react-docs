import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { data } from './datasource';
function App() {
    const tooltip = { enable: true, shared: false };
    const primaryyAxis = { labelFormat: '${value}K' };
    const primarxyAxis = { valueType: 'Category' };
    const legendSettings = { visible: true };
    const marker = { dataLabel: { visible: true } };
    return <ChartComponent id="charts" primaryXAxis={primarxyAxis} legendSettings={legendSettings} primaryYAxis={primaryyAxis} tooltip={tooltip}>
    <Inject services={[ColumnSeries, DataLabel, Tooltip, Legend, LineSeries, Category]}/>
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales' marker={marker}/>
    </SeriesCollectionDirective>
  </ChartComponent>;
}
;
export default App;
