import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Zoom, Legend, DateTime, Tooltip, DataLabel, LineSeries, ScrollBar } from '@syncfusion/ej2-react-charts';
function App() {
    var chart1;
    const data = [
        { x: new Date(2005, 0, 1), y: 21 },
        { x: new Date(2006, 0, 1), y: 24 },
        { x: new Date(2007, 0, 1), y: 36 },
        { x: new Date(2008, 0, 1), y: 38 },
        { x: new Date(2009, 0, 1), y: 54 },
        { x: new Date(2010, 0, 1), y: 21 },
        { x: new Date(2011, 0, 1), y: 24 },
        { x: new Date(2012, 0, 1), y: 36 },
        { x: new Date(2013, 0, 1), y: 38 },
        { x: new Date(2014, 0, 1), y: 54 },
        { x: new Date(2015, 0, 1), y: 21 },
        { x: new Date(2016, 0, 1), y: 24 },
        { x: new Date(2017, 0, 1), y: 36 },
        { x: new Date(2018, 0, 1), y: 38 },
    ];
    const zoomsettings = {
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableSelectionZooming: true,
        mode: 'X',
        enableScrollbar: true,
    };
    const primaryxAxis = { zoomFactor: 0.3,
        valueType: 'DateTime',
        labelFormat: 'y',
        intervalType: 'Years',
        edgeLabelPlacement: 'Shift' };
    const primaryyAxis = { minimum: 0, maximum: 100, interval: 10 };
    const marker = { visible: true, dataLabel: { visible: true } };
    const load = (args) => {
        args.chart.zoomModule.isZoomed = true;
    };
    return <ChartComponent id='charts' ref={chart => chart1 = chart} primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} zoomSettings={zoomsettings} title='Inflation - Consumer Price' load={load}>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, DateTime, ScrollBar, Zoom]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='Germany' type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
