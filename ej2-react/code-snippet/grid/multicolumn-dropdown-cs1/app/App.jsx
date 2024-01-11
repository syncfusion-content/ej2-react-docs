
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject, Toolbar, EditSettingsModel, ToolbarItems, SaveEventArgs, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { Query } from '@syncfusion/ej2-data';
import { data } from './datasource';

function App() {
    let orderData;
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const orderIDRules = { required: true };
    const freightRules = { required: true, min: 1, max: 1000 };
    const fields = { text: 'ShipCountry' };
    const query = new Query().from('data').select(['EmployeeID', 'ShipCountry']).take(6);
    const editTemplate = () => {
        return (
            <div>
                <DropDownListComponent id='ShipCountry' dataSource={data} fields={fields} query={query} value={orderData.ShipCountry} itemTemplate={itemTemplate} headerTemplate={headerTemplate}></DropDownListComponent>
            </div>
        )
    }
    const headerTemplate = () => {
        return (
            <div className='e-grid'>
                <table className='e-table'>
                    <thead>
                        <tr>
                            <th className='e-headercell'>EmployeeID</th>
                            <th className='e-headercell'>ShipCountry</th>
                        </tr></thead>
                </table>
            </div>
        )
    }
    const itemTemplate = (props) => {
        return (
            <div className='e-grid'>
                <table className='e-table'>
                    <tbody>
                        <tr>
                            <td className='e-rowcell'>{props.EmployeeID}</td>
                            <td className='e-rowcell'>{props.ShipCountry}</td>
                        </tr>
                    </tbody>
                </table>
            </div>)
    }
    const actionBegin = (args) => {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            orderData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            orderData['ShipCountry'] = args.data['ShipCountry'];
        }
    };
    return (<GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} actionBegin={actionBegin}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} width='100' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
            <ColumnDirective field='Freight' headerText='Freight' format='C2' width='120' editType='numericedit' validationRules={freightRules} />
            <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' editType='datepickeredit' />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140' editTemplate={editTemplate} />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar]} />
    </GridComponent>
    );
};
export default App;