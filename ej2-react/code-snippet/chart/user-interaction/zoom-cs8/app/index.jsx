import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, AreaSeries, Zoom } from '@syncfusion/ej2-react-charts';
import { zoomData } from './datasource';
function App() {
    const primaryxAxis = { valueType: 'DateTime', zoomFactor: 0.2, zoomPosition: 0.6 };
    const legendSettings = { visible: false };
    const zoomSettings = { enableSelectionZooming: true, enablePan: true };
    const border = { width: 0.5, color: '#00bdae' };
    const animation = { enable: false };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} legendSettings={legendSettings} zoomSettings={zoomSettings} title='Sales History of Product X'>
      <Inject services={[AreaSeries, Legend, Tooltip, DataLabel, Zoom, DateTime]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={zoomData} xName='x' yName='y' name='Product X' opacity={0.3} type='Area' border={border} animation={animation}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
