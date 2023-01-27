import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { GanttComponent, Inject, Toolbar } from '@syncfusion/ej2-react-gantt';
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
    toolbarOptions = [{ type: 'Input', template: new NumericTextBox({ format: 'c2', value: 1 }) }];
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} toolbar={this.toolbarOptions} height='400px'>
            <Inject services={[Toolbar]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
