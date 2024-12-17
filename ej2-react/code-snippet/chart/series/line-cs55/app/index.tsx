{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AxisModel, BorderModel, Category, BarSeries } from '@syncfusion/ej2-react-charts';
import { customData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { minimum: 2005, maximum: 2012, interval: 1, title: 'Year' };
  const primaryyAxis: AxisModel = { minimum: 3, maximum: 12, interval: 1, title: 'Percentage', labelFormat: '{value}%' };
  const border: BorderModel = { width: 2, color: '#ff4251', dashArray: '5,5' };

  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    title='Unemployment rate (%)'>
    <Inject services={[BarSeries, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={customData} xName='x' yName='y' type='Bar' border={border}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
