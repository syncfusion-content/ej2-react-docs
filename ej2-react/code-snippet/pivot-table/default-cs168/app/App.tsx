import { FieldList, IDataOptions, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import './App.css';

function App() {

  let dataSourceSettings: IDataOptions = {
    dataSource: pivotData as IDataSet[],
  }
  let pivotObj: PivotViewComponent;
  
  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} dataBound={dataBound.bind(this)} showFieldList={true}><Inject services={[FieldList]} /></PivotViewComponent>);

  function dataBound(): void {
    if (pivotObj && pivotObj.dataSourceSettings.values.length === 0) {
      (pivotObj.pivotFieldListModule.dialogRenderer as any).onShowFieldList();
    }
  }
};

export default App;
