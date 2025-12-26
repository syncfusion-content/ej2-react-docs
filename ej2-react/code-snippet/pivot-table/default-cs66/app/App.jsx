import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PivotViewComponent, ExcelExport, Inject} from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        expandAll: false,
        filters: [],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    let dataSourceSettings1 = {
        rows: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        expandAll: false,
        filters: [],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        columns: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }]
    };
    let pivotObj1;
    return (<div><div className="col-md-9"> <PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} allowExcelExport={true}><Inject services={[ExcelExport]} /></PivotViewComponent></div>
        <div className="col-md-9"> <PivotViewComponent ref={d => pivotObj1 = d} id='PivotView1' height={350} dataSourceSettings={dataSourceSettings1} allowExcelExport={true}><Inject services={[ExcelExport]} /></PivotViewComponent></div>
        <div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent></div></div>);
    function btnClick() {
        let excelExportProperties = {
            multipleExport: { type: 'AppendToSheet', blankRows: 2 },
            pivotTableIds: ['PivotView', 'PivotView1']
        };
        pivotObj.excelExport(excelExportProperties, true);
    }
};
export default App;

