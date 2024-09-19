import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Export, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
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
