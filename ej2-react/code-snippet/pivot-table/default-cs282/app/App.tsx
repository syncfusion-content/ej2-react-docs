import { GroupingBar, IDataSet, Inject, PivotViewComponent, HeadersSortEventArgs } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    enableSorting: true,
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    filters: []
  }
  let pivotObj: PivotViewComponent;

  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} onHeadersSort={onHeadersSort.bind(this)} showGroupingBar={true}><Inject services={[GroupingBar]} /></PivotViewComponent>);
  function onHeadersSort(args: HeadersSortEventArgs): void {
        if (args.fieldName == 'Country') {
            args.members = ['United Kingdom', 'Germany'];
            args.IsOrderChanged = true;
        }
        if (args.fieldName == 'Year') {
            args.members = ['FY 2017', 'FY 2015'];
            args.IsOrderChanged = true;
        }
    }
};

export default App;
