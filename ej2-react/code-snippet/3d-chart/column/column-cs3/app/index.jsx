import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Category3D, Inject, Legend3D, DataLabel3D, Tooltip3D, ColumnSeries3D, Highlight3D } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    const data = [
        { x: '2012', y: 104, y1: 46, y2: 65, y3: 29 },
        { x: '2016', y: 121, y1: 46, y2: 67, y3: 27 },
        { x: '2020', y: 113, y1: 39, y2: 65, y3: 22 }    
    ];
        
    return <Chart3DComponent id='charts' primaryXAxis={{
            valueType: "Category",
        }}
            wallColor='transparent'
            enableRotation={true} rotation={7} tilt={10} depth={100}>
            <Inject services={[ColumnSeries3D, Category3D, Legend3D, Tooltip3D, DataLabel3D, Highlight3D]} />
            <Chart3DSeriesCollectionDirective >
                <Chart3DSeriesDirective dataSource={data} xName='x' yName='y' type='Column' columnSpacing={0.1} groupName="USA">
                </Chart3DSeriesDirective>
                <Chart3DSeriesDirective dataSource={data} xName='x' yName='y1' type='Column' columnSpacing={0.1} groupName="USA">
                </Chart3DSeriesDirective>
                <Chart3DSeriesDirective dataSource={data} xName='x' yName='y2' type='Column' columnSpacing={0.1} groupName="UK">
                </Chart3DSeriesDirective>
                <Chart3DSeriesDirective dataSource={data} xName='x' yName='y3' type='Column' columnSpacing={0.1} groupName="UK">
                </Chart3DSeriesDirective>
            </Chart3DSeriesCollectionDirective>
        </Chart3DComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
