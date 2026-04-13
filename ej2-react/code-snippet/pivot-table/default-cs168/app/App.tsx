import { FieldList, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
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
