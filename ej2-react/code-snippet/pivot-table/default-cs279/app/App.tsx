import { GroupingBar, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { alphanumeric_data } from './datasource';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: alphanumeric_data as IDataSet[],
            rows: [{ name: 'ProductID', dataType: 'number' }],
            columns: [{ name: 'Country' }],
            values: [{ name: 'Sold', caption:'Units Sold' }, { name: 'Amount', caption:'Sold Amount' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
  }
  let pivotObj: PivotViewComponent;
  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} showGroupingBar={true} dataSourceSettings={dataSourceSettings}><Inject services={[GroupingBar]}/></PivotViewComponent>);
};

export default App;
