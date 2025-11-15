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
        const toolbarOptions = ['PdfExport'];
        let firstGantt;
 let secondGantt;
   function  toolbarClick(args) {
        if (args.item.text === 'PDF export') {
            const firstGanttExport = this.firstGantt.pdfExport({}, true);
            firstGanttExport.then((pdfData) => {
              secondGantt.pdfExport({}, false, pdfData);
            });
        }
    };
        return (<div>
            <p><b>First Gantt:</b></p>
            <GanttComponent id='firstGantt' dataSource={[data[0]]} taskFields={taskFields} toolbar={toolbarOptions} toolbarClick={toolbarClick} allowPdfExport={true} height='280px' ref={gantt => firstGantt = gantt} treeColumnIndex={1} projectStartDate='03/31/2019' projectEndDate='04/14/2019'>
            <Inject services={[Toolbar, PdfExport, Selection]}/>
        </GanttComponent>
        <p><b>Second Gantt:</b></p>
            <GanttComponent id='secondGantt' dataSource={[data[1]]} taskFields={taskFields} toolbar={toolbarOptions} toolbarClick={toolbarClick} allowPdfExport={true} height='250px' ref={gantt => secondGantt = gantt} treeColumnIndex={1}>
            <Inject services={[Toolbar,PdfExport, Selection]}/>
        </GanttComponent>
            </div>)
};
ReactDOM.render(<App />, document.getElementById('root'));