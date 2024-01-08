import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Category3D, Inject, Legend3D, DataLabel3D, Tooltip3D, ColumnSeries3D, Highlight3D } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    const data = [
        { x: 'Czechia', y: 1.11 },
        { x: 'Spain', y: 1.66 }, 
        { x: 'USA', y: 1.56 },
        { x: 'Germany', y: 3.1 },
        { x: 'Russia', y: 1.35 },
        { x: 'Slovakia', y: 1 },
        { x: 'South Korea', y: 3.16 },
        { x: 'France', y: 0.92 }   
    ];
        
    return <Chart3DComponent id='charts' primaryXAxis={{
            valueType: "Category",
        }}
            wallColor='transparent'
            enableRotation={true} rotation={7} tilt={10} depth={100}>
            <Inject services={[ColumnSeries3D, Category3D, Legend3D, Tooltip3D, DataLabel3D, Highlight3D]} />
            <Chart3DSeriesCollectionDirective >
                <Chart3DSeriesDirective dataSource={data} xName='x' yName='y' type='Column' columnFacet="Cylinder">
                </Chart3DSeriesDirective>
            </Chart3DSeriesCollectionDirective>
        </Chart3DComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
