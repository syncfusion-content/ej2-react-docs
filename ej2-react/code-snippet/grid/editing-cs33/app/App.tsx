

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Edit, Toolbar,
 EditSettingsModel, ToolbarItems, IEditCell } from '@syncfusion/ej2-react-grids';
 import { Query } from '@syncfusion/ej2-data';
import { cascadeData  } from './datasource';
class App extends React.Component<{}, {}>{
    public editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
    public toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    public countryParams : IEditCell = {
        params:   {
            allowFiltering: true,
            dataSource: this.country,
            fields: { text: "countryName", value: "countryName"},
            query: new Query(),
            actionComplete: () => false
            }
        };

    public country: { [key: string]: Object }[] = [
        { countryName: 'United States', countryId: '1' },
        { countryName: 'Australia', countryId: '2' },
        { countryName: 'India', countryId: '3' }
    ];

    render() {
        return <GridComponent dataSource={cascadeData} editSettings={this.editOptions} toolbar={this.toolbarOptions} height={273}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}></ColumnDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType= 'dropdownedit' edit={this.countryParams} textAlign="Right"></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Edit, Toolbar]} />
        </GridComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('grid'));


