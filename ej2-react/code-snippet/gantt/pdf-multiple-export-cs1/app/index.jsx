import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.toolbarOptions = ['PdfExport'];
    }
    toolbarClick(args) {
        if (args.item.text === 'Pdf export') {
            const firstGanttExport = this.firstGantt.pdfExport({}, true);
            firstGanttExport.then((pdfData) => {
                this.secondGantt.pdfExport({}, false, pdfData);
            });
        }
    }
    ;
    render() {
        return (<div>
            <p><b>First Gantt:</b></p>
            <GanttComponent id='firstGantt' dataSource={[data[0]]} taskFields={this.taskFields} toolbar={this.toolbarOptions} toolbarClick={this.toolbarClick.bind(this)} allowPdfExport={true} height='280px' ref={gantt => this.firstGantt = gantt} treeColumnIndex={1} projectStartDate='03/31/2019' projectEndDate='04/14/2019'>
            <Inject services={[Toolbar, PdfExport, Selection]}/>
        </GanttComponent>
        <p><b>Second Gantt:</b></p>
            <GanttComponent id='secondGantt' dataSource={[data[1]]} taskFields={this.taskFields} toolbar={this.toolbarOptions} toolbarClick={this.toolbarClick.bind(this)} allowPdfExport={true} height='250px' ref={gantt => this.secondGantt = gantt} treeColumnIndex={1}>
            <Inject services={[Toolbar, PdfExport, Selection]}/>
        </GanttComponent>
            </div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
