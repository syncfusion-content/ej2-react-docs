import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, TimelineYear, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { resourceData } from './datasource';
const App = () => {
  const eventSettings = { dataSource: resourceData };
  const group = { resources: ['Projects', 'Categories'] };

  const ownerData = [
    { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
    { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
    { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }
  ];
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 3, 1)} eventSettings={eventSettings}>
    <ViewsDirective>
      <ViewDirective option='TimelineYear' displayName='Horizontal Timeline Year' isSelected={true} />
      <ViewDirective option='TimelineYear' displayName='Vertical Timeline Year' orientation='Vertical' group={group} />
    </ViewsDirective>
    <ResourcesDirective>
      <ResourceDirective field='OwnerId' title='Owner' name='Owners' allowMultiple={true} dataSource={ownerData} textField='OwnerText' idField='Id' colorField='OwnerColor'>
      </ResourceDirective>
    </ResourcesDirective>
    <Inject services={[TimelineYear]} />
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
