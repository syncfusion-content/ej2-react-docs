import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    ganttInstance;
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
    splitterSettings = {
        columnIndex: 5
    };
    show() {
        /** show by HeaderText */
        this.ganttInstance.showColumn(['Duration']);
    }
    hide() {
        /** hide by HeaderText */
        this.ganttInstance.hideColumn(['Duration']);
    }
    render() {
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        return (<div>
        <ButtonComponent onClick={this.show}>Show</ButtonComponent>
        <ButtonComponent onClick={this.hide}>Hide</ButtonComponent>
        <GanttComponent dataSource={data} taskFields={this.taskFields} splitterSettings={this.splitterSettings} height='450px' ref={gantt => this.ganttInstance = gantt}>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' width='100'></ColumnDirective>
            <ColumnDirective field='TaskName' headerText='Task Name'></ColumnDirective>
            <ColumnDirective field='StartDate'></ColumnDirective>
            <ColumnDirective field='Duration' headerText='Duration'></ColumnDirective>
            <ColumnDirective field='Progress'></ColumnDirective>
        </ColumnsDirective>
        </GanttComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
