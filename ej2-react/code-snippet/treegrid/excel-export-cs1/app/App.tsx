

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
    let treegrid: TreeGridComponent | null;

    const toolbarClick = (args: ClickEventArgs): void => {
        if (treegrid && args.item.text === 'Excel Export') {
            const excelExportProperties: ExcelExportProperties = {
                footer: {
                    footerRows: 4,
                    rows: [
                        { cells: [{ colSpan: 4, value: "Thank you for your business!", style: { hAlign: 'Center', bold: true } }] },
                        { cells: [{ colSpan: 4, value: "!Visit Again!", style: { hAlign: 'Center', bold: true } }] }
                    ]
                },
                header: {
                    headerRows: 7,
                    rows: [
                        { cells: [{ colSpan: 4, value: "Northwind Traders", style: { fontColor: '#C67878', fontSize: 20, hAlign: 'Center', bold: true, } }] },
                        { cells: [{ colSpan: 4, value: "2501 Aerial Center Parkway", style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true, } }] },
                        { cells: [{ colSpan: 4, value: "Suite 200 Morrisville, NC 27560 USA", style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true, } }] },
                        { cells: [{ colSpan: 4, value: "Tel +1 888.936.8638 Fax +1 919.573.0306", style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true, } }] },
                        { cells: [{ colSpan: 4, hyperlink: { target: 'https://www.northwind.com/', displayText: 'www.northwind.com' }, style: { hAlign: 'Center' } }] },
                        { cells: [{ colSpan: 4, hyperlink: { target: 'mailto:support@northwind.com' }, style: { hAlign: 'Center' } }] },
                    ]
                }
            };
            treegrid.excelExport(excelExportProperties);
        }
    }
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks'
        allowPaging={true} pageSettings={pageSettings} allowExcelExport={true} height='220'
        toolbarClick={toolbarClick} ref={g => treegrid = g} toolbar={toolbarOptions}>
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


