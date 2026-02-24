import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective } from '@syncfusion/ej2-react-charts';
function App() {
    const data = [
        { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
        { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
        { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
        { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
        { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
        { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];
    let chartInstance;
    function clickHandler() {
        chartInstance.print();
    }
    return (<div>
      <button value='print' onClick={clickHandler.bind(this)}>Print</button>
      <AccumulationChartComponent id='charts' ref={chart => chartInstance = chart}>
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={data} xName='month' yName='sales' radius='100%'>
          </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent></div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));
