import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, StripLine, ColumnSeries, Legend, Category, Tooltip, DataLabel } from '@syncfusion/ej2-react-charts';
import { stripData } from './datasource';
function App() {
    const primaryyAxis = { minimum: 0, maximum: 60, interval: 10,
        stripLines: [{ start: 30, size: 2, sizeType: 'Pixel', dashArray: "10,5", color: "red" }]
    };
    const marker = { visible: true };
    return <ChartComponent id='charts' primaryYAxis={primaryyAxis}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category, StripLine]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stripData} xName='x' yName='y' type='Column' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
