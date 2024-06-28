import { IDataOptions, IDataSet, PivotViewComponent, CellClickEventArgs } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import './App.css';

function App() {

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C2'}],
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
  }
  let pivotObj: PivotViewComponent;

  function cellClick(args: CellClickEventArgs): void {
      //triggers for every cell click in pivot table
      args.currentCell.setAttribute("style", "background-color: red;")
  }
  
  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} cellClick={cellClick.bind(this)} dataSourceSettings={dataSourceSettings}></PivotViewComponent>);
};

export default App;
