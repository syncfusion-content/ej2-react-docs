import { GroupingBar, IDataSet, Inject, PivotViewComponent, AggregateMenuOpenEventArgs } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} aggregateMenuOpen={aggregateMenuOpen.bind(this)} showGroupingBar={true}><Inject services={[GroupingBar]} /></PivotViewComponent>);
  
  function aggregateMenuOpen (args: AggregateMenuOpenEventArgs ): void {
    args.displayMenuCount = 4;
    if(args.fieldName === 'Amount') {
      args.aggregateTypes = ['Sum', 'Avg', 'Max'];
    }
  }
};

export default App;
