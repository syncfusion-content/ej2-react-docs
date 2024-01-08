import { Chart3DComponent, Chart3DSeriesCollectionDirective, Logarithmic3D, Chart3DSeriesDirective, Inject, DateTime3D, Legend3D, DataLabel3D, Tooltip3D, ColumnSeries3D, Highlight3D } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    const data = [
        { x: new Date(1995, 0, 1), y: 80 }, { x: new Date(1996, 0, 1), y: 200 },
        { x: new Date(1997, 0, 1), y: 400 }, { x: new Date(1998, 0, 1), y: 600 },
        { x: new Date(1999, 0, 1), y: 700 }, { x: new Date(2000, 0, 1), y: 1400 },
        { x: new Date(2001, 0, 1), y: 2000 }, { x: new Date(2002, 0, 1), y: 4000 },
        { x: new Date(2003, 0, 1), y: 6000 }, { x: new Date(2004, 0, 1), y: 8000 },
        { x: new Date(2005, 0, 1), y: 11000 }
    ];
    
    return <Chart3DComponent id='charts' style={{ textAlign: "center" }} 
    primaryXAxis={{
        // Date time scale in primary X Axis
        valueType: 'DateTime',
    }}
    primaryYAxis={{
        // Logarithmic scale in primary X Axis
        valueType: 'Logarithmic',
    }}
        wallColor='transparent'
        enableRotation={true} rotation={7} tilt={10} depth={100}>
        <Inject services={[ColumnSeries3D, Logarithmic3D, DateTime3D, Legend3D, Tooltip3D, DataLabel3D, Highlight3D]} />
        <Chart3DSeriesCollectionDirective >
            <Chart3DSeriesDirective dataSource={data} xName='x' yName='y' type='Column'>
            </Chart3DSeriesDirective>
        </Chart3DSeriesCollectionDirective>
    </Chart3DComponent>;
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



