import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PivotViewComponent, VirtualScroll, Inject, ExcelExport } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';
function App() {
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        expandAll: true,
        filters: [],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        values: [{ name: 'Country' }, { name: 'Products' }],
        rows: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    return (<div><div className="col-md-9"> <PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} allowExcelExport={true} enableVirtualization={true} dataSourceSettings={dataSourceSettings} exportComplete={exportComplete.bind(this)}><Inject services={[VirtualScroll, ExcelExport]}/></PivotViewComponent></div>
    <div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent></div></div>);
    function exportComplete(args) {
        args.promise.then((e) => {
            console.log(e.blobData);
        });
    }
    function btnClick() {
        let excelExportProperties = {
            fileName: 'excelexport.xlsx'
        };
        pivotObj.excelExport(excelExportProperties, false, null, true);
    }
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
