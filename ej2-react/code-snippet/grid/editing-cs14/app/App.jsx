
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import { Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { RichTextEditorComponent, HtmlEditor, Inject as RichTextEditorInject, Toolbar as RichTextEditorToolbar, QuickToolbar } from '@syncfusion/ej2-react-richtexteditor';

function App() {
    let orderData;
    const pageSettings = { pageSize: 8, pageSizes: true };
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const orderIDRules = { required: true, number: true };
    const customerIDRules = { required: true, minLength: 5 };
    const freightRules = { required: true, min: 1, max: 1000 };
    const formatOptions = { type: 'dateTime', format: 'M/d/y hh:mm a' };
    const editTemplate = () => {
        return (
            <div>
                {orderData && orderData.ShipAddress !== undefined && (
                    <RichTextEditorComponent id='ShipAddress' value={orderData.ShipAddress} focus={onFocus} >
                        <RichTextEditorInject services={[HtmlEditor, RichTextEditorToolbar, QuickToolbar]} />
                    </RichTextEditorComponent>)}
            </div>
        )
    }
    const actionBegin = (args) => {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            orderData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            orderData['ShipAddress'] = args.data['ShipAddress'];
        }
    }
    const onFocus = (args) => {
        args.event.target.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.stopPropagation();
            }
        });
    }
    return <GridComponent dataSource={data} editSettings={editOptions} allowPaging={true} pageSettings={pageSettings} toolbar={toolbarOptions} actionBegin={actionBegin}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customerIDRules} />
            <ColumnDirective field='Freight' headerText='Freight' width='120' textAlign="Right" editType='numericedit' validationRules={freightRules} />
            <ColumnDirective field='OrderDate' headerText='OrderDate' width='150' format={formatOptions} editType='datepickeredit' />
            <ColumnDirective field='ShipAddress' headerText='Ship Address' width='150' editType="textarea" disableHtmlEncode={false} editTemplate={editTemplate} />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar, Page]} />
    </GridComponent>
};
export default App;