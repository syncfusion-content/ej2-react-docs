import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GridComponent, ColumnsDirective, ColumnDirective, ForeignKey, Filter, Inject } from '@syncfusion/ej2-react-grids';
import { data, fEmployeeData } from '../datasource.ts';
import { DataManager } from '@syncfusion/ej2-data';
import { createElement } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-react-dropdowns';
class App extends React.Component {
    grid;
    filterBarTemplate = {
        create: (args) => {
            return createElement('input', { className: 'flm-input' });
        },
        write: (args) => {
            fEmployeeData.splice(0, 0, { 'FirstName': 'All' }); // for clear filtering
            let dropInstance = new DropDownList({
                dataSource: new DataManager(fEmployeeData),
                fields: { text: 'FirstName' },
                placeholder: 'Select a value',
                popupHeight: '200px',
                index: 0,
                change: (args) => {
                    if (args.value !== 'All') {
                        this.grid.filterByColumn('EmployeeID', 'equal', args.value);
                    }
                    else {
                        this.grid.removeFilteredColsByField('EmployeeID');
                    }
                }
            });
            dropInstance.appendTo(args.element);
        }
    };
    render() {
        return <GridComponent dataSource={data} height={280} allowFiltering={true} ref={g => this.grid = g}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"></ColumnDirective>
                <ColumnDirective field='EmployeeID' foreignKeyValue='FirstName' foreignKeyField='EmployeeID' dataSource={fEmployeeData} headerText='Employee Name' width='150' filterBarTemplate={this.filterBarTemplate}></ColumnDirective>
                <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" format='C2'></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'></ColumnDirective>
            </ColumnsDirective>
                <Inject services={[ForeignKey, Filter]}/>
        </GridComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('grid'));
