import { Category3D, Chart3DComponent, Chart3DSeriesCollectionDirective, DataLabel3D, Highlight3D, Legend3D, Tooltip3D, Chart3DSeriesDirective, ColumnSeries3D, Inject } from '@syncfusion/ej2-react-charts';
import * as ReactDOM from "react-dom";

function App() {
    const data = [
        { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
        { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
        { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
        { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
        { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
        { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
      ];
      return <Chart3DComponent id='charts' width="650" height="350" style={{ textAlign: "center" }} primaryXAxis={{
          valueType: 'Category',
          labelRotation: -45,
          labelPlacement: 'BetweenTicks'
      }}
          wallColor='transparent'
          enableRotation={true} rotation={7} tilt={10} depth={100}>
          <Inject services={[ColumnSeries3D, Legend3D, Tooltip3D, Category3D, DataLabel3D, Highlight3D]} />
          <Chart3DSeriesCollectionDirective >
              <Chart3DSeriesDirective dataSource={data} xName='month' yName='sales' type='Column'>
              </Chart3DSeriesDirective>
          </Chart3DSeriesCollectionDirective>
      </Chart3DComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
