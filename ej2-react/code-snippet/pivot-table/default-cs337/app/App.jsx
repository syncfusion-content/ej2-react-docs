import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PivotViewComponent, ExcelExport, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

function App() {
    let pivotObj;
    const degree = [90, 135, 180, 270];
    let dropDownListObject;
    let dataSourceSettings = {
        dataSource: pivotData,
        columns: [{ name: 'Year' }],
        values: [{ name: 'Sold' }],
        rows: [{ name: 'Country' }, { name: 'Products' }]
    };

    let gridSettings = {
        excelHeaderQueryCellInfo: function (args) {
            args.style = { rotation: dropDownListObject.value };
        },
        excelQueryCellInfo: function (args) {
            args.style = { rotation: dropDownListObject.value };
        }
    };

    function btnClick() {
        pivotObj.excelExport();
    }

    return (
        <div>
            <div className="col-md-9"> <PivotViewComponent ref={(d) => pivotObj = d} id='PivotView' height={350}
                dataSourceSettings={dataSourceSettings} allowExcelExport={true} gridSettings={gridSettings}>
                <Inject services={[ExcelExport]} /></PivotViewComponent>
            </div>
            <div className='col-lg-3 property-section'>
                <div id="excel">
                    <ButtonComponent cssClass='e-primary' onClick={btnClick}>Export</ButtonComponent>
                </div>
                <div id="dropdownlist" style={{ marginTop: '10px' }}>
                    <label>Select a degree: </label>
                    <DropDownListComponent style={{ marginLeft: "10px" }} placeholder="Select a degree" id="ddlelement"
                        dataSource={degree} ref={(scope) => { dropDownListObject = scope; }} width={150}>
                    </DropDownListComponent>
                </div>
            </div>
        </div>);

};
export default App;

