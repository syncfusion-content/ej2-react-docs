{% raw %}
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Week, Month, Agenda, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { timelineResourceData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
    const data = extend([], timelineResourceData, null, true);
    const projectData = [
        { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
        { text: 'PROJECT 2', id: 2, color: '#56ca85' },
        { text: 'PROJECT 3', id: 3, color: '#df5286' },
    ];
    const categoryData = [
        { text: 'Development', id: 1, color: '#1aaa55' },
        { text: 'Testing', id: 2, color: '#7fa900' }
    ];
    return (<ScheduleComponent width='100%' height='550px' currentView='Month' selectedDate={new Date(2018, 3, 4)} eventSettings={{ dataSource: data }} group={{ byGroupID: false, resources: ['Projects', 'Categories'] }}>
    <ViewsDirective>
      <ViewDirective option='Week'/>
      <ViewDirective option='Month'/>
      <ViewDirective option='Agenda'/>
    </ViewsDirective>
    <ResourcesDirective>
      <ResourceDirective field='ProjectId' title='Choose Project' name='Projects' allowMultiple={false} dataSource={projectData} textField='text' idField='id' colorField='color'>
      </ResourceDirective>
      <ResourceDirective field='TaskId' title='Category' name='Categories' allowMultiple={true} dataSource={categoryData} textField='text' idField='id' colorField='color'>
      </ResourceDirective>
    </ResourcesDirective>
    <Inject services={[Week, Month, Agenda]}/>
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
{% endraw %}