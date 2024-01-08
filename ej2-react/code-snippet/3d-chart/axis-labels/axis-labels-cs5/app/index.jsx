import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Inject, Legend3D, DataLabel3D, Category3D, Tooltip3D, ColumnSeries3D, Highlight3D } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    var series1 = [];
    var value = 80;
    for (var i = 1; i < 50; i++) {
        if (Math.random() > .5) {
            value +=  (1 + Math.random()*10);
        } else {
            value -= (1 + Math.random()*10);
        }
        series1.push( { x: i, y: value.toFixed(1) });
    }
    
    return <Chart3DComponent id='charts' style={{ textAlign: "center" }} 
    primaryXAxis={{
        title: 'Years',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 },
        maximumLabels: 1,
    }}
        wallColor='transparent'
        enableRotation={true} rotation={7} tilt={10} depth={100}>
        <Inject services={[ColumnSeries3D, Category3D, Legend3D, Tooltip3D, DataLabel3D, Highlight3D]} />
        <Chart3DSeriesCollectionDirective >
            <Chart3DSeriesDirective dataSource={series1} xName='x' yName='y' type='Column'>
            </Chart3DSeriesDirective>
        </Chart3DSeriesCollectionDirective>
    </Chart3DComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
