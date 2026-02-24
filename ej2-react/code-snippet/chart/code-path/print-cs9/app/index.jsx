{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Export, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    const chartInstance;
    const beforeExportEvent = (args) => {
      args.excelProperties.rows[0].cells[0].value = 'Changed Title';
      args.excelProperties.rows[1].cells[0].value = 'X Title';
      args.excelProperties.rows[1].cells[1].value = 'Y Title';
      args.excelProperties.rows[2].cells[1].value = args.excelProperties.rows[2].cells[1].value + 2;
  };
    function clickHandler() {
        chartInstance.exportModule.export('PNG', 'sample');
    }
    const primaryxAxis = { valueType: 'Category' };
    return (<div><button value='print' onClick={clickHandler.bind(this)}>Export</button>
      <ChartComponent id='charts' ref={chart => chartInstance = chart} primaryXAxis={primaryxAxis} beforeExport = {beforeExportEvent}>
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

{% endraw %}