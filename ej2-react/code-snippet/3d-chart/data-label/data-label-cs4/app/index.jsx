import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Category3D, Inject, Legend3D, DataLabel3D, Tooltip3D, ColumnSeries3D, Highlight3D } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    const data = [
        { x: 'Jan', y: 12, text: 'January : 12°C' },
        { x: 'Feb', y: 8, text: 'February : 8°C' },
        { x: 'Mar', y: 11, text: 'March : 11°C' },
        { x: 'Apr', y: 6, text: 'April : 6°C' }
    ];
        
    return <Chart3DComponent id='charts'
    primaryXAxis={{
            valueType: "Category",
        }}
            wallColor='transparent'
            enableRotation={true} rotation={7} tilt={10} depth={100}>
            <Inject services={[ColumnSeries3D, Category3D, Legend3D, Tooltip3D, DataLabel3D, Highlight3D]} />
            <Chart3DSeriesCollectionDirective >
                <Chart3DSeriesDirective dataSource={data} xName='x' yName='y' type='Column' 
                dataLabel={{ 
                    visible: true,
                    name: "text"
                }}>
                </Chart3DSeriesDirective>
            </Chart3DSeriesCollectionDirective>
        </Chart3DComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
