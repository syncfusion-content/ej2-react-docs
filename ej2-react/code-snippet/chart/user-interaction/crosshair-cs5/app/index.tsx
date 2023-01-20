


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, DateTime, Tooltip, DataLabel, LineSeries, Crosshair}
from'@syncfusion/ej2-react-charts';

function App() {
const data: any[] = [
              { x: new Date(2016, 0, 1), y: -7.1, y1: -3 }, { x: new Date(2016, 1, 1), y: -3.7, y1: -3 },
              { x: new Date(2016, 2, 1), y: 0.8, y1: 4 }, { x: new Date(2016, 3, 1), y: 6.3, y1: 15 },
              { x: new Date(2016, 4, 1), y: 13.3, y1: 15 }, { x: new Date(2016, 5, 1), y: 18.0, y1: 33 },
              { x: new Date(2016, 6, 1), y: 19.8, y1: 25 }, { x: new Date(2016, 7, 1), y: 18.1, y1: 18 },
              { x: new Date(2016, 8, 1), y: 13.1, y1: 16 }, { x: new Date(2016, 9, 1), y: 4.1, y1: 11 },
              { x: new Date(2016, 10, 1), y: -3.8, y1: 2 }, { x: new Date(2016, 11, 1), y: -6.8, y1: -3.3 }
        ];

return(
 <ChartComponent id='charts'
           primaryXAxis={ {title: 'Years',valueType: 'DateTime',labelFormat: 'yMMM',
           edgeLabelPlacement: 'Shift',crosshairTooltip: { enable: true, fill: 'green' },
           majorGridLines : { width : 0 } } }
           primaryYAxis={ {title: 'Profit ($)',rangePadding: 'None',lineStyle : { width: 0 },
           majorTickLines : {width : 0}, crosshairTooltip: { enable: true, fill: 'green' } } }
           crosshair = { {enable:true, line:{width:2, color:'green'} } }
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



