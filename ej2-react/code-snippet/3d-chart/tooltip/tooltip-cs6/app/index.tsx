import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, DateTime3D, Inject, Legend3D, Tooltip3D, ColumnSeries3D, Highlight3D } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    const data = [
        { month: new Date(2024, 0, 1), sales: 35 },
        { month: new Date(2024, 1, 1), sales: 28 },
        { month: new Date(2024, 2, 1), sales: 34 },
        { month: new Date(2024, 3, 1), sales: 32 },
        { month: new Date(2024, 4, 1), sales: 40 },
        { month: new Date(2024, 5, 1), sales: 32 },
        { month: new Date(2024, 6, 1), sales: 35 },
        { month: new Date(2024, 7, 1), sales: 55 },
        { month: new Date(2024, 8, 1), sales: 38 },
        { month: new Date(2024, 9, 1), sales: 30 },
        { month: new Date(2024, 10, 1), sales: 25 },
        { month: new Date(2024, 11, 1), sales: 32 }
    ];
    const tooltip = {
        enable: true,
        header: 'Sales',
        format: '<b>${series.name}</b><br>${point.x:MMM yyyy} : ${point.y:n2}'
    };
    const primaryXAxis = {
        valueType: "DateTime",
        labelRotation: -45,
        labelPlacement: 'BetweenTicks'
    }
    return <Chart3DComponent id='charts' primaryXAxis={primaryXAxis} tooltip={tooltip} wallColor='transparent'
            enableRotation={true} rotation={7} tilt={10} depth={100}>
            <Inject services={[ColumnSeries3D, DateTime3D, Legend3D, Tooltip3D, Highlight3D]} />
            <Chart3DSeriesCollectionDirective >
                <Chart3DSeriesDirective dataSource={data} xName='month' yName='sales' name="Sales" type='Column'>
                </Chart3DSeriesDirective>
            </Chart3DSeriesCollectionDirective>
        </Chart3DComponent>;
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
