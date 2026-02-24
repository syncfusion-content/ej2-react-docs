
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, AreaSeries, Zoom } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    return (<ChartComponent id='charts' primaryXAxis={{ title: 'Years', valueType: 'DateTime', labelFormat: 'yMMM',
            edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 } }} primaryYAxis={{ title: 'Profit ($)', rangePadding: 'None', lineStyle: { width: 0 },
            majorTickLines: { width: 0 } }} legendSettings={{ visible: false }} zoomSettings={{ mode: 'X', enableSelectionZooming: true }} title='Sales History of Product X'>
    <Inject services={[AreaSeries, Legend, Tooltip, DataLabel, Zoom, DateTime]}/>
    <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' opacity={0.6} name='Product X' type='Area' border={{ width: 0.5, color: '#00bdae' }} animation={{ enable: false }}>
        </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
