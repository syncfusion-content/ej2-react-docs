import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Edit, Page, Toolbar } from '@syncfusion/ej2-react-grids';
import React, { useRef } from 'react';
import { data } from './datasource';
function App() {
    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const gridRef = useRef();
    const onMouseUp = (e) => {
        if (e.target.classList.contains("e-rowcell")) {
            if (gridRef.current && gridRef.current.isEdit) {
                gridRef.current.endEdit();
            }
            let index = parseInt(e.target.getAttribute("data-index"));
            if (gridRef.current) {
                gridRef.current.selectRow(index);
                gridRef.current.startEdit();
            }
        }
    };
    return <GridComponent ref={gridRef} dataSource={data} id="Grid" toolbar={toolbarOptions} allowPaging={true} editSettings={editSettings} onMouseUp={onMouseUp}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' textAlign='Right' width='100' isPrimaryKey={true}></ColumnDirective>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'></ColumnDirective>
      <ColumnDirective field='Freight' headerText='Freight' textAlign='Right' width='120' format='C2'></ColumnDirective>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
    </ColumnsDirective>
    <Inject services={[Page, Toolbar, Edit]}/>
  </GridComponent>;
}
;
export default App;
