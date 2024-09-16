
{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         PolarSeries, Category, SplineSeries}
from'@syncfusion/ej2-react-charts';
import { splineData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { title: 'Month', valueType: 'Category',  startAngle: 90 };
  const primaryyAxis: AxisModel = { minimum: -5, maximum: 35, interval: 10, title: 'Temperature in Celsius', labelFormat: '{value}C' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Climate Graph-2012'>
      <Inject services={[PolarSeries, SplineSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={splineData} xName='x' yName='y' type='Polar' name='London' drawType='Spline'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}

