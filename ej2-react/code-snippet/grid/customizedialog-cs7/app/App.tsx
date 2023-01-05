

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Edit, Toolbar,
EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
import { DialogFormTemplate, IOrderModel} from './template';
class App extends React.Component<{}, {}>{
    public editOptions: EditSettingsModel = { allowAdding:true, allowEditing: true, allowDeleting:true };
    public toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    private Grid: GridComponent;

    btnClick(): void {
        if (this.Grid.element.classList.contains('disablegrid')) {
            this.Grid.element.classList.remove('disablegrid');
            document.getElementById("GridParent").classList.remove('wrapper');
        }
        else {
            this.Grid.element.classList.add('disablegrid');
            document.getElementById("GridParent").classList.add('wrapper');
        }
    }

    render() {
        return (
            <div>
            <ButtonComponent cssClass='e-flat e-primary' ref={(scope) => { this.btnobj = scope; }} iconCss='e-icons e-play-icon'
                            isToggle onClick={ this.btnClick.bind(this) }>Enable/Disable Grid</ButtonComponent>
            <div id="GridParent">
            <GridComponent dataSource={data} editSettings={this.editOptions} toolbar={this.toolbarOptions} height={265} ref={(scope) => { this.Grid = scope; }}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}></ColumnDirective>
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'></ColumnDirective>
                    <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
                </ColumnsDirective>
                <Inject services={[Edit, Toolbar]} />
            </GridComponent></div></div>)
    }
};
ReactDOM.render(<App />, document.getElementById('grid'));


