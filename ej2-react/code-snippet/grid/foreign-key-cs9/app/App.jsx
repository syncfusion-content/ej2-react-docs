import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GridComponent, ColumnsDirective, ColumnDirective, ForeignKey, getForeignData, Aggregate, Inject } from '@syncfusion/ej2-react-grids';
import { data, employeeData } from '../datasource.ts';
import { getValue } from '@syncfusion/ej2-base';
class App extends React.Component {
    grid;
    aggregate = [
        {
            columns: [
                {
                    type: 'Custom',
                    customAggregate: this.customAggregateFn,
                    field: 'EmployeeID',
                    footerTemplate: 'Count of Margaret: ${Custom}'
                }
            ]
        }
    ];
    // Custom Aggregate function for foreign column
    customAggregateFn(data, column) {
        return data.result.filter((dObj) => {
            return getValue('FirstName', getForeignData(this.getColumnByField(column.field), dObj)[0]) === 'Margaret';
        }).length;
    }
    ;
    render() {
        return <GridComponent dataSource={data} height={280} aggregates={this.aggregate} ref={g => this.grid = g}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"></ColumnDirective>
                    <ColumnDirective field='EmployeeID' foreignKeyValue='FirstName' foreignKeyField='EmployeeID' dataSource={employeeData} headerText='Employee Name' width='150'></ColumnDirective>
                    <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" format='C2'></ColumnDirective>
                    <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'></ColumnDirective>
                </ColumnsDirective>
                <Inject services={[ForeignKey, Aggregate]}/>
        </GridComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('grid'));
