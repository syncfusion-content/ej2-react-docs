import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Category3D, Inject, Legend3D, DataLabel3D, Tooltip3D, ColumnSeries3D, Highlight3D } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    const data = [
        { country: "USA", gold: 50, silver: 70, bronze: 45 },
        { country: "China", gold: 40, silver: 60, bronze: 55 },
        { country: "Japan", gold: 70, silver: 60, bronze: 50 },
        { country: "Australia", gold: 60, silver: 56, bronze: 40 }
    ];
        
    return <Chart3DComponent id='charts'
    primaryXAxis={{
            valueType: "Category",
        }}
            wallColor='transparent'
            enableRotation={true} rotation={7} tilt={10} depth={100}>
            <Inject services={[ColumnSeries3D, Category3D, Legend3D, Tooltip3D, DataLabel3D, Highlight3D]} />
            <Chart3DSeriesCollectionDirective >
                <Chart3DSeriesDirective dataSource={data} xName='country' yName='gold' type='Column' 
                dataLabel={{ 
                    visible: true,
                    border:{
                        width: 1,
                        color : 'red'
                    },
                margin:{
                    left:5,
                    right:5,
                    top:5,
                    bottom:5
                }
                }}>
                </Chart3DSeriesDirective>
            </Chart3DSeriesCollectionDirective>
        </Chart3DComponent>;
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



