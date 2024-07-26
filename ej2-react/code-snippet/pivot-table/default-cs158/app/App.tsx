import { IDataOptions, CellEditSettings, IDataSet, Inject, PivotViewComponent, BeginDrillThroughEventArgs } from '@syncfusion/ej2-react-pivotview';
import { Grid, Sort, Filter, Group } from '@syncfusion/ej2-grids';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {

  let editSettings: CellEditSettings = {
    allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Normal'
  } as CellEditSettings

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }

  function beginDrillThrough(args: BeginDrillThroughEventArgs): void {
    if (args.gridObj) {
          Grid.Inject(Sort, Filter, Group);
          let gridObj: Grid = args.gridObj;
          gridObj.allowGrouping = true;
          gridObj.allowSorting = true;
          gridObj.allowFiltering = true;
          gridObj.filterSettings = { type: 'CheckBox' };
      }
  }

  let pivotObj: PivotViewComponent;
  
  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} editSettings={editSettings} beginDrillThrough={beginDrillThrough.bind(this)}></PivotViewComponent>);
};

export default App;



