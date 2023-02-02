import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    firstGantt;
    secondGantt;
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
    toolbarOptions = ['ExcelExport'];
    toolbarClick(args) {
        if (args.item.id === 'FirstGantt_excelexport') {
            const appendExcelExportProperties = {
                multipleExport: { type: 'NewSheet' }
            };
            const firstGanttExport = this.firstGantt.excelExport(appendExcelExportProperties, true);
            firstGanttExport.then((fData) => {
                this.secondGantt.excelExport(appendExcelExportProperties, false, fData);
            });
        }
    }
    ;
    render() {
        return (<div>
            <p><b>First Gantt:</b></p>
            <GanttComponent id='FirstGantt' dataSource={[data[0]]} taskFields={this.taskFields} toolbar={this.toolbarOptions} toolbarClick={this.toolbarClick.bind(this)} allowExcelExport={true} height='280px' ref={gantt => this.firstGantt = gantt} treeColumnIndex={1} projectStartDate='03/31/2019' projectEndDate='04/14/2019'>
            <Inject services={[Toolbar, ExcelExport, Selection]}/>
        </GanttComponent>
        <p><b>Second Gantt:</b></p>
            <GanttComponent id='SecondGantt' dataSource={[data[1]]} taskFields={this.taskFields} allowExcelExport={true} height='250px' ref={gantt => this.secondGantt = gantt} treeColumnIndex={1}>
            <Inject services={[ExcelExport, Selection]}/>
        </GanttComponent>
            </div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
