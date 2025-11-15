import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, PdfExport, Selection ,ColumnDirective, ColumnsDirective} from '@syncfusion/ej2-react-gantt';
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
        let ganttChart;
        const toolbarOptions = ['PdfExport'];
   function toolbarClick(args) {
        if (args.item.text === 'PDF export') {
        let exportProperties: PdfExportProperties = {
            showPredecessorLines: true
        };
        ganttChart.pdfExport(exportProperties);
        }
    };
       return <GanttComponent id='root' dataSource={data} taskFields={taskFields} toolbar={toolbarOptions} toolbarClick={toolbarClick} allowPdfExport={true} height='400px' ref={gantt => ganttChart = gantt}>
              <ColumnsDirective>
                    <ColumnDirective field='TaskID' width='50'></ColumnDirective>
                    <ColumnDirective field='TaskName' headerText='Job Name'></ColumnDirective>
                    <ColumnDirective field='StartDate'></ColumnDirective>
                    <ColumnDirective field='Duration' visible={false}></ColumnDirective>
                    <ColumnDirective field='Progress'></ColumnDirective>
                </ColumnsDirective>
            <Inject services={[Toolbar, PdfExport, Selection]}/>
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));