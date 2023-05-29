

import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, Page, PageSettingsModel, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Column, ExcelExport, Inject, Toolbar, ToolbarItems, TreeGrid } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';v
import { sampleData } from './datasource';

function App() {
    const toolbarOptions: ToolbarItems[] = ['ExcelExport'];
    const pageSettings: PageSettingsModel = { pageSize: 7 };
    let treegrid: TreeGridComponent | null;

    const toolbarClick = (args: ClickEventArgs): void => {
        if (treegrid && args.item.text === 'Excel Export') {
            const cols: Column[] = treegrid.grid.columns as Column[];
            cols[2].visible = false;
            cols[3].visible = true;
            treegrid.excelExport();
        }
    }
    const excelExportComplete = (): void => {
        if (treegrid) {
            const cols: Column[] = treegrid.grid.columns as Column[];
            cols[3].visible = false;
            cols[2].visible = true;
        }
    }
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks'
    allowPaging={true} pageSettings={pageSettings} allowExcelExport={true} height='220'
    toolbarClick={toolbarClick} ref={g => treegrid = g}
    toolbar={toolbarOptions}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='duration'  visible={false} headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, ExcelExport]}/>
    </TreeGridComponent>
};
export default App;


