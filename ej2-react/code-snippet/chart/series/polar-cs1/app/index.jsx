import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, PolarSeries, LineSeries } from '@syncfusion/ej2-react-charts';
import { data } from 'datasource.ts';
function App() {
    const primaryxAxis = { title: 'Month' };
    const primaryyAxis = { minimum: 20, maximum: 40, interval: 5, title: 'Efficiency', labelFormat: '{value}%' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Efficiency of oil-fired power production'>
      <Inject services={[PolarSeries, LineSeries]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' type='Polar' name='Department' drawType='Line'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
