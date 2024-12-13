import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { GanttComponent, Inject, Toolbar, ToolbarItem, EditSettingsModel, PdfQueryTaskbarInfoEventArgs, PdfExport, Edit, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { ganttData } from './datasource';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
function App(){
    let ganttChart: any;
    const  taskFields: any = {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        child: "subtasks",
        segments: "Segments"
    };
    const editOptions: EditSettingsModel = {
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    const toolbarOptions: ToolbarItem[] = ['PdfExport'];
    function toolbarClick(args: ClickEventArgs): void {
        if (args.item.text === 'PDF export') {
            ganttChart.pdfExport();
        }
    };
    function queryTaskbarInfo(args: any) {
        if (args.data.taskData.Segments) {
            var segmentIndex = args.taskbarElement.dataset.segmentIndex;
            if (Number(segmentIndex) === 1) {
                args.taskbarBgColor = 'red';
                args.taskbarBorderColor = 'black';
                args.progressBarBgColor = "green";
            }
        }
    };
    function pdfQueryTaskbarInfo(args: PdfQueryTaskbarInfoEventArgs) {
        if (args.taskbar.taskSegmentStyles) {
            args.taskbar.taskSegmentStyles[1].taskColor = new PdfColor(255, 0, 0);
            args.taskbar.taskSegmentStyles[1].progressColor = new PdfColor(0, 128, 0);
            args.taskbar.taskSegmentStyles[1].taskBorderColor = new PdfColor(0, 0, 0);
        }
    };
        return <GanttComponent id='root' dataSource={ganttData} taskFields={taskFields}
        toolbar={toolbarOptions} editSettings={editOptions} pdfQueryTaskbarInfo= {pdfQueryTaskbarInfo}
        toolbarClick={toolbarClick} allowPdfExport={true} gridLines='Both' height='400px' queryTaskbarInfo={queryTaskbarInfo} 
        ref={gantt => ganttChart = gantt}>
             <ColumnsDirective>
                <ColumnDirective field='TaskID' headerText= 'Task ID'></ColumnDirective>
                <ColumnDirective field='TaskName' headerText= 'Task Name'></ColumnDirective>
                <ColumnDirective field='StartDate' headerText= 'Start Date'></ColumnDirective>
                <ColumnDirective field='EndDate' headerText= 'End Date'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Toolbar, PdfExport, Edit]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));