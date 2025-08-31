import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { data } from './datasource';
function App() {
    const primaryyAxis = { labelFormat: '${value}K' };
    const primaryxAxis = { valueType: 'Category' };
    const legendSettings = { visible: true };
    const marker = { dataLabel: { visible: true } };
    return <ChartComponent id="charts" primaryXAxis={primaryxAxis} legendSettings={legendSettings} primaryYAxis={primaryyAxis}>
    <Inject services={[ColumnSeries, DataLabel, Tooltip, Legend, LineSeries, Category]}/>
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales' marker={marker}/>
    </SeriesCollectionDirective>
  </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));