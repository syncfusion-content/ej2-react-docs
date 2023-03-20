

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, ColumnSeries}
from'@syncfusion/ej2-react-charts';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category' };
  const marker = { dataLabel: { visible: true, name: 'text' } };
  const mapData: any[] = [{ x: 'Jan', y: 12, text: 'January : 12°C' }, { x: 'Feb', y: 8, text: 'February : 8°C' }, 
  { x: 'Mar', y: 11, text: 'March : 11°C' }, { x: 'Apr', y: 6, text: 'April : 6°C' }];

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={mapData} xName='x' yName='y'
          type='Column' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


