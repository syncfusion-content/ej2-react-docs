import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    const taskFields= {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
   child: 'subtasks'
  };
  const  editOptions = {
    allowTaskbarEditing: true
  };
  function tooltipTemplate(props) {
    return (<div>Duration : {props.duration}</div>)
  };
  const template = tooltipTemplate;
  const tooltipSettings = {
     editing: template
  };
        return <GanttComponent dataSource={data} taskFields={taskFields}
           tooltipSettings={tooltipSettings} editSettings={editOptions} height = '450px'>
            <Inject services={[Edit]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));