{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, ExcelExport, ExcelExportProperties, Inject } from '@syncfusion/ej2-react-treegrid';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { sampleData } from './datasource';

function App() {

    const toolbarOptions: any = ['ExcelExport'];

    const treegrid = React.useRef(null);

    const toolbarClick = (args: ClickEventArgs): void =>{
        if (args.item.text === 'Excel Export') {
            let excelExportProperties: ExcelExportProperties = {
                fileName:"new.xlsx"
            };
            (treegrid.current as any).excelExport(excelExportProperties);
        }
    }

    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' allowPaging={true} pageSettings={{ pageSize: 7 }} allowExcelExport={true} height='220'
    toolbarClick={toolbarClick} ref={treegrid}
    toolbar={toolbarOptions}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'></ColumnDirective>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, ExcelExport]}/>
    </TreeGridComponent>
};
export default App;


{% endraw %}