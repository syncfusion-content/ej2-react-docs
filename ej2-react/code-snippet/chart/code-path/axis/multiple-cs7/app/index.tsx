


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, Selection } from '@syncfusion/ej2-react-charts';
import { smartAxisData } from './datasource';
function App() {
  const primaryxAxis: AxisModel = { title: 'Countries', labelIntersectAction: 'Hide', valueType: 'Category' };
  const primaryyAxis: AxisModel = { title: 'People(in millions)', minimum: 0, maximum: 80, interval: 10 };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Internet Users'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={smartAxisData} xName='x' yName='y' name='Internet' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



