import {
  CalculatedField,
  FieldList,
  GroupingBar,
  type IDataSet,
  Inject,
  PivotViewComponent
} from '@syncfusion/ej2-react-pivotview';
import type { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

const pivotData: IDataSet[] = [
  { Country: 'France', Product: 'Mountain Bikes', Sold: 31, Amount: 52824 },
  { Country: 'France', Product: 'Road Bikes', Sold: 25, Amount: 42600 },
  { Country: 'Germany', Product: 'Mountain Bikes', Sold: 51, Amount: 86904 },
  { Country: 'Germany', Product: 'Road Bikes', Sold: 90, Amount: 153360 }
];

function App() {
  const dataSourceSettings: DataSourceSettingsModel = {
    dataSource: pivotData,
    rows: [{ name: 'Country' }],
    columns: [{ name: 'Product' }],
    values: [{ name: 'Amount', caption: 'Sold Amount' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }]
  };

  return (
    <PivotViewComponent
      id='PivotView'
      height={350}
      dataSourceSettings={dataSourceSettings}
      showGroupingBar={true}
      showFieldList={true}
      allowCalculatedField={true}
    >
      {/* Inject the modules required by the enabled features. */}
      <Inject services={[GroupingBar, FieldList, CalculatedField]} />
    </PivotViewComponent>
  );
}

export default App;
