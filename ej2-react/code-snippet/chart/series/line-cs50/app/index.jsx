import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  AreaSeries,
} from '@syncfusion/ej2-react-charts';
import { areaData } from './datasource';
function App() {
  const primaryxAxis = {
    title: 'Year',
    minimum: 1900,
    maximum: 2000,
    interval: 10,
    edgeLabelPlacement: 'Shift',
  };
  const primaryyAxis = {
    minimum: 2,
    maximum: 5,
    interval: 0.5,
    title: 'Sales Amount in Millions',
  };
  const pointRender = (args) => {
    if (args.point.index % 2 !== 0) {
      args.fill = '#ff6347';
    } else {
      args.fill = '#009cb8';
    }
  };
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title="Average Sales Comparison"
      pointRender={pointRender}
    >
      <Inject services={[AreaSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={areaData}
          xName="x"
          yName="y"
          name="Product A"
          type="Area"
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));
