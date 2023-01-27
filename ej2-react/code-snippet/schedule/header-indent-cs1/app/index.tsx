{% raw %}



import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  Week, TimelineViews, TimelineMonth, Day, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective,
  ResourceDirective, Inject
} from '@syncfusion/ej2-react-schedule';
import { resourceData } from './datasource';

function App() {
  const ownerData: object[] = [
    { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
    { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
    { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }
  ];

  function headerIndentTemplate() {
    return (
      <div className='e-resource-text'>
        <div className="text">Resources</div></div>
    );
  }

  return (<ScheduleComponent width='100%' height='550px' currentView='Week' headerIndentTemplate={headerIndentTemplate} selectedDate={new Date(2018, 3, 1)} eventSettings={{ dataSource: resourceData }} group={{ resources: ['Owners'] }}>
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='TimelineWeek' />
      <ViewDirective option='TimelineMonth' />
    </ViewsDirective>
    <ResourcesDirective>
      <ResourceDirective field='OwnerId' title='Owner' name='Owners' allowMultiple={true} dataSource={ownerData} textField='OwnerText' idField='Id' colorField='OwnerColor'>
      </ResourceDirective>
    </ResourcesDirective>
    <Inject services={[Day, Week, TimelineViews, TimelineMonth]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



{% endraw %}