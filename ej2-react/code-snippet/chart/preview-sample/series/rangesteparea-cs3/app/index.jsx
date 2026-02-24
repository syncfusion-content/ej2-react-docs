

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, RangeStepAreaSeries } from '@syncfusion/ej2-react-charts';
import { splineRangeData } from './datasource';
function App() {
    const primaryxAxis = {
        valueType: 'Category',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
    };
    const primaryyAxis = {
        labelFormat: '{value}˚C',
        lineStyle: { width: 0 },
        minimum: 0, maximum: 40,
        majorTickLines: { width: 0 }
    };
    const border = { color: 'yellow', width: 2};
    const border1 = { color: 'brown', width: 2};
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Monthly Temperature Range'>
      <Inject services={[RangeStepAreaSeries, Category]}/>
      <SeriesCollectionDirective>
      <SeriesDirective dataSource={splineRangeData} xName='x' high='high' low='low' name='England' type='RangeStepArea' opacity={0.5}>
      </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

