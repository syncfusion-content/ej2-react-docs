

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, ColumnSeries}
from'@syncfusion/ej2-react-charts';
import { columnData } from 'datasource.ts';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category' };
  const marker = {
    dataLabel: {
      visible: true, font: { color: "blue", fontWeight: "500" }, border: { width: 2, color: 'red' },
      rx: 10, ry: 10
    }
  };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={columnData} xName='country' yName='gold'
          type='Column' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


