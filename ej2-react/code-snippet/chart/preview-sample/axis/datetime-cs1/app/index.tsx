


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject,ColumnSeries, Legend, DateTime, Logarithmic, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, Selection}from'@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
return(
 <ChartComponent id='charts'
           primaryXAxis={ {  valueType: 'DateTime', title:'Sales Across Years', labelFormat: 'yMd'} }
           primaryYAxis={ { title:'Sales Amount in millions(USD)'} }
           title='Average Sales Comparison'>
    <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, DateTime]}/>
    <SeriesCollectionDirective>
        <SeriesDirective dataSource ={data}  xName='x' yName='y' name='Sales' type='Line'>
        </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>
)
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


