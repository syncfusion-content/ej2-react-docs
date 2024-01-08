import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Inject, Legend3D, DataLabel3D, Category3D, Tooltip3D, ColumnSeries3D, Highlight3D } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    const data = [
        { x: "South Korea", y: 39.4 },
        { x: "India", y: 61.3 },
        { x: "Pakistan", y: 20.4 },
        { x: "Germany", y: 65.1 },
        { x: "Australia", y: 15.8 },
        { x: "Italy", y: 29.2 },
        { x: "United Kingdom", y: 44.6 },
        { x: "Saudi Arabia", y: 9.7 },
        { x: "Russia", y: 40.8 },
        { x: "Mexico", y: 31 },
        { x: "Brazil", y: 75.9 },
        { x: "China", y: 51.4 }
    ];
    
    return <Chart3DComponent id='charts' style={{ textAlign: "center" }} 
    primaryXAxis={{
        valueType: 'Category',
        labelIntersectAction: 'Rotate90'
    }}
        wallColor='transparent'
        enableRotation={true} rotation={7} tilt={10} depth={100}>
        <Inject services={[ColumnSeries3D, Category3D, Legend3D, Tooltip3D, DataLabel3D, Highlight3D]} />
        <Chart3DSeriesCollectionDirective >
            <Chart3DSeriesDirective dataSource={data} xName='x' yName='y' type='Column'>
            </Chart3DSeriesDirective>
        </Chart3DSeriesCollectionDirective>
    </Chart3DComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
