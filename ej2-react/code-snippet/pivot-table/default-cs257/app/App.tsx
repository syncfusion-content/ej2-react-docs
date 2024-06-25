

import { IDataOptions, IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';

function App() {
  let gridSettings: GridSettings = {
    columnRender: columnRender.bind(this)
  } as GridSettings;

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: true,
    filters: [],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
  
  function columnRender(args) {
    for (let i: number = 0; i < args.columns.length; i++) {
      if(args.stackedColumns[0]){
          // Content for the row headers is right-aligned here.
          args.stackedColumns[0].textAlign="Right";
      }
      if(args.stackedColumns[1]){
          // Content for the column header "FY 2015" is center-aligned here.
          args.stackedColumns[1].textAlign = 'Center';
      }
      if(args.stackedColumns[1] && (args.stackedColumns[1].columns[0] as any)){
          // Content for the column header "Q1" is right-aligned here.
          (args.stackedColumns[1].columns[0] as any).textAlign = 'Right';
      }
      if(args.stackedColumns[1] && args.stackedColumns[1].columns[0] && (args.stackedColumns[1].columns[0] as any).columns[0]){
          // Content for the value header "Units Sold" is right-aligned here.
           (args.stackedColumns[1].columns[0] as any).columns[0].headerTextAlign = 'Right';
      }
      if(args.stackedColumns[1] && args.stackedColumns[1].columns[0] && (args.stackedColumns[1].columns[0] as any).columns[0]){
          // Content for the values are left-aligned here.
          (args.stackedColumns[1].columns[0] as any).columns[0].textAlign = 'Left';
      }
    }
  }

  
  return (<PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} gridSettings={gridSettings}></PivotViewComponent>);
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));



