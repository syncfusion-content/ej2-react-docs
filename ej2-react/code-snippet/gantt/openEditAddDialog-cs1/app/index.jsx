import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Edit, Selection } from '@syncfusion/ej2-react-gantt';
import { taskData } from './datasource';

const App = () => {
    const ganttRef = useRef(null);

    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentId'
    };

    const editOptions = {
        allowEditing: true,
        allowAdding: true,
    };

    const openAddDialog = () => {
        ganttRef.current.editModule.dialogModule.openAddDialog();
    };

    const openEditDialog = () => {
        ganttRef.current.editModule.dialogModule.openEditDialog();
    };

    return (
        <div>
            <ButtonComponent onClick={openAddDialog}>Open Add Dialog</ButtonComponent>
            <ButtonComponent onClick={openEditDialog}>Open Edit Dialog</ButtonComponent>
            <GanttComponent
                dataSource={taskData}
                ref={ganttRef}
                taskFields={taskFields}
                allowSelection={true}
                editSettings={editOptions}
                height="450px"
            >
                <Inject services={[Edit, Selection]} />
            </GanttComponent>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
