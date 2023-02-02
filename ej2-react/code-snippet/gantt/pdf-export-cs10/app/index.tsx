


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { GanttComponent, Inject, Toolbar, PdfExport, Selection, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-gantt';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
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
         this.ganttChart.pdfExport();
        }
    };
    public pdfQueryTimelineCellInfo(args: PdfQueryTimelineCellInfoEventArgs): void {
       args.timelineCell.backgroundColor = new PdfColor(240, 248, 255);
    };
    render() {
        return <GanttComponent id='root' dataSource={data} taskFields={this.taskFields} toolbar={this.toolbarOptions} toolbarClick={this.toolbarClick.bind(this)} pdfQueryTimelineCellInfo = {this.pdfQueryTimelineCellInfo} allowPdfExport={true} height='400px' ref={gantt => this.ganttChart = gantt}>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' width='50'/>
            <ColumnDirective field='TaskName' headerText='Task Name' visible={false}/>
            <ColumnDirective field='StartDate'/>
            <ColumnDirective field='Duration'/>
            <ColumnDirective field='Progress'/>
        </ColumnsDirective>
            <Inject services={[Toolbar, PdfExport, Selection]}/>
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));



