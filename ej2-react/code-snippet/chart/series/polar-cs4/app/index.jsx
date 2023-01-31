import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, PolarSeries, StackingAreaSeries, Category } from '@syncfusion/ej2-react-charts';
import { StackedAreaData } from 'datasource.ts';
function App() {
    const primaryxAxis = { title: 'Years', valueType: 'Category', majorGridLines: { width: 0 } };
    const primaryyAxis = { minimum: 0, maximum: 4, interval: 1, title: 'Spend Billions', majorTickLines: { width: 0 }, labelFormat: '{value}B' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Trend in Sales of Ethical Produce'>
      <Inject services={[PolarSeries, StackingAreaSeries, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={StackedAreaData} xName='x' yName='y' type='Polar' name='Organic' drawType='StackingArea'></SeriesDirective>
        <SeriesDirective dataSource={StackedAreaData} xName='x' yName='y1' type='Polar' name='Fair -Trade' drawType='StackingArea'></SeriesDirective>
        <SeriesDirective dataSource={StackedAreaData} xName='x' yName='y2' type='Polar' name='Veg-Alternatives' drawType='StackingArea'></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
