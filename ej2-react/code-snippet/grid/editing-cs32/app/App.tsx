

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Edit, Toolbar,
 EditSettingsModel, ToolbarItems, IEditCell } from '@syncfusion/ej2-react-grids';
import { cascadeData  } from './datasource';
class App extends React.Component<{}, {}>{
    public editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
    public toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    public countryParams : IEditCell = {
        create:()=>{
            this.countryElem = document.createElement('input');
                return this.countryElem;
            },
            read:()=>{
                return this.countryObj.text;
            },
            destroy:()=>{
                this.countryObj.destroy();
            },
            write:()=>{
                this.countryObj = new DropDownList({
                dataSource: this.country,
                fields: { value: 'countryId', text: 'countryName' },
                change: () => {
                this.stateObj.enabled = true;
                let tempQuery: Query = new Query().where('countryId', 'equal', this.countryObj.value);
                this.stateObj.query = tempQuery;
                this.stateObj.text = null;
                this.stateObj.dataBind();
            },
            placeholder: 'Select a country',
            floatLabelType: 'Never'
            });
            this.countryObj.appendTo(this.countryElem);
    }};
    public stateParams : Object = {
            create:()=>{
                this.stateElem = document.createElement('input');
                return this.stateElem;
            },
            read:()=>{
                return this.stateObj.text;
            },
            destroy:()=>{
                this.stateObj.destroy();
            },
            write:()=>{
                this.stateObj = new DropDownList({
                dataSource: this.stateColl,
                fields: { value: 'stateId', text: 'stateName' },
                enabled: false,
                placeholder: 'Select a state',
                floatLabelType: 'Never'
            });
            this.stateObj.appendTo(this.stateElem);
    }};

    public countryElem : HTMLElement;
    public countryObj : DropDownList;

    public stateElem : HTMLElement;
    public stateObj : DropDownList;

    public country: { [key: string]: Object }[] = [
        { countryName: 'United States', countryId: '1' },
        { countryName: 'Australia', countryId: '2' }
    ];
    public stateColl: { [key: string]: Object }[] = [
        { stateName: 'New York', countryId: '1', stateId: '101' },
        { stateName: 'Virginia ', countryId: '1', stateId: '102' },
        { stateName: 'Washington', countryId: '1', stateId: '103' },
        { stateName: 'Queensland', countryId: '2', stateId: '104' },
        { stateName: 'Tasmania ', countryId: '2', stateId: '105' },
        { stateName: 'Victoria', countryId: '2', stateId: '106' }
    ];

    render() {
        return <GridComponent dataSource={cascadeData } editSettings={this.editOptions} toolbar={this.toolbarOptions} height={273}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}></ColumnDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType= 'dropdownedit' edit={this.countryParams} textAlign="Right"></ColumnDirective>
                <ColumnDirective field='ShipState' headerText='Ship State' editType= 'dropdownedit' edit={this.stateParams} width='150'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Edit, Toolbar]} />
        </GridComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('grid'));


