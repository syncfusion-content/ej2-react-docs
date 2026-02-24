{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, IAxisLabelRenderEventArgs, ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, Selection } from'@syncfusion/ej2-react-charts';
import { categoryData } from './datasource';
function App() {

  const axisLabelRender = (args: IAxisLabelRenderEventArgs) => {
    if (args.text === 'France') {
      args.labelStyle.color = 'Red';
    }
  }
  const primaryxAxis: AxisModel = { valueType: 'Category', border: { width: 1, type: 'Rectangle', color: 'red' } };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      axisLabelRender={axisLabelRender}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={categoryData} xName='country' yName='gold' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
