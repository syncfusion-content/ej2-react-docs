import * as React from "react";
import * as ReactDOM from "react-dom";
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
import { DialogFormTemplate } from './template';
class App extends React.Component {
    editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: this.dialogTemplate.bind(this) };
    toolbarOptions = ['Add', 'Edit', 'Delete'];
    grid;
    dialogTemplate(props) {
        let a = [props, this.grid];
        return (<DialogFormTemplate {...a}/>);
    }
    actionComplete(args) {
        // Set initail Focus
        if (args.requestType === 'beginEdit') {
            args.form.elements.namedItem('CustomerID').focus();
        }
        else if (args.requestType === 'add') {
            args.form.elements.namedItem('OrderID').focus();
        }
    }
    render() {
        return <GridComponent ref={g => this.grid = g} dataSource={data} actionComplete={this.actionComplete.bind(this)} editSettings={this.editOptions} toolbar={this.toolbarOptions} height={265}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={{ required: true }}></ColumnDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={{ required: true }}></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Edit, Toolbar]}/>
        </GridComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('grid'));
