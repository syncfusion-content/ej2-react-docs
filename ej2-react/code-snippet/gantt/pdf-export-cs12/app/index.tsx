import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-react-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
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
        let ganttChart;
        const toolbarOptions = ['PdfExport'];
    toolbarClick(args) {
        if (args.item.text === 'Pdf export') {
        let exportProperties: PdfExportProperties = {
           theme:"Fabric"
        };
        ganttChart.pdfExport(exportProperties);
        }
    };
        return <GanttComponent id='root' dataSource={data} taskFields={taskFields} toolbar={toolbarOptions} toolbarClick={toolbarClick} allowPdfExport={true} height='400px' ref={gantt => ganttChart = gantt}>
            <Inject services={[Toolbar, PdfExport, Selection]}/>
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));
