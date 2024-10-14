{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, RadarSeries, ColumnSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    const primaryxAxis = { title: 'Month' };
    const primaryyAxis = { minimum: 20, maximum: 40, interval: 5, title: 'Efficiency', labelFormat: '{value}%' };
    const seriesRender = (args) => {
      args.fill = '#ff6347';
    }
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Efficiency of oil-fired power production' seriesRender={seriesRender}>
      <Inject services={[RadarSeries, ColumnSeries]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' type='Radar' name='Department' drawType='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}