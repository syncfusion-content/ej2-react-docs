


import * as React from "react";
import * as ReactDOM from "react-dom/client";
import type { AxisModel } from "@syncfusion/ej2-react-charts";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         BubbleSeries}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
const primaryxAxis: AxisModel= { title: 'Literacy Rate', minimum: 60, maximum: 100, interval: 5 }  ;
const primaryyAxis: AxisModel= { title: 'GDP growth rate', minimum: -2, maximum: 16, interval: 2 }  ;
const emptyPoint: object = {
  mode: 'Zero', fill: 'red'
};
  return <ChartComponent id='charts'
           primaryXAxis={ primaryxAxis }
           primaryYAxis={ primaryyAxis }
           title='GDP vs Literacy Rate'>
            <Inject services={[BubbleSeries]}/>
            <SeriesCollectionDirective>
                <SeriesDirective dataSource ={data}  xName='x' yName='y' size='size' type='Bubble' name='pound' emptyPointSettings={emptyPoint}>
                </SeriesDirective>
            </SeriesCollectionDirective>
          </ChartComponent>

};
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts') as HTMLElement);
root.render(<App />);


