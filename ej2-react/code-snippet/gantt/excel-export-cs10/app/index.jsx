import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    ganttInstance;
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
    toolbarOptions = ['ExcelExport', 'CsvExport'];
    toolbarClick(args) {
        if (args.item.id === 'GanttExport_excelexport') {
            const excelExportProperties = {
                fileName: "Gantt.xlsx"
            };
            this.ganttInstance.excelExport(excelExportProperties);
        }
        else if (args.item.id === 'GanttExport_csvexport') {
            const excelExportProperties = {
                fileName: "Gantt.csv"
            };
            this.ganttInstance.csvExport(excelExportProperties);
        }
    }
    ;
    render() {
        return <GanttComponent id='GanttExport' dataSource={data} taskFields={this.taskFields} toolbar={this.toolbarOptions} toolbarClick={this.toolbarClick.bind(this)} allowExcelExport={true} height='400px' ref={gantt => this.ganttInstance = gantt} treeColumnIndex={1}>
            <Inject services={[Toolbar, ExcelExport, Selection]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
