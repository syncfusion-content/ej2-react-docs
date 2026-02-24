{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         BubbleSeries, IPointRenderEventArgs}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';
import { EmitType } from '@syncfusion/ej2-base';
function App() {
const primaryxAxis: AxisModel= { title: 'Literacy Rate', minimum: 60, maximum: 100, interval: 5 }  ;
const primaryyAxis: AxisModel= { title: 'GDP growth rate', minimum: -2, maximum: 16, interval: 2 }  ;
const pointRender: EmitType<IPointRenderEventArgs> = (args: IPointRenderEventArgs): void => {
  args.fill = '#ff6347';
};
  return <ChartComponent id='charts'
           primaryXAxis={ primaryxAxis }
           primaryYAxis={ primaryyAxis }
           title='GDP vs Literacy Rate' pointRender={pointRender}>
            <Inject services={[BubbleSeries]}/>
            <SeriesCollectionDirective>
                <SeriesDirective dataSource ={data}  xName='x' yName='y' size='size' type='Bubble' name='pound'>
                </SeriesDirective>
            </SeriesCollectionDirective>
          </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}