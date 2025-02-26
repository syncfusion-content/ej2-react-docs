import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, PdfExport, Selection, ColumnDirective, ColumnsDirective} from '@syncfusion/ej2-react-gantt';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { data } from './datasource';
function App() {
        const taskFields = {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID:'ParentId'
        };
        const toolbarOptions = ['PdfExport'];
    let ganttChart;
  function  toolbarClick(args) {
        if (args.item.text === 'PDF export') {
            ganttChart.pdfExport();
        }
    };
   function pdfQueryCellInfo(args) {
        if(args.column.field == 'Progress'){
            if(args.value < 50) {
                args.style.backgroundColor = new PdfColor(240, 128, 128);
            } else {
                args.style.backgroundColor = new PdfColor(165, 105, 189);
            }
        }
      }
        return <GanttComponent id='root' dataSource={data} taskFields={taskFields} toolbar={toolbarOptions} toolbarClick={toolbarClick} pdfQueryCellInfo = {pdfQueryCellInfo} allowPdfExport={true} height='400px' ref={gantt =>ganttChart = gantt}>
        <ColumnsDirective>
            <ColumnDirective field='TaskId'/>
            <ColumnDirective field='TaskName' headerText='Task Name' visible={false}/>
            <ColumnDirective field='StartDate'/>
            <ColumnDirective field='Duration'/>
            <ColumnDirective field='Progress'/>
        </ColumnsDirective>
            <Inject services={[Toolbar, PdfExport, Selection]}/>
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));
