import * as React from 'react';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject,  Toolbar, ColumnChooser } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { stackedHeaderData } from './datasource';

function App() {
    function HeaderTemplate() {
        return (<div>
            <span className="e-icons e-columns" id="column-chooser-icon" style={{ position: 'relative', top: '2px' }}></span>
            <span id="column-chooser-text" style={{ position: 'relative', left: '5px' }}>Column Options</span>
        </div>);
    }
    function Template(props) {
        const parentNodes = [
            { id: 1, name: 'Order Details', hasChild: true, expanded: true },
            { id: 2, name: 'Shipping Details', hasChild: true, expanded: true },
            { id: 3, name: 'Delivery Status', hasChild: true, expanded: true },
        ];
        let treeData = [];
        if (props.columns && props.columns.length) {
            treeData = props.columns.map((column) => {
                let parentId;
                switch (column.field) {
                    case 'OrderID':
                    case 'OrderDate':
                        parentId = 1;
                        break;
                    case 'ShipCountry':
                    case 'Freight':
                        parentId = 2;
                        break;
                    case 'Status':
                        parentId = 3;
                        break;
                    default:
                        break;
                }
                return {
                    id: column.uid,
                    name: column.headerText,
                    pid: parentId,
                    isChecked: column.visible
                };
            });
            const uniquePids = [];
            treeData.forEach((item) => {
                if (!uniquePids.includes(item.pid)) {
                    uniquePids.push(item.pid);
                }
            });
            const filteredParents = parentNodes.filter((parent) => uniquePids.includes(parent.id));
            treeData.push(...filteredParents);
        }
        else {
            treeData = [];
        }
        const fields = { dataSource: treeData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
        const enableRTL = gridInstance.enableRtl ? true : false;
        React.useEffect(() => {
            if (treeObj) {
                treeObj.setProperties({ fields });
            }
        }, [props.columns]);
        return (<div>
            {props.columns && props.columns.length ? (<TreeViewComponent fields={fields} cssClass="no-border" enableRtl={enableRTL} showCheckBox={true} nodeClicked={nodeCheck.bind(this)} keyPress={nodeCheck.bind(this)} ref={(treeview) => { treeObj = treeview; }} />) : (<div className="no-record-text">No Matches Found</div>)}
        </div>);
    }
    function FooterTemplate() {
        return (<div id="columnChooserFooter">
            <ButtonComponent onClick={columnChooserSubmit}>Apply</ButtonComponent>
            <ButtonComponent onClick={columnChooserClose}>Close</ButtonComponent>
        </div>);
    }
    function nodeCheck(args) {
        let checkedNode = [args.node];
        if (args.event.target.classList.contains('e-fullrow') || args.event.key == "Enter") {
            let getNodeDetails = treeObj.getNode(args.node);
            if (getNodeDetails.isChecked == 'true') {
                treeObj.uncheckAll(checkedNode);
            }
            else {
                treeObj.checkAll(checkedNode);
            }
        }
    }

    function columnChooserClose() {
        gridInstance.columnChooserModule.hideDialog();
    }

    function columnChooserSubmit() {
        const checkedElements = [];
        const uncheckedElements = [];
        var showColumns = gridInstance.getVisibleColumns().filter(function (column) { return (column.showInColumnChooser === true); });
        showColumns = showColumns.map(function (col) { return col.headerText; });
        const treeItems = document.querySelectorAll('.e-list-item');
        treeItems.forEach(item => {
            const itemDetails = treeObj.getNode(item);
            if (!itemDetails.hasChildren) {
                if (item.getAttribute('aria-checked') === 'true') {
                    checkedElements.push(itemDetails.text);
                }
                else {
                    uncheckedElements.push(itemDetails.text);
                }
            }
        });
        showColumns = showColumns.filter((col) => !uncheckedElements.includes(col));
        checkedElements.forEach(item => {
            if (!showColumns.includes(item)) {
                showColumns.push(item);
            }
        });
        var columnsToUpdate = { visibleColumns: showColumns, hiddenColumns: uncheckedElements };
        gridInstance.columnChooserModule.changeColumnVisibility(columnsToUpdate);
    }
    let treeObj;
    let gridInstance;
    const toolbar = ['ColumnChooser'];
    const columnChooserSettings = { template: Template, headerTemplate: HeaderTemplate, footerTemplate: FooterTemplate };
    return <div className='control-pane'>
        <div className='control-section'>
            <GridComponent dataSource={stackedHeaderData} ref={(grid) => { gridInstance = grid; }} allowPaging={true} toolbar={toolbar} showColumnChooser={true} columnChooserSettings={columnChooserSettings}>
                <ColumnsDirective>
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='160' textAlign='Right' isPrimaryKey={true} showInColumnChooser={false}></ColumnDirective>
                    <ColumnDirective field='CustomerName' headerText='Name' width='100' ></ColumnDirective>
                    <ColumnDirective columns={[
                        { field: 'OrderID', headerText: 'ID', textAlign: 'Right', width: 90 },
                        { field: 'OrderDate', headerText: 'Date', textAlign: 'Right', width: 110, format: 'yMd', }
                    ]} headerText='Order Details' textAlign='Center' />
                    <ColumnDirective columns={[
                        { field: 'ShipCountry', headerText: 'Country', textAlign: 'Left', width: 115 },
                        { field: 'Freight', headerText: 'Charges', textAlign: 'Right', width: 130, format: 'C2' },
                    ]} headerText='Shipping Details' textAlign='Center' />
                    <ColumnDirective columns={[
                        { field: 'Status', headerText: 'Status', textAlign: 'Center', width: 110 },
                    ]} headerText='Delivery Status' textAlign='Center' />
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, ColumnChooser]} />
            </GridComponent>
        </div>
    </div>
};
export default App;