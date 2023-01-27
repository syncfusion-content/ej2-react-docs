import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data, changeData } from './datasource';
class App extends React.Component {
    ganttInstance;
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    };
    toolbarOptions = ['ZoomToFit'];
    clickHandler() {
        this.ganttInstance.dataSource = changeData;
    }
    ;
    dataBound(args) {
        this.ganttInstance.fitToProject();
    }
    ;
    render() {
        return (<div>
        <ButtonComponent onClick={this.clickHandler.bind(this)}>Change Data</ButtonComponent>
        <GanttComponent dataSource={data} taskFields={this.taskFields} dataBound={this.dataBound.bind(this)} toolbar={this.toolbarOptions} height='450px' ref={gantt => this.ganttInstance = gantt}>
           <Inject services={[Toolbar]}/>
        </GanttComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
