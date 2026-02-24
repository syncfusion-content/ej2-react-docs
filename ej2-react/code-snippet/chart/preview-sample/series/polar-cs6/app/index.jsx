

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, PolarSeries, StackingColumnSeries, Category } from '@syncfusion/ej2-react-charts';
import { stackedColumnData } from './datasource';
function App() {
    const primaryxAxis = { title: 'Years', valueType: 'Category' };
    const primaryyAxis = { minimum: 0, maximum: 700, interval: 100, title: 'Spend Billions', labelFormat: '{value}B' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Mobile Game marker by Country'>
      <Inject services={[PolarSeries, StackingColumnSeries, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stackedColumnData} xName='x' yName='y' type='Polar' name='England' drawType='StackingColumn'></SeriesDirective>
        <SeriesDirective dataSource={stackedColumnData} xName='x' yName='y1' type='Polar' name='Germany' drawType='StackingColumn'></SeriesDirective>
        <SeriesDirective dataSource={stackedColumnData} xName='x' yName='y2' type='Polar' name='France' drawType='StackingColumn'></SeriesDirective>
        <SeriesDirective dataSource={stackedColumnData} xName='x' yName='y3' type='Polar' name='Italy' drawType='StackingColumn'></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

