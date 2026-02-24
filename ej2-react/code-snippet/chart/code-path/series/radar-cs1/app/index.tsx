{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  PolarSeries, LineSeries, ColumnSeries}
from'@syncfusion/ej2-react-charts';
import { columnData } from 'datasource.ts';

function App() {

  const primaryxAxis: AxisModel = { title: 'Month', startAngle: 90 };
  const primaryyAxis: AxisModel = { minimum: 20, maximum: 40, interval: 5, title: 'Efficiency', labelFormat: '{value}%' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Efficiency of oil-fired power production'>
      <Inject services={[PolarSeries, LineSeries, ColumnSeries]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={columnData} xName='x' yName='y' type='Polar' name='Department' drawType='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}
