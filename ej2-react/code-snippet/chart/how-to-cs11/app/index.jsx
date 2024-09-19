import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, StripLine, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    const primaryxAxis = { title: 'Overs' };
    const primaryyAxis = { title: 'Runs', stripLines: [{ start: 15, end: 15.1, color: '#ff512f', visible: true }] };
    const marker = { visible: true };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='India Vs Australia 1st match' width='650' height='350'>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category, StripLine]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' type='Line' Marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
