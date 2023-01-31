

import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';
import { ContextMenuItemModel } from '@syncfusion/ej2-grids';
import { BeforeOpenCloseMenuEventArgs, MenuEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, Page, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { ContextMenu,  Inject, PageSettingsModel, TreeGrid } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';

function App() {
    let treegrid: TreeGridComponent | null;
    const pageSettings: PageSettingsModel = { pageSize: 7 };
    const contextMenuItems: ContextMenuItemModel[] = [
        {text: 'Collapse the Row', target: '.e-content', id: 'collapserow'},
        {text: 'Expand the Row', target: '.e-content', id: 'expandrow'}
    ];
    const contextMenuClick = (args: MenuEventArgs): void => {
        if (treegrid) {
            treegrid.getColumnByField('taskID');
            if (args.item.id === 'collapserow') {
                treegrid.collapseRow(treegrid.getSelectedRows()[0] as HTMLTableRowElement,
                treegrid.getSelectedRecords()[0]);
            } else {
                treegrid.expandRow(treegrid.getSelectedRows()[0] as HTMLTableRowElement,
                treegrid.getSelectedRecords()[0]);
            }
        }
    }

    const contextMenuOpen = (args: BeforeOpenCloseMenuEventArgs): void => {
        const elem: HTMLElement = args.event.target as HTMLElement;
        const uid: string = (elem.closest('.e-row') as HTMLElement).getAttribute('data-uid') as string;
        if (treegrid) {
            if (isNullOrUndefined(getValue('hasChildRecords',
            treegrid.grid.getRowObjectFromUID(uid) .data))) {
                args.cancel = true;
            } else {
                const flag: boolean = getValue('expanded', treegrid.grid.getRowObjectFromUID(uid).data);
                let val: string = flag ? 'none' : 'block';
                document.querySelectorAll('li#expandrow')[0].setAttribute('style', 'display: ' + val + ';');
                val = !flag ? 'none' : 'block';
                document.querySelectorAll('li#collapserow')[0].setAttribute('style', 'display: ' + val + ';');
            }
        }
    }

    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks'
    allowPaging={true} pageSettings={pageSettings} allowSorting={true} allowResizing={true}
    contextMenuItems={contextMenuItems} contextMenuClick={contextMenuClick}
    ref={g => treegrid = g} contextMenuOpen={contextMenuOpen}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[ContextMenu, Page]}/>
    </TreeGridComponent>
};
export default App;


