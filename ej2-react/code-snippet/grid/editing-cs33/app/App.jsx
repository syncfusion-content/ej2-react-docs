import * as React from "react";
import * as ReactDOM from "react-dom";
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import { Query } from '@syncfusion/ej2-data';
import { cascadeData } from './datasource';
class App extends React.Component {
    editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    countryParams = {
        params: {
            allowFiltering: true,
            dataSource: this.country,
            fields: { text: "countryName", value: "countryName" },
            query: new Query(),
            actionComplete: () => false
        }
    };
    country = [
        { countryName: 'United States', countryId: '1' },
        { countryName: 'Australia', countryId: '2' },
        { countryName: 'India', countryId: '3' }
    ];
    render() {
        return <GridComponent dataSource={cascadeData} editSettings={this.editOptions} toolbar={this.toolbarOptions} height={273}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}></ColumnDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' edit={this.countryParams} textAlign="Right"></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Edit, Toolbar]}/>
        </GridComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('grid'));
