


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject,ColumnSeries, Legend, DateTime, Logarithmic, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, Selection}from'@syncfusion/ej2-react-charts';

function App() {
const data: any[] = [
                { x: new Date(2000, 6, 11), y: 10 }, { x: new Date(2002, 3, 7), y: 30 },
                { x: new Date(2004, 3, 6), y: 15 }, { x: new Date(2006, 3, 30), y: 65 },
                { x: new Date(2008, 3, 8), y: 90 }, { x: new Date(2010, 3, 8), y: 85 }
        ];
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


