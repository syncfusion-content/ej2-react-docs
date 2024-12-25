import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';
function App() {
    let count = 7;
    let cellSpacing = [10, 10];
    let resize = ['e-south-east', 'e-east', 'e-west', 'e-north', 'e-south'];
    let panels = [
        { 'id': 'Panel0', 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0, content: '<div class="content">0</div>' },
        { 'id': 'Panel1', 'sizeX': 3, 'sizeY': 2, 'row': 0, 'col': 1, content: '<div class="content">1</div>' },
        { 'id': 'Panel2', 'sizeX': 1, 'sizeY': 3, 'row': 0, 'col': 4, content: '<div class="content">2</div>' },
        { 'id': 'Panel3', 'sizeX': 1, 'sizeY': 1, 'row': 1, 'col': 0, content: '<div class="content">3</div>' },
        { 'id': 'Panel4', 'sizeX': 2, 'sizeY': 1, 'row': 2, 'col': 0, content: '<div class="content">4</div>' },
        { 'id': 'Panel5', 'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 2, content: '<div class="content">5</div>' },
        { 'id': 'Panel6', 'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 3, content: '<div class="content">6</div>' }
    ];
    let data = ["Panel0", "Panel1", "Panel2", "Panel3", "Panel4", "Panel5", "Panel6"];
    let dashboardObj:DashboardLayoutComponent;
    let sizeXObj:NumericTextBoxComponent;
    let sizeYObj:NumericTextBoxComponent;
    let rowObj:NumericTextBoxComponent;
    let colsObj:NumericTextBoxComponent;
    let paneObj:DropDownListComponent;
    // Adding new panels for DashboardLayout
    function onAdd() {
        //let proxy = this;
        let panel = [{
                'id': count.toString() + '_layout', 'sizeX': sizeXObj.value, 'sizeY': sizeYObj.value, 'row': rowObj.value, 'col': colsObj.value,
                content: '<div class="content">' + count.toString() + '</div>'
            }];
        (dashboardObj as any).addPanel(panel[0]);
        count = count + 1;
    }
    // Removeing selected panels for DashboardLayout
    function onRemove() {
        if (paneObj.value) {
            (dashboardObj as any).removePanel(paneObj.value.toString());
        }
    }
        return (<div id='container'>
        <div className="inline" id="control">
        <DashboardLayoutComponent id='dashboard_layout' ref={s => (dashboardObj = s)} cellSpacing={cellSpacing} panels={panels} allowResizing={true} columns={5} resizableHandles={resize}/>
        </div>
        <div className="inline" id="properties">
            <table>
            <tbody>
                <tr>
                    <td>SizeX</td>
                    <td> <NumericTextBoxComponent ref={s => (sizeXObj = s)} className="col-sm-4" placeholder={"Ex: 10"} value={1} min={1} max={5} floatLabelType="Never" id="sizeX"/></td>
                </tr>
                <tr>
                    <td>SizeY</td>
                    <td> <NumericTextBoxComponent ref={s => (sizeYObj = s)} className="col-sm-4" placeholder={"Ex: 10"} value={1} min={1} max={5} floatLabelType="Never" id="sizeY"/></td>
                </tr>
                <tr>
                    <td>Row</td>
                    <td> <NumericTextBoxComponent ref={s => (rowObj = s)} className="col-sm-4" placeholder={"Ex: 10"} value={0} min={0} max={5} floatLabelType="Never" id="row"/></td>
                </tr>
                <tr>
                    <td>Column</td>
                    <td> <NumericTextBoxComponent ref={s => (colsObj = s)} className="col-sm-4" placeholder={"Ex: 10"} value={0} min={0} max={4} floatLabelType="Never" id="column"/></td>
                </tr>
                <tr>
                    <td />
                    <td>
                        <button onClick={onAdd}>Add Panel</button>
                    </td>
                </tr>
            </tbody>
            </table>
            <table>
            <tbody>
                <tr>
                    <td>Id</td>
                    <td> <DropDownListComponent ref={s => (paneObj = s)} className="col-sm-4" placeholder={"panel id"} dataSource={data} floatLabelType="Never" id="panel_id"/></td>
                </tr>
                <tr>
                    <td />
                    <td>
                        <button onClick={onRemove}>Remove Panel</button>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>);
}
export default App;
