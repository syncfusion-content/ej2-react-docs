import { IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { csvdata } from './datasource';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: getCSVData(),
    type: 'CSV',
    expandAll: false,
    columns: [{ name: 'Item Type' }, { name: 'Sales Channel' } ],
    filters: [],
    drilledMembers: [{ name: 'Item Type', items: ['Baby Food'] }],
    formatSettings: [{ name: 'Total Cost', format: 'C0' }, { name: 'Total Revenue', format: 'C0' }, { name: 'Total Profit', format: 'C0' }],
    rows: [{ name: 'Region' }, { name: 'Country' }],
    values: [{ name: 'Total Cost' }, { name: 'Total Revenue' }, { name: 'Total Profit' }],
  };
  function getCSVData() {
    const dataSource = [];
    const jsonObject = csvdata.split(/\r?\n|\r/);
    for (let i = 0; i < jsonObject.length; i++) {
      if (!isNullOrUndefined(jsonObject[i]) && jsonObject[i] !== '') {
        dataSource.push(jsonObject[i].split(','));
      }
    }
    return dataSource;
  }
  let pivotObj: PivotViewComponent;
  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent>);
};

export default App;
