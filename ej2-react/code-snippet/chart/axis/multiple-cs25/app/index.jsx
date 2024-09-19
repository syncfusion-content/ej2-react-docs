import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, StripLine, ColumnSeries, Legend, Category, Tooltip, DataLabel } from '@syncfusion/ej2-react-charts';
import { stripData } from './datasource';
function App() {
    const primaryxAxis = { title: 'Overs', stripLines: [{ startFromOrigin: true, size: 4, zIndex: 'Behind', opacity: 0.5 }] };
    const primaryyAxis = { title: 'Runs' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='India Vs Australia 1st match'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category, StripLine]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stripData} xName='x' yName='y' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
