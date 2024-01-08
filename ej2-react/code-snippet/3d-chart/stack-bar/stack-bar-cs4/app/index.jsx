import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Category3D, Inject, Legend3D, DataLabel3D, Tooltip3D, StackingBarSeries3D, Highlight3D } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    const data = [
        { x: 'Sochi', y: 9, y1: 10, y2: 4 },
        { x: 'Rio', y: 46, y1: 4, y2: 10 },
        { x: 'Pyeongchang', y: 9, y1: 11, y2: 5 },
        { x: 'Tokyo', y: 39, y1: 7, y2: 10 },
        { x: 'Beijing', y: 8, y1: 4, y2: 5 }
    ];
        
    return <Chart3DComponent id='charts' primaryXAxis={{
            valueType: "Category",
        }}
        primaryYAxis={{
            interval: 25
        }}
            wallColor='transparent'
            enableRotation={true} rotation={7} tilt={10} depth={100}>
            <Inject services={[StackingBarSeries3D, Category3D, Legend3D, Tooltip3D, DataLabel3D, Highlight3D]} />
            <Chart3DSeriesCollectionDirective >
                <Chart3DSeriesDirective dataSource={data} xName='x' yName='y' type='StackingBar' fill="red">
                </Chart3DSeriesDirective>
                <Chart3DSeriesDirective dataSource={data} xName='x' yName='y1' type='StackingBar' fill="green">
                </Chart3DSeriesDirective>
                <Chart3DSeriesDirective dataSource={data} xName='x' yName='y2' type='StackingBar' fill="yellow">
                </Chart3DSeriesDirective>
            </Chart3DSeriesCollectionDirective>
        </Chart3DComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
