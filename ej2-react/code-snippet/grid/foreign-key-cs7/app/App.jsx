import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GridComponent, ColumnsDirective, ColumnDirective, ForeignKey, Filter, Inject } from '@syncfusion/ej2-react-grids';
import { data, fEmployeeData } from '../datasource.ts';
import { DataManager } from '@syncfusion/ej2-data';
import { createElement } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-react-dropdowns';
class App extends React.Component {
    grid;
    filterOption = { type: 'Menu' };
    filter = {
        ui: {
            create: (args) => {
                let flValInput = createElement('input', { className: 'flm-input' });
                args.target.appendChild(flValInput);
                this.dropInstance = new DropDownList({
                    dataSource: new DataManager(fEmployeeData),
                    fields: { text: 'FirstName', value: 'EmployeeID' },
                    placeholder: 'Select a value',
                    popupHeight: '200px'
                });
                this.dropInstance.appendTo(flValInput);
            },
            write: (args) => {
                this.dropInstance.text = args.filteredValue || '';
            },
            read: (args) => {
                args.fltrObj.filterByColumn(args.column.field, args.operator, this.dropInstance.text);
            }
        }
    };
    render() {
        return <GridComponent dataSource={data} height={315} allowFiltering={true} filterSettings={this.filterOption} ref={g => this.grid = g}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"></ColumnDirective>
                <ColumnDirective field='EmployeeID' foreignKeyValue='FirstName' foreignKeyField='EmployeeID' dataSource={fEmployeeData} headerText='Employee Name' width='150' filter={this.filter}></ColumnDirective>
                <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" format='C2'></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'></ColumnDirective>
            </ColumnsDirective>
                <Inject services={[ForeignKey, Filter]}/>
        </GridComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('grid'));
