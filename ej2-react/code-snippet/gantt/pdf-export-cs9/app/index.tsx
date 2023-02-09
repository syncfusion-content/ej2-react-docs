import * as React from 'react';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, PdfExport, Selection, ColumnDirective, ColumnsDirective, PdfQueryCellInfoEventArgs } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
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
  function  toolbarClick(args) {
        if (args.item.text === 'Pdf export') {
            ganttChart.pdfExport();
        }
    };
   function pdfQueryCellInfo(args: PdfQueryCellInfoEventArgs): void {
        if(args.column.field == 'Progress'){
            if(args.value < 50) {
                args.style = {backgroundColor: '#F08080'};
            } else {
                args.style = {backgroundColor: '#A569BD'};
            }
        }
      }
        return <GanttComponent id='root' dataSource={data} taskFields={taskFields} toolbar={toolbarOptions} toolbarClick={toolbarClick} pdfQueryCellInfo = {pdfQueryCellInfo} allowPdfExport={true} height='400px' ref={gantt =>ganttChart = gantt}>
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
