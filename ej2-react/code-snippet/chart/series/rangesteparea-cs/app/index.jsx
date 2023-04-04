import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, RangeStepAreaSeries } from '@syncfusion/ej2-react-charts';
import { splineRangeData } from 'datasource.ts';
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
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Monthly Temperature Range'>
      <Inject services={[RangeStepAreaSeries, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={splineRangeData} xName='x' high='high' low='low' name='England' opacity={0.4} type='RangeStepArea' fill='red' dashArray='5.5'>
        </SeriesDirective>
        <SeriesDirective dataSource={splineRangeData} xName='x' high='high1' low='low1' name='India' opacity={0.4} type='RangeStepArea' fill='green' dashArray='5.5'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
