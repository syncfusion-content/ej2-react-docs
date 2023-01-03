import * as React from "react";
import * as ReactDOM from "react-dom";
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import { cascadeData } from './datasource';
class App extends React.Component {
    editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    countryParams = {
        create: () => {
            this.countryElem = document.createElement('input');
            return this.countryElem;
        },
        read: () => {
            return this.countryObj.text;
        },
        destroy: () => {
            this.countryObj.destroy();
        },
        write: () => {
            this.countryObj = new DropDownList({
                dataSource: this.country,
                fields: { value: 'countryId', text: 'countryName' },
                change: () => {
                    this.stateObj.enabled = true;
                    let tempQuery = new Query().where('countryId', 'equal', this.countryObj.value);
                    this.stateObj.query = tempQuery;
                    this.stateObj.text = null;
                    this.stateObj.dataBind();
                },
                placeholder: 'Select a country',
                floatLabelType: 'Never'
            });
            this.countryObj.appendTo(this.countryElem);
        }
    };
    stateParams = {
        create: () => {
            this.stateElem = document.createElement('input');
            return this.stateElem;
        },
        read: () => {
            return this.stateObj.text;
        },
        destroy: () => {
            this.stateObj.destroy();
        },
        write: () => {
            this.stateObj = new DropDownList({
                dataSource: this.stateColl,
                fields: { value: 'stateId', text: 'stateName' },
                enabled: false,
                placeholder: 'Select a state',
                floatLabelType: 'Never'
            });
            this.stateObj.appendTo(this.stateElem);
        }
    };
    countryElem;
    countryObj;
    stateElem;
    stateObj;
    country = [
        { countryName: 'United States', countryId: '1' },
        { countryName: 'Australia', countryId: '2' }
    ];
    stateColl = [
        { stateName: 'New York', countryId: '1', stateId: '101' },
        { stateName: 'Virginia ', countryId: '1', stateId: '102' },
        { stateName: 'Washington', countryId: '1', stateId: '103' },
        { stateName: 'Queensland', countryId: '2', stateId: '104' },
        { stateName: 'Tasmania ', countryId: '2', stateId: '105' },
        { stateName: 'Victoria', countryId: '2', stateId: '106' }
    ];
    render() {
        return <GridComponent dataSource={cascadeData} editSettings={this.editOptions} toolbar={this.toolbarOptions} height={273}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}></ColumnDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' edit={this.countryParams} textAlign="Right"></ColumnDirective>
                <ColumnDirective field='ShipState' headerText='Ship State' editType='dropdownedit' edit={this.stateParams} width='150'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Edit, Toolbar]}/>
        </GridComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('grid'));
