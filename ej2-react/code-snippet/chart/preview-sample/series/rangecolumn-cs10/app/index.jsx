

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, RangeColumnSeries } from '@syncfusion/ej2-react-charts';
import { data2, data1 } from './datasource';

function App() {
    const primaryxAxis = { valueType: 'Category', title: 'month' };
    const pointRender = (args) => {
        if (args.point.index % 2 !== 0) {
            args.fill = '#ff6347';
        }
        else {
            args.fill = '#009cb8';
        }
    }
    const primaryyAxis = { title: 'Temperature(Celsius)' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Maximum and minimum Temperature' pointRender={pointRender}>
                  <Inject services={[RangeColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
                  <SeriesCollectionDirective>
                      <SeriesDirective dataSource={data1} xName='x' low='low' high='high' type='RangeColumn'>
                      </SeriesDirective>
                      <SeriesDirective dataSource={data2} xName='x' low='low' high='high' type='RangeColumn'>
                      </SeriesDirective>
                   </SeriesCollectionDirective>
              </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

