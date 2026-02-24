import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, SplineSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    const marker = { visible: true, width: 10, height: 10 };
    const emptyPoint = { mode: 'Average', fill: 'red', border: {width: 1.5, color: 'green'} };
    return <ChartComponent id='charts'>
      <Inject services={[SplineSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' emptyPointSettings={emptyPoint} name='India' type='Spline' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
