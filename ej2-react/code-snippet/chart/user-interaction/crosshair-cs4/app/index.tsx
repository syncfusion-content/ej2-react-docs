


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, DateTime, Tooltip, DataLabel, LineSeries, Crosshair}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {

return(
 <ChartComponent id='charts'
           primaryXAxis={ {title: 'Years',valueType: 'DateTime',labelFormat: 'yMMM',
           edgeLabelPlacement: 'Shift',crosshairTooltip: { enable: true },
           majorGridLines : { width : 0 } } }
           primaryYAxis={ {title: 'Profit ($)',rangePadding: 'None',lineStyle : { width: 0 },
           majorTickLines : {width : 0}, crosshairTooltip: { enable: true },} }
           crosshair = { {enable:true} }
           title='Sales History of Product X'>
    <Inject services={[LineSeries, Legend, Tooltip, DataLabel,Crosshair, DateTime]}/>
    <SeriesCollectionDirective>
        <SeriesDirective dataSource ={data}  xName='x' yName='y' name='Product X' type='Line'
        marker={ {visible:true} }></SeriesDirective>
        <SeriesDirective dataSource ={data}  xName='x' yName='y1' name='Product X' type='Line'
        marker={ {visible:true} }></SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>
)
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



