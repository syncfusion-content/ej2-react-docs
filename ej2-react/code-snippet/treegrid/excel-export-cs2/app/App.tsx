

import { getValue } from '@syncfusion/ej2-base';
import { Column, ExcelQueryCellInfoEventArgs, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, Page, PageSettingsModel, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { ExcelExport, Inject, Toolbar, ToolbarItems, TreeGrid } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';

function App() {
    const toolbarOptions: ToolbarItems[] = ['ExcelExport'];
    const pageSettings: PageSettingsModel = { pageSize: 7 };
    let treegrid: TreeGridComponent;
    const toolbarClick = (args: ClickEventArgs): void => {
        if (treegrid && args.item.text === 'Excel Export') {
            (treegrid as any).excelExport();
        }
    }
    const excelQueryCellInfo = (args: ExcelQueryCellInfoEventArgs): void => {
        if (args.column.field === 'duration') {
            if (getValue('data.duration', args) === 0) {
                args.style = {backColor: '#336c12'};
            }
            else if (getValue('data.duration', args) < 3) {
                args.style = {backColor: '#7b2b1d'};
            }
        }
    }

    const queryCellInfo = (args: QueryCellInfoEventArgs): void => {
        if ((args.column as Column).field === 'duration') {
            if (getValue('data.duration', args) === 0) {
                (args.cell as HTMLElement).style.background= '#336c12';
            } else if (getValue('data.duration', args) < 3) {
                (args.cell as HTMLElement).style.background= '#7b2b1d';
            }
        }
    }
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks'
        allowPaging={true} pageSettings={pageSettings} allowExcelExport={true} height='220'
        toolbarClick={toolbarClick} ref={g => treegrid = g} toolbar={toolbarOptions} queryCellInfo={queryCellInfo} excelQueryCellInfo={excelQueryCellInfo}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, ExcelExport]}/>
    </TreeGridComponent>
};
export default App;


