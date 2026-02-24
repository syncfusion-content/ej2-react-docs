import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, Inject } from '@syncfusion/ej2-react-charts';
import { accData } from 'datasource.ts';
function App() {
    const palettes = [
        '#E94649',
        '#F6B53F',
        '#6FAAB0',
        '#FF33F3',
        '#228B22',
        '#3399FF',
    ];
    return <AccumulationChartComponent id='charts'>
      <Inject services={[PieSeries]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={accData} xName='x' yName='y' type='Pie' palettes={palettes}>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
