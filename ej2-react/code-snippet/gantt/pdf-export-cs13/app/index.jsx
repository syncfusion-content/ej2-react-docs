import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-react-gantt';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { PdfPaddings } from '@syncfusion/ej2-gantt/src/export/pdf-base/pdf-borders';
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
                fontFamily: 1,
                columnHeader: {
                    backgroundColor: new PdfColor(179, 219, 255)
                },
                taskbar: {
                    taskColor: new PdfColor(240, 128, 128),
                    taskBorderColor: new PdfColor(240, 128, 128),
                    progressColor: new PdfColor(205, 92, 92),
                },
                connectorLineColor: new PdfColor(128, 0, 0),
                footer: {
                    backgroundColor: new PdfColor(205, 92, 92)
                },
                timeline: {
                    backgroundColor: new PdfColor(179, 219, 255),
                    padding: new PdfPaddings(5, 2, 0, 0),
                },
                label: {
                    fontColor: new PdfColor(128, 0, 0),
                },
                cell: {
                    backgroundColor: new PdfColor(240, 248, 255),
                    fontColor: new PdfColor(0, 0, 0),
                    borderColor: new PdfColor(179, 219, 255),
                },
            };
        }
        this.ganttChart.pdfExport(exportProperties);
    }
    ;
    render() {
        return <GanttComponent id='root' dataSource={data} taskFields={this.taskFields} toolbar={this.toolbarOptions} toolbarClick={this.toolbarClick.bind(this)} allowPdfExport={true} height='400px' ref={gantt => this.ganttChart = gantt}>
            <Inject services={[Toolbar, PdfExport, Selection]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
