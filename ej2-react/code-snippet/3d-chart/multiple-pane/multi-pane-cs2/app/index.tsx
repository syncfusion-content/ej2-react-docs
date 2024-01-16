import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Category3D, Chart3DRowDirective, Chart3DAxisDirective, Chart3DAxesDirective, Chart3DRowsDirective, Inject, Legend3D, DataLabel3D, Tooltip3D, ColumnSeries3D, Highlight3D } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    const data = [
        { x: 'Jan', y: 15, y1: 33 }, { x: 'Feb', y: 20, y1: 31 }, { x: 'Mar', y: 35, y1: 30 },
        { x: 'Apr', y: 40, y1: 28 }, { x: 'May', y: 80, y1: 29 }, { x: 'Jun', y: 70, y1: 30 },
        { x: 'Jul', y: 65, y1: 33 }, { x: 'Aug', y: 55, y1: 32 }, { x: 'Sep', y: 50, y1: 34 },
        { x: 'Oct', y: 30, y1: 32 }, { x: 'Nov', y: 35, y1: 32 }, { x: 'Dec', y: 35, y1: 31 }
    ];
    const yAxis = { minimum: 0, maximum: 90, interval: 20,
        title: 'Temperature (Fahrenheit)',
        labelFormat: '{value}°F',
        span: 2 };
    return <Chart3DComponent id='charts' style={{ textAlign: "center" }}  primaryXAxis={{
            valueType: "Category",
        }}
        primaryYAxis={yAxis} wallColor='transparent'
            enableRotation={true} rotation={7} tilt={10} depth={100}>
            <Inject services={[ColumnSeries3D, Category3D, Legend3D, Tooltip3D, DataLabel3D, Highlight3D]} />
            <Chart3DRowsDirective>
                <Chart3DRowDirective height="50%"></Chart3DRowDirective>
                <Chart3DRowDirective height="50%"></Chart3DRowDirective>
            </Chart3DRowsDirective>
            <Chart3DAxesDirective>
                <Chart3DAxisDirective rowIndex={1} name='yAxis1' opposedPosition={true} title='Temperature (Celsius)' labelFormat='{value}°C' minimum={24} maximum={36} interval={2} majorGridLines={{width: 0}}></Chart3DAxisDirective>
            </Chart3DAxesDirective> 
            <Chart3DSeriesCollectionDirective >
                <Chart3DSeriesDirective dataSource={data} xName='x' yName='y' type='Column'>
                </Chart3DSeriesDirective>
                <Chart3DSeriesDirective dataSource={data} xName='x' yName='y1' type='Column' yAxisName="yAxis1">
                </Chart3DSeriesDirective>
            </Chart3DSeriesCollectionDirective>
        </Chart3DComponent>;
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



