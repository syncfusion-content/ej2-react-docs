import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, LineSeries, Crosshair } from '@syncfusion/ej2-react-charts';
import { trackData } from 'datasource.ts';
function App() {
    const primaryxAxis = {
        title: 'Years', minimum: new Date(2000, 1, 1),
        maximum: new Date(2006, 2, 11), intervalType: 'Years', valueType: 'DateTime'
    };
    const primaryyAxis = { crosshairTooltip: { enable: true, fill: 'green' } };
    const crosshair = { enable: true, lineType: 'Vertical' };
    const marker = { visible: true };
    const tooltip = { enable: true, shared: true, format: '${series.name} : ${point.x} : ${point.y}' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} crosshair={crosshair} tooltip={tooltip} title='Average Sales per Person'>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Crosshair, DateTime]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={trackData} xName='x' yName='y' name='John' type='Line' width={2} marker={marker}>
        </SeriesDirective>
        <SeriesDirective dataSource={trackData} xName='x' yName='y1' name='Andrew' type='Line' width={2} marker={marker}></SeriesDirective>
        <SeriesDirective dataSource={trackData} xName='x' yName='y2' name='Thomas' type='Line' width={2} marker={marker}></SeriesDirective>
        <SeriesDirective dataSource={trackData} xName='x' yName='y3' name='Mark' type='Line' width={2} marker={marker}></SeriesDirective>
        <SeriesDirective dataSource={trackData} xName='x' yName='y4' name='William' type='Line' width={2} marker={marker}></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
