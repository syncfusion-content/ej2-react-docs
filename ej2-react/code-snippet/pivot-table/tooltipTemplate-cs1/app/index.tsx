{% raw %}


import { IDataOptions, IDataSet, Inject, PivotViewComponent, Toolbar } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartSettings';

function App() {
  let toolbarOptions: any = ['Grid', 'Chart'];

  let chartSettings: ChartSettings = {
      chartSeries: { type: 'Column', animation: { enable: false } },
      tooltip:{ template:'<span class="wrap">${aggregateType} of ${valueField}: ${value}</span>' }
  } as ChartSettings;

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    filters: []
  }
  let pivotObj: PivotViewComponent;
  
  return (<PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} showTooltip={true} dataSourceSettings={dataSourceSettings} chartSettings={chartSettings} displayOption={{ view: 'Both' }} showToolbar={true} tooltipTemplate={"#Template"} toolbar={toolbarOptions}><Inject services={[Toolbar]} /></PivotViewComponent>);
};

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



{% endraw %}