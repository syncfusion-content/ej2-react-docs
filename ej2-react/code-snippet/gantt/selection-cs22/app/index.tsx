import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, TaskFieldsModel, SelectionSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const selectionSettings: SelectionSettingsModel = {
        mode: 'Row',
        type: 'Multiple'
    };
    let ganttInstance: GanttComponent;
    function getSelectedRowInfo(): void {
        const selectedRecords = ganttInstance.selectionModule.getSelectedRecords();
        const selectedIndexes = ganttInstance.selectionModule.getSelectedRowIndexes();
        const selectedRows = ganttInstance.selectionModule.getSelectedRows();
        selectedRows.forEach((row: any) => row.classList.add('custom-selected-row'));
        console.log(selectedRecords);
        console.log(selectedIndexes);
    }
    function created(): void {
        ganttInstance = (document.getElementById('gantt') as any).ej2_instances[0];
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