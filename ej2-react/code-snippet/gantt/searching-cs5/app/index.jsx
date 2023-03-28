import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Filter } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
    const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        let ganttInstance;
        const searchSettings = {
            fields: ['TaskName'], operator: 'contains', key: 'Perform', ignoreCase: true
        };
    function clickHandler() {
        ganttInstance.searchSettings.key = "";
    }
 return (<div>
        <ButtonComponent onClick={clickHandler}>Clear Search</ButtonComponent>
        <GanttComponent dataSource={data} ref={gantt => ganttInstance = gantt} taskFields={taskFields} allowFiltering={true} height='450px' searchSettings={searchSettings}>
        <Inject services={[Filter]}/>
        </GanttComponent></div>);
};
ReactDOM.render(<App />, document.getElementById('root'));