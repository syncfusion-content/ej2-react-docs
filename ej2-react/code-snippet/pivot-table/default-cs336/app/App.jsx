import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PivotViewComponent, ExcelExport, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
    let pivotObj;

    let dataSourceSettings = {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }]
    };

    let gridSettings = {
        columnRender: function (args) {
            // Specific column(s) can be hidden by checking their level name and setting its visible property accordingly.
            for (let i = 1; i < args.columns.length; i++) {
                if (args.stackedColumns[i].customAttributes &&
                    args.stackedColumns[i].customAttributes.cell.valueSort.levelName === 'FY 2016.Units Sold') {
                    args.stackedColumns[i].visible = false;
                }
            }
        }
    };

    function btnClick() {
        let excelExportProperties = {
            includeHiddenColumn: false
        };
        pivotObj.excelExport(excelExportProperties);
    }

    return (
        <div>
            <div className="col-md-9"> <PivotViewComponent ref={(d) => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings}
                allowExcelExport={true} gridSettings={gridSettings}>
                <Inject services={[ExcelExport]} /></PivotViewComponent>
            </div>
            <div className='col-lg-3 property-section'>
                <ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent>
            </div>
        </div>);

};
export default App;

