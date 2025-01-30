import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Filter } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  let ganttInstance:any;
  let textInput:any;
 const inputStyle={
         width:"250px"
  };
 function clickHandler(){
     ganttInstance.search(textInput.value);
}
     return(<div>
        <div className='e-float-input' style={inputStyle}>
            <input type="text" className="searchtext" ref={(input) => textInput = input}   />
            <span className="e-float-line"></span>
            <label className="e-float-text">Search text</label>
        </div>
        <ButtonComponent onClick= { clickHandler}>Search</ButtonComponent>
        <GanttComponent dataSource={data}  ref={gantt =>ganttInstance = gantt}  taskFields={taskFields}
         allowFiltering={true} height = '450px'>
        <Inject services={[Filter]} />
        </GanttComponent></div>)
    };
ReactDOM.render(<App />, document.getElementById('root'));