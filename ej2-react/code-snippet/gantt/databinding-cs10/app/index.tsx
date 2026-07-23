import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, SplitterSettingsModel } from '@syncfusion/ej2-react-gantt';

function App() {
    const taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentId',
    };
    const splitterSettings: SplitterSettingsModel = {
        columnIndex: 3
    };
    const emptyRecordTemplate = () => {
        return (
            <span>There is no data available to display at the moment.</span>
        );
    };
    
    return (<div className="control-section">
        <GanttComponent dataSource={[]} taskFields={taskFields} emptyRecordTemplate={emptyRecordTemplate} height='450px' splitterSettings={splitterSettings}>
        </GanttComponent>
    </div>);
};
ReactDOM.render(<App />, document.getElementById('root'));
