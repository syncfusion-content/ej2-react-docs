import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Filter } from '@syncfusion/ej2-react-gantt';
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
    ganttInstance;
    textInput;
    inputStyle = {
        width: "250px"
    };
    clickHandler() {
        this.ganttInstance.search(this.textInput.value);
    }
    render() {
        return (<div>
        <div className='e-float-input' style={this.inputStyle}>
            <input type="text" className="searchtext" ref={(input) => this.textInput = input}/>
            <span className="e-float-line"></span>
            <label className="e-float-text">Search text</label>
        </div>
        <ButtonComponent onClick={this.clickHandler.bind(this)}>Search</ButtonComponent>
        <GanttComponent dataSource={data} ref={gantt => this.ganttInstance = gantt} taskFields={this.taskFields} allowFiltering={true} height='450px'>
        <Inject services={[Filter]}/>
        </GanttComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
