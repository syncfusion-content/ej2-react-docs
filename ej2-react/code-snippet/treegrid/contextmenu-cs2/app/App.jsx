import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, Page, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { ContextMenu, Inject } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';
function App() {
    let treegrid;
    const pageSettings = { pageSize: 7 };
    const contextMenuItems = [
        { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
        { text: 'Expand the Row', target: '.e-content', id: 'expandrow' }
    ];
    const contextMenuClick = (args) => {
        if (treegrid) {
            treegrid.getColumnByField('taskID');
            if (args.item.id === 'collapserow') {
                treegrid.collapseRow(treegrid.getSelectedRows()[0], treegrid.getSelectedRecords()[0]);
            }
            else {
                treegrid.expandRow(treegrid.getSelectedRows()[0], treegrid.getSelectedRecords()[0]);
            }
        }
    };
    const contextMenuOpen = (args) => {
        const elem = args.event.target;
        const uid = elem.closest('.e-row').getAttribute('data-uid');
        if (treegrid) {
            if (isNullOrUndefined(getValue('hasChildRecords', treegrid.grid.getRowObjectFromUID(uid).data))) {
                args.cancel = true;
            }
            else {
                const flag = getValue('expanded', treegrid.grid.getRowObjectFromUID(uid).data);
                let val = flag ? 'none' : 'block';
                document.querySelectorAll('li#expandrow')[0].setAttribute('style', 'display: ' + val + ';');
                val = !flag ? 'none' : 'block';
                document.querySelectorAll('li#collapserow')[0].setAttribute('style', 'display: ' + val + ';');
            }
        }
    };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' allowPaging={true} pageSettings={pageSettings} allowSorting={true} allowResizing={true} contextMenuItems={contextMenuItems} contextMenuClick={contextMenuClick} ref={g => treegrid = g} contextMenuOpen={contextMenuOpen}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[ContextMenu, Page]}/>
    </TreeGridComponent>;
}
;
export default App;
