import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttComponent, Inject, Toolbar, ToolbarItem, ExcelExport, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function  App(){
   let  ganttInstance: any;
    const  taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
  };
  const  toolbarOptions: ToolbarItem[] = ['ExcelExport'];
 function toolbarClick(args: ClickEventArgs): void {
       if (args.item.id === 'GanttExport_excelexport') {
           const excelExportProperties: ExcelExportProperties = {
                theme:
                        {
                            header: { fontName: 'Segoe UI', fontColor: '#666666' },
                            record: { fontName: 'Segoe UI', fontColor: '#666666' }
                        }
            };
           ganttInstance.excelExport(excelExportProperties);
        }
    };
        return <GanttComponent id='GanttExport' dataSource={data} taskFields={taskFields} toolbar={toolbarOptions}
        toolbarClick={toolbarClick} allowExcelExport={true} height='400px' ref={gantt => ganttInstance = gantt} treeColumnIndex={1}>
            <Inject services={[Toolbar, ExcelExport, Selection]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));