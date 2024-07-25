import { IDataOptions, IDataSet, PivotViewComponent, Inject, DisplayOption, PivotChart } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartSettings';
import './App.css';

function App() {

  let displayOption: DisplayOption = {
    view: 'Chart'
  } as DisplayOption;

  let chartSettings: ChartSettings = {
    enableScrollOnMultiAxis:true,enableMultipleAxis: true, chartSeries: { type: 'Column' }
  } as ChartSettings;

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }, {name: 'Products', type: 'Count'}]
  }
  let pivotObj: PivotViewComponent;
    return (<PivotViewComponent height={350} ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' chartSettings={chartSettings} displayOption={displayOption} dataSourceSettings={dataSourceSettings} ><Inject services={[PivotChart]}/></PivotViewComponent>);
};

export default App;
