import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Category3D, Chart3DColumnDirective, Chart3DAxisDirective, Chart3DAxesDirective, Chart3DColumnsDirective, Inject, Legend3D, DataLabel3D, Tooltip3D, ColumnSeries3D, Highlight3D } from '@syncfusion/ej2-react-charts';
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
        labelFormat: '{value}°F' };
        
    return <Chart3DComponent id='charts' primaryXAxis={{
            valueType: "Category",
        }}
        primaryYAxis={yAxis}
            wallColor='transparent'
            enableRotation={true} rotation={7} tilt={10} depth={100}>
            <Inject services={[ColumnSeries3D, Category3D, Legend3D, Tooltip3D, DataLabel3D, Highlight3D]} />
            <Chart3DColumnsDirective>
                <Chart3DColumnDirective width="50%"></Chart3DColumnDirective>
                <Chart3DColumnDirective width="50%"></Chart3DColumnDirective>
            </Chart3DColumnsDirective>
            <Chart3DAxesDirective>
                <Chart3DAxisDirective columnIndex={1} name='xAxis' valueType="Category"></Chart3DAxisDirective>
            </Chart3DAxesDirective> 
            <Chart3DSeriesCollectionDirective >
                <Chart3DSeriesDirective dataSource={data} xName='x' yName='y' type='Column'>
                </Chart3DSeriesDirective>
                <Chart3DSeriesDirective dataSource={data} xName='x' yName='y1' type='Column' xAxisName="xAxis">
                </Chart3DSeriesDirective>
            </Chart3DSeriesCollectionDirective>
        </Chart3DComponent>;
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



