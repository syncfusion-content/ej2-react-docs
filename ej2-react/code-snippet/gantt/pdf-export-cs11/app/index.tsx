import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, PdfExport, Selection, ColumnDirective, ColumnsDirective, PdfQueryCellInfoEventArgs } from '@syncfusion/ej2-react-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { data } from './datasource';
function App () {
        const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
       const toolbarOptions = ['PdfExport'];
    let ganttChart:any;
   function toolbarClick(args) {
        if (args.item.text === 'PDF export') {
            ganttChart.pdfExport();
        }
    };
    function pdfQueryTaskbarInfo(args): void {
        if(args.data.Progress < 50 && !args.data.hasChildRecords) {
            args.taskbar.progressColor = new PdfColor(205, 92, 92);
            args.taskbar.taskColor =  args.taskbar.taskBorderColor = new PdfColor(240, 128, 128);
        }
      }
        return <GanttComponent id='root' dataSource={data} taskFields={taskFields} toolbar={toolbarOptions} toolbarClick={toolbarClick} pdfQueryTaskbarInfo = {pdfQueryTaskbarInfo} allowPdfExport={true} height='400px' ref={gantt => ganttChart = gantt}>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' width='50'/>
            <ColumnDirective field='TaskName' headerText='Task Name' visible={false}/>
            <ColumnDirective field='StartDate'/>
            <ColumnDirective field='Duration'/>
            <ColumnDirective field='Progress'/>
        </ColumnsDirective>
            <Inject services={[Toolbar, PdfExport, Selection]}/>
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));