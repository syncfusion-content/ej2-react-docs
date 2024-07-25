import { IDataOptions, IDataSet, PivotViewComponent, Inject, GroupingBar, memberEditorOpenEventArgs } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import './App.css';

function App() {

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    filterSettings: [{ name: 'Country', type: 'Exclude', items: ['United States'] }],
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;

  function memberEditorOpen (args: memberEditorOpenEventArgs) : void {
    if ( args.fieldName == 'Country') {
      args.fieldMembers = [{ id: 'France', actualText: 'France', name:'France' }, { id: 'Germany', actualText: 'Germany', name: 'Germany'}];
      }
  }

  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} memberEditorOpen={memberEditorOpen.bind(this)} showGroupingBar={true}><Inject services={[GroupingBar]} /></PivotViewComponent>);
};

export default App;
