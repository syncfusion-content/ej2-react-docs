{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, RangeColumnSeries } from '@syncfusion/ej2-react-charts';
import { data, data1 } from './datasource';

function App() {
    const primaryxAxis = { valueType: 'Category', title: 'month' };
    const border = {width: 1.5, color: 'red'}
    const primaryyAxis = { title: 'Temperature(Celsius)' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Maximum and minimum Temperature'>
                  <Inject services={[RangeColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
                  <SeriesCollectionDirective>
                      <SeriesDirective dataSource={data} xName='x' low='low' high='high' type='RangeColumn' border= {border}>
                      </SeriesDirective>
                      <SeriesDirective dataSource={data1} xName='x' low='low' high='high' type='RangeColumn' border= {border}>
                      </SeriesDirective>
                   </SeriesCollectionDirective>
              </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}