


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         BubbleSeries}
from'@syncfusion/ej2-react-charts';

function App() {

  const data: any[] = [
        { x: 92.2, y: 7.8, size: 1.347, text: 'China' },
        { x: 74, y: 6.5, size: 1.241, text: 'India' },
        { x: 90.4, y: 6.0, size: 0.238, text: 'Indonesia' },
        { x: 99.4, y: 2.2, size: 0.312, text: 'US' },
        { x: 88.6, y: 1.3, size: 0.197, text: 'Brazil' },
        { x: 99, y: 0.7, size: 0.0818, text: 'Germany' },
        { x: 72, y: 2.0, size: 0.0826, text: 'Egypt' },
        { x: 99.6, y: 3.4, size: 0.143, text: 'Russia' },
        { x: 99, y: 0.2, size: 0.128, text: 'Japan' },
        { x: 86.1, y: 4.0, size: 0.115, text: 'Mexico' },
        { x: 92.6, y: 6.6, size: 0.096, text: 'Philippines' },
        { x: 61.3, y: 14.5, size: 0.162, text: 'Nigeria' }
];
const primaryxAxis: AxisModel= { title: 'Literacy Rate', minimum: 60, maximum: 100, interval: 5 }  ;
const primaryyAxis: AxisModel= { title: 'GDP growth rate', minimum: -2, maximum: 16, interval: 2 }  ;

  return <ChartComponent id='charts'
           primaryXAxis={ primaryxAxis }
           primaryYAxis={ primaryyAxis }
           title='GDP vs Literacy Rate'>
            <Inject services={[BubbleSeries]}/>
            <SeriesCollectionDirective>
                <SeriesDirective dataSource ={data}  xName='x' yName='y' size='size' type='Bubble' name='pound' fill='blue' border={{width:2, color: 'black'}}>
                </SeriesDirective>
            </SeriesCollectionDirective>
          </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


