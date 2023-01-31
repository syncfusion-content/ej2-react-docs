

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject,
ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, AreaSeries, Selection}
from'@syncfusion/ej2-react-charts';
import { numericData } from 'datasource.ts';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Double', title: 'Overs', rangePadding: 'Normal' };
  const primaryyAxis: AxisModel = { title: 'Runs' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='England - Run Rate'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, AreaSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={numericData} xName='x' yName='y' name='England' type='Area'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


