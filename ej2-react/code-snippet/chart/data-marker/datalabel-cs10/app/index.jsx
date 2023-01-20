import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
import { data } from 'datasource.ts';
function App() {
    const pointRender = (args) => {
        if (args.point.index === 3) {
            args.fill = 'red';
        }
    };
    const primaryxAxis = { valueType: 'DateTime' };
    const marker = { visible: true, height: 10, width: 10 };
    return <ChartComponent id='charts' pointRender={pointRender} primaryXAxis={primaryxAxis}>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, DateTime]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='Warmest' type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
