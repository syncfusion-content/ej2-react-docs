

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, StackingBarSeries,  IPointRenderEventArgs}
from'@syncfusion/ej2-react-charts';
import { stackBarData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category', title: 'Months' };
  const primaryyAxis: AxisModel = {
    title: 'Percentage (%)', minimum: -20, maximum: 100,
    edgeLabelPlacement: 'Shift', labelFormat: '{value}%'
  };
const pointRender = (args: IPointRenderEventArgs) => {
  if (args.point.series.index % 2 !== 0) {
    args.fill = '#ff6347';
} 
else {
    args.fill = '#009cb8';
}
};
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Sales Comparison'
      pointRender={pointRender}>
      <Inject services={[StackingBarSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
      <SeriesDirective dataSource={stackBarData} xName='x' yName='y' name='Apple' type='StackingBar100'>
        </SeriesDirective>
        <SeriesDirective dataSource={stackBarData} xName='x' yName='y1' name='orange' type='StackingBar100'>
        </SeriesDirective>
        <SeriesDirective dataSource={stackBarData} xName='x' yName='y2' name='Wastage' type='StackingBar100'  cornerRadius = {{ topRight: 10, bottomRight: 10 }}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


