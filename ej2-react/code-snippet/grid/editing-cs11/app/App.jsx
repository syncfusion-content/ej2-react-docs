import { AutoComplete } from '@syncfusion/ej2-dropdowns';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject, Toolbar, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { purchaseData } from './datasource';
function App() {
    const createCustomerIDFn = () => {
        inpuEle = document.createElement('input');
        return inpuEle;
    };
    const destroyCustomerIDFn = () => {
        autoCompleteIns.destroy();
    };
    const readCustomerIDFn = () => {
        return autoCompleteIns.value;
    };
    const writeCustomerIDFn = (args) => {
        autoCompleteIns = new AutoComplete({
            allowCustom: true,
            value: args.rowData[args.column.field],
            dataSource: autoCompleteData,
            fields: { value: 'CustomerID', text: 'CustomerID' },
        });
        autoCompleteIns.appendTo(inpuEle);
    };
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const orderIDRules = { required: true };
    const pageOptions = {
        pageSize: 7, pageSizes: true
    };
    let inpuEle;
    let autoCompleteIns;
    const autoCompleteData = [
        { CustomerID: 'VINET', Id: '1' },
        { CustomerID: 'TOMSP', Id: '2' },
        { CustomerID: 'HANAR', Id: '3' },
        { CustomerID: 'VICTE', Id: '4' },
        { CustomerID: 'SUPRD', Id: '5' },
    ];
    const daParams = {
        create: createCustomerIDFn,
        destroy: destroyCustomerIDFn,
        read: readCustomerIDFn,
        write: writeCustomerIDFn,
    };
    return (<GridComponent dataSource={purchaseData} allowPaging={true} pageSettings={pageOptions} editSettings={editOptions} toolbar={toolbarOptions} height={250}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' type='number' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} width='100'/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' type='string' edit={daParams} width='140'/>
      <ColumnDirective field='Freight' headerText='Freight' type='number' format="C2" textAlign="Right" editType='numericedit' width='120'/>
      <ColumnDirective field='OrderDate' headerText='Order Date' type='date' format="yMd" editType="datepickeredit" width='150'/>
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar, Page]}/>
  </GridComponent>);
}
;
export default App;
