{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, RangeColumnSeries,  IPointRenderEventArgs}
from'@syncfusion/ej2-react-charts';
import { data1, data2 } from './datasource';

function App() {
    const primaryxAxis: AxisModel= {valueType: 'Category', title: 'month'}  ;
    const primaryyAxis: AxisModel= { title: 'Temperature(Celsius)'}  ;
    const pointRender = (args: IPointRenderEventArgs) => {
        if (args.point.index === 1) {
            args.cornerRadius = { topLeft: 10, bottomLeft: 10, topRight: 10, bottomRight: 10 };
        }
        if (args.point.index === 4) {
            args.cornerRadius = { topLeft: 10, bottomLeft: 10, topRight: 10, bottomRight: 10 };
        }
    }
        return <ChartComponent id='charts'
                primaryXAxis={ primaryxAxis }
                primaryYAxis={ primaryyAxis }
                title='Maximum and minimum Temperature' pointRender={pointRender}>
                  <Inject services={[RangeColumnSeries, Legend, Tooltip, DataLabel,  Category]}/>
                  <SeriesCollectionDirective>
                      <SeriesDirective dataSource ={data1}  xName='x' low='low' high='high' type='RangeColumn' >
                      </SeriesDirective>
                      <SeriesDirective dataSource ={data2}  xName='x' low='low' high='high' type='RangeColumn' >
                      </SeriesDirective>
                   </SeriesCollectionDirective>
              </ChartComponent>
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
