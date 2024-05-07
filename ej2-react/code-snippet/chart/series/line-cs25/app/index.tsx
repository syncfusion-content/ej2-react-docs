

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, ColumnSeries,  Selection}
from'@syncfusion/ej2-react-charts';
import { columnData } from 'datasource.ts';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category', title: 'Countries' };
  const primaryyAxis: AxisModel = { minimum: 0, maximum: 80, interval: 20, title: 'Medals' };
  const border = { color: 'brown', width: 2 };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Olympic Medals'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={columnData} xName='country' yName='gold' type='Column'
          fill='yellow' border={border} opacity='0.7' dashArray='5'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


