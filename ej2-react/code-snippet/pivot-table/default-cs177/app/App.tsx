import { FieldList, IDataOptions, IDataSet, Inject, PivotViewComponent, HyperCellClickEventArgs } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import './App.css';

function App() {

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    allowLabelFilter: true,
    allowValueFilter: true,
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  };
  let pivotObj: PivotViewComponent;

  return (<PivotViewComponent ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} hyperlinkCellClick={hyperlinkCellClick.bind(this)} showFieldList={true} hyperlinkSettings={{
    showHyperlink: true,
    cssClass: 'e-custom-class'
  }}>
    <Inject services={[FieldList]} />
  </PivotViewComponent>);

  function hyperlinkCellClick(args: HyperCellClickEventArgs): void  {
      args.cancel = false;
      args.currentCell.setAttribute("data-url", "https://ej2.syncfusion.com/");//here we have redirected to EJ2 Syncfusion on hyperlinkcell click
  }
};

export default App;
