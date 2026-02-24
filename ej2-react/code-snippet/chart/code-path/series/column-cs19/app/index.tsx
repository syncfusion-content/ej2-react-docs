{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AxisModel, BorderModel, ChartAreaModel, Legend, Category, ColumnSeries, LegendSettingsModel } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
  const primaryxAxis: AxisModel = { valueType: 'Category', title: 'Countries' };
  const primaryyAxis: AxisModel = { minimum: 0, maximum: 80, interval: 20, title: 'Medals' };
  const border: BorderModel = { width: 2, color: 'green' };
  const legendSettings: LegendSettingsModel = { visible: false };
  const chartarea: ChartAreaModel = { border: { width: 2, color: 'blue' }, margin: { left: 50, right: 50, top: 50, bottom: 50 } };
  const seriesBorder: BorderModel = { width: 2, color: 'grey' };

  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    border={border}
    legendSettings={legendSettings}
    chartArea={chartarea}
    title='Olympic Medals'>
    <Inject services={[ColumnSeries, Legend, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='country' yName='gold' name='Gold' type='Column' border={seriesBorder}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}