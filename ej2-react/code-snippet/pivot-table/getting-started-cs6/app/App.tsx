import { CalculatedField, FieldList, type IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
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
        values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Quantity' }, { name: 'Total', caption: 'Total Units', type: 'CalculatedField' }],
        calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(Amount)"+"Sum(Quantity)"' }]
    };
    return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} allowCalculatedField={true} showFieldList={true}><Inject services={[CalculatedField, FieldList]} />
    </PivotViewComponent>);
};

export default App;
