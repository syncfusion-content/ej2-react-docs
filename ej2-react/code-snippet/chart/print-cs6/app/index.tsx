{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, AxisModel,
  ColumnSeries, Export, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, Selection
}
  from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {

  let chartInstance: ChartComponent;
  function clickHandler() {
    const header = {
        content: 'Chart Header',
        fontSize: 15
    };

    const footer = {
        content: 'Chart Footer',
        fontSize: 15,
    };
    chartInstance.exportModule.export('PDF', 'Chart', 1, [chartInstance], null, null, true, header, footer);
  }
  const primaryxAxis: AxisModel = {
    title: 'Manager',
    valueType: 'Category',
    majorGridLines: { width: 0 }
  };
  const primaryyAxis: AxisModel = {
    title: 'Sales',
    minimum: 0,
    maximum: 20000,
    majorGridLines: { width: 0 }
  };

  return (<div><button value='print' onClick={clickHandler.bind(this)}>Export</button>
    <ChartComponent id='charts' ref={chart => chartInstance = chart} primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Sales Comparision'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Export, LineSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' type='Column' width='2'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent></div>)

};
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));


{% endraw %}
