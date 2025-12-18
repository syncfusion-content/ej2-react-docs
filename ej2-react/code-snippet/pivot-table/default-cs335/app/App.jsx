import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PivotViewComponent, ExcelExport, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
    let pivotObj;

    let dataSourceSettings = {
        dataSource: pivotData,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold' }],
        rows: [{ name: 'Country' }, { name: 'Products' }]
    };

    function beforeExport(args) {
        for (var i = 0; i < args.dataCollections.length; i++) {
            var pivotValue = args.dataCollections[i];
            for (var j = 0; j < pivotValue.length; j++) {
                var row = pivotValue[j];
                if (row) {
                    pivotValue[j] = row.filter(function (item) {
                        return item !== null && (item.axis !== 'row');
                    });
                }
            }
        }
    }

    function btnClick() {
        pivotObj.excelExport();
    }

    return (
        <div>
            <div className="col-md-9"> <PivotViewComponent ref={(d) => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} allowExcelExport={true} beforeExport={beforeExport.bind(this)}>
                <Inject services={[ExcelExport]} /></PivotViewComponent>
            </div>
            <div className='col-lg-3 property-section'>
                <ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent>
            </div>
        </div>);

};
export default App;

