import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
    settings = {
        mode: 'Row',
        type: 'Multiple'
    };
    dataBound(args) {
        var rowIndexes = [];
        this.ganttInstance.treeGrid.grid.dataSource.forEach((data, index) => {
            if (data.TaskID === 3 || data.TaskID === 4) {
                rowIndexes.push(index);
            }
        });
        this.ganttInstance.selectRows(rowIndexes);
    }
    render() {
        return <GanttComponent dataSource={data} allowSelection={true} taskFields={this.taskFields} selectionSettings={this.settings} dataBound={this.dataBound.bind(this)} height='450px' ref={gantt => this.ganttInstance = gantt}>
        <Inject services={[Selection]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
