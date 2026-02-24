{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, StackingColumnSeries,  IPointRenderEventArgs}
from'@syncfusion/ej2-react-charts';
import { columnperData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { title: 'Years', interval: 1, valueType: 'Category' };
  const primaryyAxis: AxisModel = { title: 'GDP (%) Per Annum', rangePadding: 'None', labelFormat: '{value}%' };
  const pointRender = (args: IPointRenderEventArgs) => {
    if (args.point.index === 0 && args.point.series.index === 3) {
      args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
    }
    if (args.point.index === 3 && args.point.series.index === 3) {
      args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
    }
    if (args.point.index === 4 && args.point.series.index === 3) {
      args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
    }
    if (args.point.index === 6 && args.point.series.index === 3) {
      args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
    }
}
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Gross Domestic Product Growth'
      pointRender={pointRender}>
      <Inject services={[StackingColumnSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
      <SeriesDirective dataSource={columnperData} xName='x' yName='y' name='UK' type='StackingColumn100'>
        </SeriesDirective>
        <SeriesDirective dataSource={columnperData} xName='x' yName='y1' name='Germany' type='StackingColumn100'>
        </SeriesDirective>
        <SeriesDirective dataSource={columnperData} xName='x' yName='y2' name='France' type='StackingColumn100'>
        </SeriesDirective>
        <SeriesDirective dataSource={columnperData} xName='x' yName='y3' name='Italy' type='StackingColumn100'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
