import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, TrendlineDirective, TrendlinesDirective, Inject, Tooltip, LineSeries, ScatterSeries, SplineSeries, Trendlines, Category } from '@syncfusion/ej2-react-charts';
import { powerData } from './datasource';
function App() {
    const primaryxAxis = { title: 'Months', majorGridLines: { width: 0 } };
    const primaryyAxis = {
        title: 'Rupees against Dollars', interval: 50,
        lineStyle: { width: 0 }, majorTickLines: { width: 0 }
    };
    const tooltip = { enable: true };
    const chartarea = { border: { width: 0 } };
    const marker = { visible: false };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} tooltip={tooltip} chartArea={chartarea} title='Historical Indian Rupee Rate (INR USD)'>
      <Inject services={[Category, Tooltip, ScatterSeries, SplineSeries, LineSeries, Trendlines]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={powerData} xName='x' yName='y' name='Apple Inc' type='Scatter' fill='#0066FF'>
          <TrendlinesDirective>
            <TrendlineDirective type='Power' width={3} marker={marker}>
            </TrendlineDirective>
          </TrendlinesDirective>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
