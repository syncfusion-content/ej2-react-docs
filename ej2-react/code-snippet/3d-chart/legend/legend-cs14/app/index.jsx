import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Category3D, Inject, Legend3D, DataLabel3D, Tooltip3D, ColumnSeries3D, Highlight3D } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    const data = [
        { x: 'WW', y: 12, y1: 22, y2: 38.3, y3: 50 },
        { x: 'EU', y: 9.9, y1: 26, y2: 45.2, y3: 63.6 },
        { x: 'APAC', y: 4.4, y1: 9.3, y2: 18.2, y3: 20.9 },
        { x: 'LATAM', y: 6.4, y1: 28, y2: 46.7, y3: 65.1 },
        { x: 'MEA', y: 30, y1: 45.7, y2: 61.5, y3: 73 },
        { x: 'NA', y: 25.3, y1: 35.9, y2: 64, y3: 81.4 }
    ];
        
    return <Chart3DComponent id='charts'
    primaryXAxis={{
            valueType: "Category",
        }}
        legendSettings={{
            enablePages: false,
            itemPadding: 30
        }}
            wallColor='transparent'
            enableRotation={true} rotation={7} tilt={10} depth={100}>
            <Inject services={[ColumnSeries3D, Category3D, Legend3D, Tooltip3D, DataLabel3D, Highlight3D]} />
            <Chart3DSeriesCollectionDirective >
                <Chart3DSeriesDirective dataSource={data} xName='x' yName='y' name="December 2007" type='Column'>
                </Chart3DSeriesDirective>
                <Chart3DSeriesDirective dataSource={data} xName='x' yName='y1' name="December 2008" type='Column'>
                </Chart3DSeriesDirective>
                <Chart3DSeriesDirective dataSource={data} xName='x' yName='y2' name="December 2009" type='Column'>
                </Chart3DSeriesDirective>
                <Chart3DSeriesDirective dataSource={data} xName='x' yName='y3' name="December 2010" type='Column'>
                </Chart3DSeriesDirective>
            </Chart3DSeriesCollectionDirective>
        </Chart3DComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
