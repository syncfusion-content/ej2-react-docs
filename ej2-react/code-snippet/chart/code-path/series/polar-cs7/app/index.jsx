{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, PolarSeries, RangeColumnSeries, Category } from '@syncfusion/ej2-react-charts';
import { rangeColumnData } from './datasource';
function App() {
    const primaryxAxis = { title: 'Month', valueType: 'Category' };
    const primaryyAxis = { title: 'Temperature' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Maximum and Minimum Temperature'>
      <Inject services={[PolarSeries, RangeColumnSeries, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective type='Polar' dataSource={rangeColumnData} xName='x' high='high' low='low' drawType='RangeColumn'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}