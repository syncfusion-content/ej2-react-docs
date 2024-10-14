{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, RangeColumnSeries,  ISeriesRenderEventArgs}
from'@syncfusion/ej2-react-charts';
import { data1, data2 } from './datasource';

function App() {
    const primaryxAxis: AxisModel= {valueType: 'Category', title: 'month'}  ;
    const primaryyAxis: AxisModel= { title: 'Temperature(Celsius)'}  ;
    const seriesRender = (args: ISeriesRenderEventArgs) => {
        if (args.series.index === 0) {
            args.fill = '#ff4251';
        }
        else if (args.series.index === 1) {
            args.fill = '#4C4C4C';
        }
    }
        return <ChartComponent id='charts'
                primaryXAxis={ primaryxAxis }
                primaryYAxis={ primaryyAxis }
                title='Maximum and minimum Temperature' seriesRender={seriesRender}>
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
