

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, RangeColumnSeries } from '@syncfusion/ej2-react-charts';
import { data, data1 } from './datasource';

function App() {
    const primaryxAxis = { valueType: 'Category', title: 'month' };
    const primaryyAxis = { title: 'Temperature(Celsius)' };
    const border = { width: 2, color: '#ff4251', dashArray: '5,5' };
    const border1 = { width: 2, color: '#DCDCDC', dashArray: '5,5' };
    return <ChartComponent id='charts'
        primaryXAxis={primaryxAxis}
        primaryYAxis={primaryyAxis}
        title='Maximum and Minimum Temperature'>
        <Inject services={[RangeColumnSeries, Category]} />
        <SeriesCollectionDirective>
            <SeriesDirective dataSource={data} xName='x' low='low' high='high' type='RangeColumn' border={border}>
            </SeriesDirective>
            <SeriesDirective dataSource={data1} xName='x' low='low' high='high' type='RangeColumn' border={border1}>
            </SeriesDirective>
        </SeriesCollectionDirective>
    </ChartComponent>
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


