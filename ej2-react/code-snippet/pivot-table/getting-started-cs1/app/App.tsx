import { type IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import type { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import './App.css';

let pivotData: IDataSet[] = [
  { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q1' },
  { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q2' },
  { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q3' },
  { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q4' }
];

function App() {
  const dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: true,
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }]
  };
  return (
    <PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent>
  );
};

export default App;
