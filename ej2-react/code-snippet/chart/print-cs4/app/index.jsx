import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Export, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
function App() {
    const data = [
        { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
        { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
        { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
        { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
        { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
        { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];
    const chartInstance;
    function clickHandler() {
        chartInstance.exportModule.export('PNG', 'sample');
    }
    const primaryxAxis = { valueType: 'Category' };
    return (<div><button value='print' onClick={clickHandler.bind(this)}>Export</button>
      <ChartComponent id='charts' ref={chart => chartInstance = chart} primaryXAxis={primaryxAxis}>
        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Export, LineSeries, Category]}/>
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} xName='month' yName='sales' type='Column' name='Sales'>
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent></div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));
