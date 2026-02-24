


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries, AxisModel
} from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
  const primaryxAxis: AxisModel = { valueType: 'Category', title: 'Countries' };
  const primaryyAxis: AxisModel = {
    minimum: 0,
    maximum: 80,
    interval: 20,
    title: 'Medals',
  };
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title="Olympic Medals"
    >
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={data}
          xName="country"
          yName="gold"
          name="Gold"
          type="Column"
          pointColorMapping="color"
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));


