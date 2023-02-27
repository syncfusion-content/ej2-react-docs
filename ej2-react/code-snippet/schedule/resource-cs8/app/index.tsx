


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Week, Month, Agenda, ScheduleComponent, ViewsDirective, ViewDirective,
  ResourcesDirective, ResourceDirective, Inject
} from '@syncfusion/ej2-react-schedule';
import { resourceData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  const data: Object[] = extend([], resourceData, null, true) as Object[];
  const resourceData: Object[] = [
    { text: 'Alice', id: 1, color: '#1aaa55' },
    { text: 'Smith', id: 2, color: '#7fa900' }
  ];
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 3, 1)} eventSettings={{ dataSource: data }}
    group={{ byDate: true, resources: ['Owners'] }} >
    <ResourcesDirective>
      <ResourceDirective field='OwnerId' title='Owner' name='Owners' allowMultiple={true}
        dataSource={resourceData} textField='text' idField='id' colorField='color'>
      </ResourceDirective>
    </ResourcesDirective>
    <ViewsDirective>
      <ViewDirective option='Week' />
      <ViewDirective option='Month' />
      <ViewDirective option='Agenda' />
    </ViewsDirective>
    <Inject services={[Week, Month, Agenda]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



