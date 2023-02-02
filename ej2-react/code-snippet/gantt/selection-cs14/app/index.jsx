import * as React from 'react';
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
    rowSelected(args) {
        let selectedrowindex = this.ganttInstance.selectionModule.getSelectedRowIndexes(); // get the selected row indexes.
        alert(selectedrowindex); // to alert the selected row indexes.
        let selectedrecords = this.ganttInstance.selectionModule.getSelectedRecords(); // get the selected records.
        console.log(selectedrecords); // to print the selected records in console window.
    }
    render() {
        return <GanttComponent dataSource={data} allowSelection={true} taskFields={this.taskFields} selectionSettings={this.settings} rowSelected={this.rowSelected.bind(this)} height='450px' ref={gantt => this.ganttInstance = gantt >
                <Inject services={[Selection]}/>} GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


        </>;
    }
}
