import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Inject, DateTime3D, Legend3D, DataLabel3D, Tooltip3D, ColumnSeries3D, Highlight3D } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    const data =  [
        { x: new Date(2000, 6, 11), y: 10 },
        { x: new Date(2002, 3, 7), y: 30 },
        { x: new Date(2004, 3, 6), y: 15 },
        { x: new Date(2006, 3, 30), y: 65 },
        { x: new Date(2008, 3, 8), y: 90 },
        { x: new Date(2010, 3, 8), y: 85 }
    ];

    return <Chart3DComponent id='charts' style={{ textAlign: "center" }} 
    primaryXAxis={{
        // Date time scale in primary X Axis
        valueType: 'DateTime',
    }}
        wallColor='transparent'
        enableRotation={true} rotation={7} tilt={10} depth={100}>
        <Inject services={[ColumnSeries3D, DateTime3D, Legend3D, Tooltip3D, DataLabel3D, Highlight3D]} />
        <Chart3DSeriesCollectionDirective >
            <Chart3DSeriesDirective dataSource={data} xName='x' yName='y' type='Column'>
            </Chart3DSeriesDirective>
        </Chart3DSeriesCollectionDirective>
    </Chart3DComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
