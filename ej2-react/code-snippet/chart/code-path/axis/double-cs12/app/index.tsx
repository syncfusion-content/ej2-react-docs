{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject,
ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, AreaSeries, Selection}
from'@syncfusion/ej2-react-charts';
import { numericData } from './datasource';
function App() {

  const primaryyAxis: AxisModel = { labelFormat: '${value}K' };

  return <ChartComponent id='charts'
      primaryYAxis={primaryyAxis}
      title='England - Run Rate'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, AreaSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={numericData} xName='x' yName='y' name='England' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
