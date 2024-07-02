import { CellEditSettings, IDataOptions, IDataSet, PivotViewComponent, Inject, DisplayOption, PivotChart } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartSettings';

function App() {

  let editSettings: CellEditSettings = {
    allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Normal'
  } as CellEditSettings

  let displayOption: DisplayOption = {
    view: 'Chart'
  } as DisplayOption;

  let chartSettings: ChartSettings = {
    chartSeries: { type: 'Column' }
  } as ChartSettings;

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
  
  return (<PivotViewComponent height={350} ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' chartSettings={chartSettings} displayOption={displayOption} dataSourceSettings={dataSourceSettings} editSettings={editSettings}><Inject services={[PivotChart]}/></PivotViewComponent>);
};

export default App;
