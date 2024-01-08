import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Category3D, Inject, Legend3D, DataLabel3D, Tooltip3D, ColumnSeries3D, Highlight3D } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    const data = [
        { x: 'Jan', y: 6.96, color: "red" },
        { x: 'Feb', y: 8.9, color: "blue" },
        { x: 'Mar', y: 12, color: "orange" },
        { x: 'Apr', y: 17.5, color: "aqua" },
        { x: 'May', y: 22.1, color: "gray" }
    ];
        
    return <Chart3DComponent id='charts' primaryXAxis={{
            valueType: "Category",
        }}
            wallColor='transparent'
            enableRotation={true} rotation={7} tilt={10} depth={100}>
            <Inject services={[ColumnSeries3D, Category3D, Legend3D, Tooltip3D, DataLabel3D, Highlight3D]} />
            <Chart3DSeriesCollectionDirective >
                <Chart3DSeriesDirective dataSource={data} xName='x' yName='y' type='Column' pointColorMapping="color">
                </Chart3DSeriesDirective>
            </Chart3DSeriesCollectionDirective>
        </Chart3DComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
