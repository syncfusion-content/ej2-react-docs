


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel }
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
  
  return (
      <ChartComponent
        id="charts"
        primaryXAxis={{
          valueType: 'Category',
          interval: 1,
          majorGridLines: { width: 0 },
        }}
        primaryYAxis={{
          majorGridLines: { width: 0 },
          majorTickLines: { width: 0 },
          lineStyle: { width: 0 },
          labelStyle: { color: 'transparent' },
        }}
        title="Olympic Medals"
        legendSettings={{
            visible: true,
            reverse: true
        }}
      >
        <Inject
          services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={data}
            xName="country"
            yName="gold"
            name="Gold"
            type="Column"
          ></SeriesDirective>
          <SeriesDirective
            dataSource={data}
            xName="country"
            yName="silver"
            name="Silver"
            type="Column"
          ></SeriesDirective>
          <SeriesDirective
            dataSource={data}
            xName="country"
            yName="bronze"
            name="Bronze"
            type="Column"
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    );
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


