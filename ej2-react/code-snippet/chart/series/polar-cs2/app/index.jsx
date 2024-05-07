import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, PolarSeries, Category, SplineSeries } from '@syncfusion/ej2-react-charts';
import { splineData } from 'datasource.ts';
function App() {
    const primaryxAxis = { title: 'Month', valueType: 'Category' };
    const primaryyAxis = { minimum: -5, maximum: 35, interval: 10, title: 'Temperature in Celsius', labelFormat: '{value}C' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Climate Graph-2012'>
      <Inject services={[PolarSeries, SplineSeries, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={splineData} xName='x' yName='y' type='Polar' name='London' drawType='Spline'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
