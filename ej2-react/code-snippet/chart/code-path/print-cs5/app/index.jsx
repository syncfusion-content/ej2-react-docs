{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Export, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
import { data, data1 } from './datasource';
function App() {
    const chartInstance;
    const chartInstance1;
    function clickHandler() {
        chartInstance.exportModule.export('PNG', 'sample', null, [chartInstance, chartInstance1]);
    }
    const primaryxAxis = { valueType: 'Category' };
    return (<div><button value='print' onClick={clickHandler.bind(this)}>Export</button>
      <ChartComponent id='charts1' ref={chart => chartInstance = chart} primaryXAxis={primaryxAxis}>
        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Export, LineSeries, Category]}/>
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} xName='month' yName='sales' type='Column' name='Sales'>
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
     <ChartComponent id='charts2' ref={chart => chartInstance1 = chart} primaryXAxis={primaryxAxis}>
        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Export, LineSeries, Category]}/>
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data1} xName='month' yName='sales' type='Column' name='Sales'>
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent> </div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));

{% endraw %}