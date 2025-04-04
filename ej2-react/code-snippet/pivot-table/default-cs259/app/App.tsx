import { GroupingBar, GroupingBarSettings, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {
  let groupingSettings: GroupingBarSettings = {
    showFieldsPanel: true
  } as GroupingBarSettings;

  let dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: true,
    filters: [],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
  
  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} groupingBarSettings={groupingSettings} dataBound={trend.bind(this)} dataSourceSettings={dataSourceSettings} showGroupingBar={true} ><Inject services={[GroupingBar]}/> </PivotViewComponent>);
  function trend(): void {
    if (pivotObj.showGroupingBar) {
      let columns: string[] = [];
      for (let i: number = 1; i < (pivotObj.grid as any).columnModel.length; i++) {
        columns.push((pivotObj.grid as any).columnModel[i].field);
      }
      pivotObj.grid.autoFitColumns(columns);
    }
  }
};

export default App;
