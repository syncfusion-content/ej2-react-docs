import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, ColumnsDirective, ColumnDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    const primaryxAxis = { valueType: 'Category', title: 'Months', interval: 1 };
    const primaryyAxis = {
        title: 'Temperature (Fahrenheit)', minimum: 0, maximum: 90, interval: 20,
        lineStyle: { width: 0 }, labelFormat: '{value}°F'
    };
    const lines = { width: 0 };
    const marker = { visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' } };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Weather Condition'>
      <Inject services={[ColumnSeries, LineSeries, Legend, Tooltip, DataLabel, Category]}/>
      <AxesDirective>
        <AxisDirective columnIndex={1} name='xAxis1' opposedPosition={true} valueType='Category' majorGridLines={lines} lineStyle={lines}>
        </AxisDirective>
      </AxesDirective>
      <ColumnsDirective>
        <ColumnDirective width='50%'></ColumnDirective>
        <ColumnDirective width='50%'></ColumnDirective>
      </ColumnsDirective>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='Germany' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y1' name='Japan' type='Line' marker={marker} xAxisName='xAxis1'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
