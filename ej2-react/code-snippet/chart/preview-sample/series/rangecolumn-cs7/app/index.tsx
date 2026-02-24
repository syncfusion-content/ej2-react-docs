

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, RangeColumnSeries,  Selection}
from'@syncfusion/ej2-react-charts';
import { data1, data2 } from './datasource';

function App() {
    const primaryxAxis: AxisModel= {valueType: 'Category', title: 'month'}  ;
    const primaryyAxis: AxisModel= { title: 'Temperature(Celsius)'}  ;
    const emptyPoint: object = { mode: 'Average', fill:'red'};
    const emptyPoint1: object = { mode: 'Gap'};
        return <ChartComponent id='charts'
                primaryXAxis={ primaryxAxis }
                primaryYAxis={ primaryyAxis }
                title='Maximum and minimum Temperature'>
                  <Inject services={[RangeColumnSeries, Legend, Tooltip, DataLabel,  Category]}/>
                  <SeriesCollectionDirective>
                      <SeriesDirective dataSource ={data1}  xName='x' low='low' high='high' type='RangeColumn' emptyPointSettings= {emptyPoint}>
                      </SeriesDirective>
                      <SeriesDirective dataSource ={data2}  xName='x' low='low' high='high' type='RangeColumn' emptyPointSettings= {emptyPoint1}>
                      </SeriesDirective>
                   </SeriesCollectionDirective>
              </ChartComponent>
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


