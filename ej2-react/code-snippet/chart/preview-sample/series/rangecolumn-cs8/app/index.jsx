

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, RangeColumnSeries } from '@syncfusion/ej2-react-charts';
import { data2, data1 } from './datasource';

function App() {
    const primaryxAxis = { valueType: 'Category', title: 'month' };
    const emptyPoint = { mode: 'Average', fill: 'red', border: {width: 2, color: 'green'}};
    const emptyPoint1 = { mode: 'Gap'};
    const primaryyAxis = { title: 'Temperature(Celsius)' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Maximum and minimum Temperature'>
                  <Inject services={[RangeColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
                  <SeriesCollectionDirective>
                      <SeriesDirective dataSource={data1} xName='x' low='low' high='high' type='RangeColumn' emptyPointSettings= {emptyPoint}>
                      </SeriesDirective>
                      <SeriesDirective dataSource={data2} xName='x' low='low' high='high' type='RangeColumn' emptyPointSettings= {emptyPoint1}>
                      </SeriesDirective>
                   </SeriesCollectionDirective>
              </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

