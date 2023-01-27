import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, PdfExport, Selection, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-gantt';
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
            let exportProperties = {
                includeHiddenColumn: true
            };
        }
        this.ganttChart.pdfExport(exportProperties);
    }
    ;
    render() {
        return <GanttComponent id='root' dataSource={data} taskFields={this.taskFields} toolbar={this.toolbarOptions} toolbarClick={this.toolbarClick.bind(this)} allowPdfExport={true} height='400px' ref={gantt => this.ganttChart = gantt}>
         <ColumnsDirective>
                    <ColumnDirective field='TaskID' width='50'/>
                    <ColumnDirective field='TaskName' headerText='Task Name' visible={false}/>
                    <ColumnDirective field='StartDate'/>
                    <ColumnDirective field='Duration'/>
                    <ColumnDirective field='Progress'/>
                </ColumnsDirective>
            <Inject services={[Toolbar, PdfExport, Selection]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
