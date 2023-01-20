


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         PolarSeries, AreaSeries}
from'@syncfusion/ej2-react-charts';
import { areaData } from 'datasource.ts';

function App() {

  const primaryxAxis: AxisModel = { title: 'Years', minimum: 1900, maximum: 2000, interval: 10 };
  const primaryyAxis: AxisModel = { minimum: 2, maximum: 5, interval: 0.5, title: 'Sales Amount in Millions' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Average Sales Comparison'>
      <Inject services={[PolarSeries, AreaSeries]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={areaData} xName='x' yName='y' type='Polar' name='London' drawType='Area' fill='#69D2E7'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



