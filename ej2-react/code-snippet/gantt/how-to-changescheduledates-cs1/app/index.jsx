import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
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

    const clickHandler = () => {
        if (ganttRef.current) {
            ganttRef.current.updateProjectDates(
                new Date('01/10/2019'),
                new Date('06/20/2019'),
                true
            );
        }
    };

    return (
        <div>
            <ButtonComponent onClick={clickHandler}>
                Update Schedule Dates
            </ButtonComponent>
            <GanttComponent
                dataSource={taskData}
                taskFields={taskFields}
                height="450px"
                ref={ganttRef}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
