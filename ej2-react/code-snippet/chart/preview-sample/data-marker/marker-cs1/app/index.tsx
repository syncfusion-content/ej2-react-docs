

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, ColumnSeries}
from'@syncfusion/ej2-react-charts';
import { columnData } from './datasource';
function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category' };
  const marker = {
    //Data label angle as 45
    dataLabel: {
      visible: true, border: { width: 1, color: 'red' },
      margin: {
        left: 5,
        right: 5,
        top: 5,
        bottom: 5
      }, angle: 45, enableRotation: true
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


