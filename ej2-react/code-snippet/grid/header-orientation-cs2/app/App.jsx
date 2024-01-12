import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ExcelExport, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const toolbar = ['ExcelExport'];
    const customAttributes = { class: 'orientationcss' };
    const degree = [90, 180, 45, 135, 225, -90];
    let dropDownListObject;
    const setHeaderHeight = () => {
        /** Obtain the width of the headerText content */
        const textWidth = document.querySelector(".orientationcss > div").scrollWidth;
        const headerCell = document.querySelectorAll(".e-headercell");
        for (let i = 0; i < headerCell.length; i++) {
            /** Assign the obtained textWidth as the height of the headerCell */
            (headerCell.item(i)).style.height = textWidth + 'px';
        }
    };
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'grid_excelexport') {
            grid.excelExport();
        }
    };
    const excelQueryCellInfo = (args) => {
        if (args.column.field == 'Freight') {
            if (args.value < 30) {
                args.style = { backColor: '#99ffcc' };
            }
            else if (args.value < 60) {
                args.style = { backColor: '#ffffb3' };
            }
            else {
                args.style = { backColor: '#ff704d' };
            }
        }
    };
    const excelHeaderQueryCellInfo = (args) => {
        let textWidth = document.querySelector(".orientationcss > div").scrollWidth;
        if (args.gridCell.column.field == 'Freight') {
            args.style = { backColor: '#99ffcc', vAlign: 'Bottom' };
        }
        else {
            args.style = { vAlign: 'Center', rotation: dropDownListObject.value };
        }
        args.cell.cellHeight = textWidth;
    };
    return (<div>
        <label>Select a degree:</label>
        <DropDownListComponent style={{ marginLeft: "20px" }} placeholder="Select a degree" id="ddlelement" dataSource={degree} ref={(scope) => { dropDownListObject = scope; }} width={150}></DropDownListComponent>
        <GridComponent id='grid' dataSource={data} height={260} created={setHeaderHeight} allowExcelExport={true} excelQueryCellInfo={excelQueryCellInfo} excelHeaderQueryCellInfo={excelHeaderQueryCellInfo} toolbar={toolbar} toolbarClick={toolbarClick} ref={g => grid = g}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' customAttributes={customAttributes} width='100' />
                <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right" />
                <ColumnDirective field='Freight' headerText='Freight' width='80' format="C2" textAlign="Center" />
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
            </ColumnsDirective>
            <Inject services={[Toolbar, ExcelExport]} />
        </GridComponent>
    </div>);
}
;
export default App;
