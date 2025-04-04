
import { DrillThrough, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
  function drillThrough(args: BeginDrillThroughEventArgs): void {
    for (var i = 0; i < args.gridColumns.length; i++) {
      if (args.gridColumns[i].field === 'Country') {
        args.gridColumns[i].editType = 'dropdownedit';
        //args.gridColumns[i].editType = 'numericedit';
        //args.gridColumns[i].editType = 'textedit';
        //args.gridColumns[i].editType = 'booleanedit';
        //args.gridColumns[i].editType = 'datepickeredit';
        //args.gridColumns[i].editType = 'datetimepickeredit';
      }
    }
  }
  
  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} allowDrillThrough={true}editSettings={{ allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal'}} drillThrough={drillThrough.bind(this)} ><Inject services={[DrillThrough]}/> </PivotViewComponent>);
};

export default App;



