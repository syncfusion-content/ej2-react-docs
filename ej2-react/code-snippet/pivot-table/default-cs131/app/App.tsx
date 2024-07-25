import { GroupingBar, IDataOptions, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import './App.css';

function App() {
  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year', showRemoveIcon: false }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    values: [{ name: 'Sold', caption: 'Units Sold', showRemoveIcon: false }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products', showRemoveIcon: false }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    filters: []
  }
  let pivotObj: PivotViewComponent;
    return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showGroupingBar={true} ><Inject services={[GroupingBar]}/> </PivotViewComponent>);
};

export default App;



