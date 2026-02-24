{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, RowsDirective, RowDirective, AxesDirective, AxisDirective, SeriesDirective, Inject,
ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, Selection}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category', title: 'Months', interval: 1 };
  const primaryyAxis: AxisModel = {
    title: 'Temperature (Fahrenheit)', minimum: 0, maximum: 90, interval: 20,
    lineStyle: { width: 0 }, labelFormat: '{value}°F'
  };
  const lines = { width: 0 };
  const marker = { visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' } };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Weather Condition'>
      <Inject services={[ColumnSeries, LineSeries, Legend, Tooltip, DataLabel, Category]} />
      <AxesDirective>
        <AxisDirective rowIndex={1} name='yAxis1' opposedPosition={true} title='Temperature (Celsius)'
          labelFormat='{value}°C' minimum={24} maximum={36} interval={2}
          majorGridLines={lines} lineStyle={lines} >
        </AxisDirective>
      </AxesDirective>
      <RowsDirective>
        <RowDirective height='50%' ></RowDirective>
        <RowDirective height='50%' ></RowDirective>
      </RowsDirective>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='Germany' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y1' name='Japan' type='Line'
          marker={marker} yAxisName='yAxis1' >
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
