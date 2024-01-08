import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Inject, Legend3D, DataLabel3D, Category3D, Tooltip3D, ColumnSeries3D, Highlight3D } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    const data = [
        { x: 10, y: 7000 }, { x: 20, y: 1000 }, { x: 30, y: 12000 }, { x: 40, y: 14000 }, { x: 50, y: 11000 }, { x: 60, y: 5000 },
        { x: 70, y: 7300 }, { x: 80, y: 9000 }, { x: 90, y: 12000 }, { x: 100, y: 14000 }, { x: 110, y: 11000 }, { x: 120, y: 5000 }
    ];
    return <Chart3DComponent id='charts' style={{ textAlign: "center" }} 
    useGroupingSeparator={true}
    primaryXAxis={{
        valueType: 'Double'
    }}
        wallColor='transparent'
        enableRotation={true} rotation={7} tilt={10} depth={100}>
        <Inject services={[ColumnSeries3D, Legend3D, Tooltip3D, DataLabel3D, Highlight3D]} />
        <Chart3DSeriesCollectionDirective >
            <Chart3DSeriesDirective dataSource={data} xName='x' yName='y' type='Column'>
            </Chart3DSeriesDirective>
        </Chart3DSeriesCollectionDirective>
    </Chart3DComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
