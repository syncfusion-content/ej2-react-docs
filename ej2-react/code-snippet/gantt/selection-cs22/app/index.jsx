import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const selectionSettings = {
        mode: 'Row',
        type: 'Multiple'
    };
    let ganttInstance;
    function getSelectedRowInfo() {
        const selectedRecords = ganttInstance.selectionModule.getSelectedRecords();
        const selectedIndexes = ganttInstance.selectionModule.getSelectedRowIndexes();
        const selectedRows = ganttInstance.selectionModule.getSelectedRows();
        selectedRows.forEach((row) => row.classList.add('custom-selected-row'));
        console.log(selectedRecords);
        console.log(selectedIndexes);
    }
    function created() {
        ganttInstance = document.getElementById('gantt').ej2_instances[0];
    }
    return (
        <div>
            <div className="button-container">
                <button className="action-button" onClick={getSelectedRowInfo}>Show Selected Tasks</button>
            </div>
            <GanttComponent
                id="gantt"
                height="430px"
                dataSource={data}
                taskFields={taskFields}
                selectionSettings={selectionSettings}
                created={created}>
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));