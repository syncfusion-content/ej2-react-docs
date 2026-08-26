{% raw %}



import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  Legend, Category, Tooltip, DataLabel, ColumnSeries, DataEditing
} from '@syncfusion/ej2-react-charts';
import { columnData } from './datasource';

function App() {
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={{
        valueType: 'Category',
        minimum: -0.5,
        maximum: 6.5,
        labelPlacement: 'OnTicks',
        majorGridLines: { width: 0 }
      }}
      primaryYAxis={{
        rangePadding: 'None',
        minimum: 0,
        title: 'Sales',
        labelFormat: '{value}%',
        maximum: 100,
        interval: 20,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
      }}
      chartArea={{ border: { width: 0 } }}
      title="Sales Prediction of Products"
      tooltip={{ enable: true }}
    >
      <Inject
        services={[ColumnSeries, Legend, Tooltip, DataLabel, Category, DataEditing]}
      />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={columnData}
          xName="x"
          yName="y"
          name="Product A"
          type="Column"
          dragSettings={{
            enable: true,
            fill: 'red',
            minY: 0,
            maxY: 100
          }}
          marker={{ visible: true, width: 10, height: 10 }}
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}