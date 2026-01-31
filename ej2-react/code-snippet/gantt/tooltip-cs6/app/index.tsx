import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, EditSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID',
  };
  const  editOptions: EditSettingsModel = {
    allowTaskbarEditing: true
  };
  function tooltipTemplate(props:any) {
    return (<div>Duration : {props.Duration}</div>)
  };
  const template: any = tooltipTemplate;
  const tooltipSettings: any = {
     editing: template
  };
        return <GanttComponent dataSource={data} taskFields={taskFields}
           tooltipSettings={tooltipSettings} editSettings={editOptions} height = '450px'>
            <Inject services={[Edit]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));