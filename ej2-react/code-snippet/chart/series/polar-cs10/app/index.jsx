import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, RadarSeries, LineSeries, ColumnSeries } from '@syncfusion/ej2-react-charts';
import { columnData } from 'datasource.ts';
function App() {
    const primaryxAxis = { title: 'Month', startAngle: 90 };
    const primaryyAxis = { minimum: 20, maximum: 40, interval: 5, title: 'Efficiency', labelFormat: '{value}%' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Efficiency of oil-fired power production'>
      <Inject services={[RadarSeries, LineSeries, ColumnSeries]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={columnData} xName='x' yName='y' type='Radar' name='Department' drawType='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
