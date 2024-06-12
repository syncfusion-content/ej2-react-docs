import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Inject, Category3D, ColumnSeries3D } from '@syncfusion/ej2-react-charts';
import { DataManager, Query, ODataAdaptor  } from '@syncfusion/ej2-data';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    const dataManager = new DataManager({
        url: 'https://services.syncfusion.com/react/production/api/orders',
        adaptor: new ODataAdaptor()
      });
      const query = new Query();
    return <Chart3DComponent id='charts' style={{ textAlign: "center" }} primaryXAxis={{
        valueType: 'Category',
        labelRotation: -45,
        labelPlacement: 'BetweenTicks'
    }}
        wallColor='transparent'
        enableRotation={true} rotation={7} tilt={10} depth={100}>
        <Inject services={[ColumnSeries3D, Legend3D, Tooltip3D, Category3D, DataLabel3D, Highlight3D]} />
        <Chart3DSeriesCollectionDirective >
            <Chart3DSeriesDirective dataSource={dataManager} xName='CustomerID' yName='Freight' type='Column' query={query}>
            </Chart3DSeriesDirective>
        </Chart3DSeriesCollectionDirective>
    </Chart3DComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
