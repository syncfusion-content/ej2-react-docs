

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject,AxisModel,
ColumnSeries, Export, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, IExportEventArgs, Selection}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
  const chartInstance: ChartComponent;
  const beforeExportEvent = (args: IExportEventArgs): void => {
    args.excelProperties.rows[0].cells[0].value = 'Changed Title';
    args.excelProperties.rows[1].cells[0].value = 'X Title';
    args.excelProperties.rows[1].cells[1].value = 'Y Title';
    args.excelProperties.rows[2].cells[1].value = args.excelProperties.rows[2].cells[1].value + 2;
};
  function clickHandler() {
    chartInstance.exportModule.export('XLSX', 'sample');
  }
  const primaryxAxis: AxisModel = { valueType: 'Category' };

  return (<div><button value='print' onClick={clickHandler.bind(this)}>Export</button>
      <ChartComponent id='charts' ref={chart => chartInstance = chart} primaryXAxis={primaryxAxis} beforeExport = {beforeExportEvent}>
        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel,Export, LineSeries, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} xName='month' yName='sales' type='Column' name='Sales'>
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent></div>)

};
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));



