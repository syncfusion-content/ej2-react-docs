import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Filter } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.searchSettings = {
            fields: ['TaskName'], operator: 'contains', key: 'Perform', ignoreCase: true
        };
    }
    clickHandler() {
        this.ganttInstance.searchSettings.key = "";
    }
    render() {
        return (<div>
        <ButtonComponent onClick={this.clickHandler.bind(this)}>Clear Search</ButtonComponent>
        <GanttComponent dataSource={data} ref={gantt => this.ganttInstance = gantt} taskFields={this.taskFields} allowFiltering={true} height='450px' searchSettings={this.searchSettings}>
        <Inject services={[Filter]}/>
        </GanttComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
