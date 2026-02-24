


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject,
ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries,  Selection}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
  const chartInstance: ChartComponent;
  function clickHandler() {
    chartInstance.print();
  }
  const primaryxAxis: AxisModel = { valueType: 'Category' };

  return (<div>
      <button value='print' onClick={clickHandler.bind(this)}>Print</button>
      <ChartComponent id='charts' ref={chart => chartInstance = chart} primaryXAxis={primaryxAxis}>
        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} xName='month' yName='sales' type='Column' name='Sales'>
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent></div>)

};
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));


