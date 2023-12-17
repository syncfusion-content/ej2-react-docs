import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Inject, Legend3D, Category3D, Tooltip3D, ColumnSeries3D, Highlight3D } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

export let data = [
    { x: 'Tesla', y: 137429 },
    { x: 'Aion', y: 80308 },
    { x: 'Wuling', y: 76418 },
    { x: 'Changan', y: 52849 },
    { x: 'Geely', y: 47234 },
    { x: 'Nio', y: 31041 },
    { x: 'Neta', y: 22449 },
    { x: 'BMW', y: 18733 }
];

function App() {
    return <Chart3DComponent id='charts' style={{ textAlign: "center" }} primaryXAxis={{
        valueType: 'Category',
        labelRotation: -45,
        labelPlacement: 'BetweenTicks'
    }}
        wallColor='transparent'
        primaryYAxis={{
            maximum: 150000, interval: 50000
        }} enableRotation={true} rotation={7} tilt={10} depth={100}>
        <Inject services={[ColumnSeries3D, Legend3D, Tooltip3D, Category3D, Highlight3D]} />
        <Chart3DSeriesCollectionDirective >
            <Chart3DSeriesDirective dataSource={data} xName='x' name='Gold' yName='y' type='Column'>
            </Chart3DSeriesDirective>
        </Chart3DSeriesCollectionDirective>
    </Chart3DComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
