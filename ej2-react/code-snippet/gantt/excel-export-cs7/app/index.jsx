import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttComponent, Inject, Toolbar, ToolbarItem, ExcelExport, Selection, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { ganttData } from './datasource';
function App (){
    let ganttInstance;
   const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
  };
  const toolbarOptions= ['ExcelExport'];
function toolbarClick(args) {
       if (args.item.id === 'GanttExport_excelexport') {
           ganttInstance.excelExport();
        }
    };
    function excelQueryCellInfo(args)  {
        if(args.column.field == 'Progress') {
            if(args.value > 80) {
                args.style = { backColor: '#A569BD' };
            }
            else if(args.value < 20) {
                args.style = { backColor: '#F08080' };
            }
        }
    };
    function queryTaskbarInfo(args)  {
        if (args.data.Progress > 80) {
            args.progressBarBgColor = "#6C3483";
            args.taskbarBgColor = args.taskbarBorderColor = "#A569BD";
        } else if (args.data.Progress < 20) {
            args.progressBarBgColor = "#CD5C5C";
            args.taskbarBgColor = args.taskbarBorderColor = "#F08080";
        }
    };
   function queryCellInfo(args)  {
        if(args.column.field == 'Progress') {
            if(args.data.Progress > 80) {
                args.cell.style.backgroundColor  = '#A569BD';
            }
            else if(args.data.Progress < 20) {
                args.cell.style.backgroundColor  = '#F08080';
            }
        }
    };
   const labelSettings = {
        taskLabel: '${Progress}%'
    };
    const splitterSettings = {
        columnIndex: 3
    };
        return <GanttComponent id='GanttExport' dataSource={ganttData} taskFields={taskFields} toolbar={toolbarOptions}
        toolbarClick={toolbarClick} queryCellInfo={queryCellInfo} excelQueryCellInfo={excelQueryCellInfo} queryTaskbarInfo={queryTaskbarInfo} allowExcelExport={true} height='400px' ref={gantt =>ganttInstance = gantt} treeColumnIndex={1} labelSettings={labelSettings} splitterSettings={splitterSettings} >
            <ColumnsDirective>
                <ColumnDirective field='TaskID' headerText= 'Task ID' textAlign= 'Left' width= '100' visible= {false}></ColumnDirective>
                <ColumnDirective field='TaskName' headerText= 'Task Name' width= '150'></ColumnDirective>
                <ColumnDirective field='Progress' headerText= 'Progress' width= '150'></ColumnDirective>
                <ColumnDirective field='StartDate' headerText= 'Start Date' width= '150'></ColumnDirective>
                <ColumnDirective field='Duration' headerText= 'Duration' width= '150'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Toolbar, ExcelExport, Selection]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));