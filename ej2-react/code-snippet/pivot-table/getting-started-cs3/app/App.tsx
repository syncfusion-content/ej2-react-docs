import { FieldList, type IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import type { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { pivotData } from './datasource';
import './App.css';

function App() {
  const dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Date' }, { name: 'Product' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'State' }],
    values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Quantity' }]
  };
  return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}><Inject services={[FieldList]} />
    </PivotViewComponent>);
};

export default App;