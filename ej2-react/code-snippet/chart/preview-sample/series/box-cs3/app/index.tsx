


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         BoxAndWhiskerSeries, Category}
from'@syncfusion/ej2-react-charts';
import { boxData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category', majorGridLines: { width: 0 }, };
  const primaryyAxis: AxisModel = { minimum: 10, maximum: 60, interval: 10, majorGridLines: { width: 0 }, majorTickLines: { width: 0 } };
  const marker = { visible: true };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Employee Age Group in Various Department'>
      <Inject services={[Category, BoxAndWhiskerSeries]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={boxData} xName='x' yName='y' type='BoxAndWhisker' name='Department' boxPlotMode='Normal'
          marker={marker} showMean='false'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



