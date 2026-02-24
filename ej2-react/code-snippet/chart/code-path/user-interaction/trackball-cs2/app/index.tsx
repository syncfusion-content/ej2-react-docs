{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, DateTime, Tooltip, DataLabel, LineSeries, Crosshair}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {

return(
 <ChartComponent id='charts'
           primaryXAxis={ { title: 'Years', minimum: new Date(2000, 1, 1),
           maximum: new Date(2006, 2, 11),intervalType: 'Years',valueType: 'DateTime',
           lineStyle: { width: 0 },majorGridLines: { width: 0 },edgeLabelPlacement: 'Shift'} }
           primaryYAxis={ {title: 'Revenue in Millions',labelFormat: '{value}M',
           majorTickLines: { width: 0 },minimum: 10, maximum: 90,lineStyle: { width: 0 } } }
           crosshair = { {enable: true, lineType: 'Vertical'} }
           tooltip={ { enable: true, shared: true, format: '${series.name} : ${point.x} : ${point.y}'} }
           title='Average Sales per Person'>
    <Inject services={[LineSeries, Legend, Tooltip, DataLabel,Crosshair, DateTime]}/>
    <SeriesCollectionDirective>
        <SeriesDirective dataSource ={data}  xName='x' yName='y' name='John' type='Line' width={2}
        marker={ {visible:true} } >
        </SeriesDirective>
        <SeriesDirective dataSource ={data}  xName='x' yName='y1' name='Andrew' type='Line' width={2}
        marker={ {visible:true} } ></SeriesDirective>
        <SeriesDirective dataSource ={data}  xName='x' yName='y2' name='Thomas' type='Line' width={2}
        marker={ {visible:true} } ></SeriesDirective>
        <SeriesDirective dataSource ={data}  xName='x' yName='y3' name='Mark' type='Line' width={2}
        marker={ {visible:true} } ></SeriesDirective>
        <SeriesDirective dataSource ={data}  xName='x' yName='y4' name='William' type='Line' width={2}
        marker={ {visible:true} } ></SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>
)
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}
