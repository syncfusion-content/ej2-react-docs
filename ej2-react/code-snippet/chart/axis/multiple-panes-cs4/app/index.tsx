

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, ColumnsDirective, ColumnDirective, AxesDirective, AxisDirective, SeriesDirective, Inject,
ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, Selection}
from'@syncfusion/ej2-react-charts';

function App() {

  const data: any[] = [
    { x: 'Jan', y: 15, y1: 33 }, { x: 'Feb', y: 20, y1: 31 }, { x: 'Mar', y: 35, y1: 30 },
    { x: 'Apr', y: 40, y1: 28 }, { x: 'May', y: 80, y1: 29 }, { x: 'Jun', y: 70, y1: 30 },
    { x: 'Jul', y: 65, y1: 33 }, { x: 'Aug', y: 55, y1: 32 }, { x: 'Sep', y: 50, y1: 34 },
    { x: 'Oct', y: 30, y1: 32 }, { x: 'Nov', y: 35, y1: 32 }, { x: 'Dec', y: 35, y1: 31 }
  ];
  const primaryxAxis: AxisModel = { valueType: 'Category', span: 2, title: 'Months', interval: 1 };
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
        <AxisDirective columnIndex={1} name='xAxis1' opposedPosition={true} valueType='Category'
          majorGridLines={lines} lineStyle={lines} >
        </AxisDirective>
      </AxesDirective>
      <ColumnsDirective>
        <ColumnDirective width='50%' ></ColumnDirective>
        <ColumnDirective width='50%' ></ColumnDirective>
      </ColumnsDirective>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='Germany' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y1' name='Japan' type='Line'
          marker={marker} xAxisName='xAxis1' >
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


