import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import {
    GanttComponent,
    ColumnsDirective,
    ColumnDirective,
    Inject,
    Edit,
} from '@syncfusion/ej2-react-gantt';
import { ganttData } from './datasource';

function App() {
    let ganttObj = null;
    const taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const editSettings = {
        allowEditing: true
    };
    const splitterSettings = {
        columnIndex : 3
    };
    function clickHandler() {
        let data = {
            TaskID: 3,
            Custom: 'Dynamically custom column value updated'
        };
        ganttObj.updateRecordByID(data);
    }

    return (<div>
        <ButtonComponent onClick={clickHandler}>Update Custom Column</ButtonComponent>
        <GanttComponent
            ref={(gantt) => (ganttObj = gantt)}
            height="450px"
            dataSource={ganttData}
            taskFields={taskSettings}
            editSettings={editSettings}
            splitterSettings={splitterSettings}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" width={80} />
                <ColumnDirective field="TaskName" headerText="TaskName" width={180} />
                <ColumnDirective field="Custom" headerText="Custom" width={220} />
                <ColumnDirective field="StartDate" headerText="Start Date" width={110} />
                <ColumnDirective field="Duration" headerText="Duration" width={100} />
                <ColumnDirective field="Progress" headerText="Progress" width={100} />
            </ColumnsDirective>

            <Inject services={[Edit]} />
        </GanttComponent> </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));