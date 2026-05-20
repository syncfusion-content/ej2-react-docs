
// Import the required grid modules from the grid package.
import { ColumnDirective, ColumnsDirective, Filter, type FilterSettingsModel, Toolbar, Edit, type EditSettingsModel, type ToolbarItems, GridComponent, Inject, Page, Sort, type PageSettingsModel} from '@syncfusion/ej2-react-grids';
import * as React from 'react';
// Import Grid data from external file.
import { data } from './datasource';

function App() {
    const pageSettings: PageSettingsModel = { pageSize: 6 }
    const filterSettings: FilterSettingsModel = { type: 'CheckBox' };
    const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const orderIDRules: Object = { required: true, number: true };
    const customerNameRules: Object = { required: true };
    return <div>
        <GridComponent dataSource={data} allowPaging={true} pageSettings={pageSettings} allowFiltering={true} filterSettings={filterSettings} allowSorting={true} editSettings={editOptions} toolbar={toolbarOptions}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' validationRules={orderIDRules} isPrimaryKey={true} textAlign='Right'/>
                <ColumnDirective field='CustomerName' headerText='Customer Name' validationRules={customerNameRules} width='100'/>
                <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format='yMd' editType='datepickeredit' textAlign='Right'/>
                <ColumnDirective field='Freight' width='100' format='C2' editType='numericedit' textAlign='Right'/>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='100'/>
            </ColumnsDirective>
            {/* Inject required Grid features */}
            <Inject services={[Page, Sort, Filter, Edit, Toolbar]} />
        </GridComponent>
    </div>
}
export default App;



