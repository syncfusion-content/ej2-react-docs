


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, Selection } from '@syncfusion/ej2-react-charts';
import { PaneData } from './datasource';
function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category' };
  const primaryyAxis: AxisModel = {
    title: 'Temperature (Fahrenheit)', minimum: 0, maximum: 90, interval: 10,
    lineStyle: { width: 0 }, labelFormat: '{value}°F'
  };
  const marker = { visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' } };
  const lines = { width: 0 };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Temperature flow over months'>
      <Inject services={[ColumnSeries, LineSeries, Legend, Tooltip, DataLabel, Category]} />
      <AxesDirective>
        <AxisDirective rowIndex={0} name='yAxis1' opposedPosition={true} title='Temperature (Celsius)'
          majorGridLines={lines} lineStyle={lines} >
        </AxisDirective>
      </AxesDirective>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={PaneData} xName='x' yName='y' name='Germany' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={PaneData} xName='x' yName='y1' name='Japan' type='Line'
          marker={marker} yAxisName='yAxis1' >
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



