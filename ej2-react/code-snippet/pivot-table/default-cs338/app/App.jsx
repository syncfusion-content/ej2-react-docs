import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PivotViewComponent, ExcelExport, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
    let pivotObj;

    let dataSourceSettings = {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
    };

    let gridSettings = {
        excelQueryCellInfo: function (args) {
            if (args.cell && args.cell.actualText === 'Sold') {
                if (args.value < 700) {
                    args.style = {
                        backColor: '#df3800',
                        fontName: 'Biome',
                        fontColor: '#FFFFFF',
                        borders: { color: '#8B1E00', lineStyle: 'thin' }
                    };
                }
                else {
                    args.style = {
                        backColor: '#00A45A',
                        fontName: 'Nirmala UI',
                        fontColor: '#FFFFFF',
                        borders: { color: '#00663A', lineStyle: 'thin' }
                    };
                }
            }
        }
    };

    function btnClick() {
        pivotObj.excelExport();
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

