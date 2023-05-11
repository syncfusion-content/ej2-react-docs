
{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         PolarSeries, Category, ScatterSeries}
from'@syncfusion/ej2-react-charts';
import { scatterData } from 'datasource.ts';

function App() {

  const primaryxAxis: AxisModel = { title: 'Month', valueType: 'Category' };
  const primaryyAxis: AxisModel = {
    minimum: -5, maximum: 35, interval: 10, title: 'Temperature in Celsius',
    labelFormat: '{value}C'
  };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Climate Graph-2012'>
      <Inject services={[PolarSeries, ScatterSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={scatterData} xName='x' yName='y' type='Polar' name='London' drawType='Scatter'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}

