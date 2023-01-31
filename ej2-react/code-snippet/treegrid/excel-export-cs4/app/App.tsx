

import { ExcelExportProperties } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, Page, PageSettingsModel, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { ExcelExport, Inject, Toolbar, ToolbarItems, TreeGrid } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';

function App() {
    const toolbarOptions: ToolbarItems[] = ['ExcelExport'];
    const pageSettings: PageSettingsModel = { pageSize: 7 };
    const treegrid = React.useRef(null);

    const toolbarClick = (args: ClickEventArgs): void => {
        if (treegrid && args.item.text === 'Excel Export') {
            const excelExportProperties: ExcelExportProperties = {
                includeHiddenColumn: true
            };
            (treegrid.current as any).excelExport(excelExportProperties);
        }
    }

    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks'
        allowPaging={true} pageSettings={pageSettings} allowExcelExport={true} height='220'
        toolbarClick={toolbarClick} ref={g => treegrid = g} toolbar={toolbarOptions}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
            <ColumnDirective field='duration'  visible={false} headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, ExcelExport]}/>
    </TreeGridComponent>
};
export default App;


