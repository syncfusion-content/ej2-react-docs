import { PivotViewComponent, GroupingBar, Inject } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: pivotData,
    expandAll: false,
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C2' }],
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
  };
  function aggregateCell(args: any) {
    args.skipFormatting = true;
  }
  let pivotObj: PivotViewComponent;
  return (
    <PivotViewComponent id='PivotView' ref={ (d: PivotViewComponent) => pivotObj = d } height={350} aggregateCellInfo={aggregateCell.bind(this)} dataSourceSettings={dataSourceSettings} showGroupingBar='true'>
      <Inject services={[GroupingBar]} />
    </PivotViewComponent>
  );
};
export default App;
