{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, Month, Year, Resize, DragAndDrop, Inject, ResourcesDirective, ResourceDirective, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { resourceData, timelineResourceData } from './datasource';
function App() {
    const data = extend([], resourceData.concat(timelineResourceData), null, true);
    const projectData = [
        { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
        { text: 'PROJECT 2', id: 2, color: '#56ca85' },
        { text: 'PROJECT 3', id: 3, color: '#df5286' }
    ];
    const categoryData = [
        { text: 'Nancy', id: 1, groupId: 1, color: '#df5286' },
        { text: 'Steven', id: 2, groupId: 1, color: '#7fa900' },
        { text: 'Robert', id: 3, groupId: 2, color: '#ea7a57' },
        { text: 'Smith', id: 4, groupId: 2, color: '#5978ee' },
        { text: 'Micheal', id: 5, groupId: 3, color: '#df5286' },
        { text: 'Root', id: 6, groupId: 3, color: '#00bdae' }
    ];
    const group = { resources: ['Projects', 'Categories'] };
    return (<ScheduleComponent width='100%' height='650px' id='schedule' selectedDate={new Date(2018, 3, 4)} group={group} enableAdaptiveUI={true} currentView='Month' eventSettings={{ dataSource: data }}>
      <ViewsDirective>
        <ViewDirective option='Day'/>
        <ViewDirective option='Week'/>
        <ViewDirective option='Month'/>
      </ViewsDirective>
      <ResourcesDirective>
        <ResourceDirective field='ProjectId' title='Choose Project' name='Projects' allowMultiple={false} dataSource={projectData} textField='text' idField='id' colorField='color'>
        </ResourceDirective>
        <ResourceDirective field='TaskId' title='Category' name='Categories' allowMultiple={true} dataSource={categoryData} textField='text' idField='id' groupIDField='groupId' colorField='color'>
        </ResourceDirective>
      </ResourcesDirective>
      <Inject services={[Day, Week, Month, Year, Resize, DragAndDrop]}/>
    </ScheduleComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
{% endraw %}