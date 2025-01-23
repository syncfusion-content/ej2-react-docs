import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Edit, Selection, Toolbar } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
        const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID'
        };
        const editOptions = {
            allowEditing: true,
            mode: 'Auto'
        };
        const toolbarOptions = ['Indent', 'Outdent'];
    let ganttInstance;
   function indent() {
       ganttInstance.indent();
    };
   function outdent() {
        ganttInstance.outdent();
    };
   function toolbarClick(args) {
        if (args.item.text === 'Indent') {
            ganttInstance.indent();
        }
        if (args.item.text === 'Outdent') {
            ganttInstance.outdent();
        }
    };

        return (<div>
        <ButtonComponent onClick={indent}>Indent</ButtonComponent>
        <ButtonComponent onClick={outdent}>Outdent</ButtonComponent>
        <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true} editSettings={editOptions} toolbar={toolbarOptions} toolbarClick={toolbarClick} height='450px' ref={gantt => ganttInstance = gantt}>
            <Inject services={[Edit, Selection, Toolbar]}/>
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));