import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Toolbar, Page, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager } from '@syncfusion/ej2-data';
import { ddata } from './datasource';

function App() {
    function emptyMessageTemplate() {
        return (<div className='emptyRecordTemplate'>
                <img src="./emptyRecordTemplate.svg" className="e-emptyRecord" alt="No record"/>
                <span>There is no data available to display at the moment.</span>
            </div>);
    }
    const data = [];
    const template = emptyMessageTemplate;
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const orderidRules = { required: true, number: true };
    const editparams = { params: { dataSource: new DataManager(ddata), fields: { text: "ShipCountry", value: "ShipCountry" }, } };
    const validationRule = { required: true };
    const pageSettings = { pageCount: 5 };
    const format = { type: 'dateTime', format: 'M/d/y hh:mm a' };
    return (<div className='control-pane'>
            <div className='control-section'>
                <GridComponent dataSource={data} emptyRecordTemplate={template.bind(this)} toolbar={toolbarOptions} allowPaging={true} editSettings={editSettings} pageSettings={pageSettings}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' validationRules={orderidRules} isPrimaryKey={true}></ColumnDirective>
                    <ColumnDirective field='CustomerName' headerText='Customer Name' width='150' validationRules={validationRule}></ColumnDirective>
                    <ColumnDirective field='Freight' headerText='Freight' width='140' format='C2' textAlign='Right' editType='numericedit'></ColumnDirective>
                    <ColumnDirective field='OrderDate' headerText='Order Date' editType='datetimepickeredit' format={format} width='160'></ColumnDirective>
                    <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' edit={editparams}></ColumnDirective>
                </ColumnsDirective>
                    <Inject services={[Page, Edit, Toolbar]}/>
                </GridComponent>
            </div>
        </div>);
}
export default App;