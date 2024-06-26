

import { IDataOptions, IDataSet, PivotViewComponent, GridSettings, PivotCellSelectedEventArgs } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';

function App() {

  let gridSettings: GridSettings = {
    allowSelection: true,
    selectionSettings: { mode: 'Both', type: 'Multiple' }
  } as GridSettings;

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C2', useGrouping: false, minimumSignificantDigits: 1, maximumSignificantDigits: 3 }],
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
  }

  function onCellSelected(args: PivotCellSelectedEventArgs): void {
    //args.selectedCellsInfo -> get selected cells information.
    //args.pivotValues -> get the pivot values of the pivot table.
  }
  let pivotObj: PivotViewComponent;
  
  return (<PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} gridSettings={gridSettings} cellSelected={onCellSelected}></PivotViewComponent>);
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));



