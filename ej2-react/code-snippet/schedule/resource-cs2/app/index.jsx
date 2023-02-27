
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Week, Month, Agenda, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { resourceData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
    const data = extend([], resourceData, null, true);
    const ownerData = [
        { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
        { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
        { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }
    ];
    return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 3, 1)} eventSettings={{ dataSource: data }}>
    <ViewsDirective>
      <ViewDirective option='Week'/>
      <ViewDirective option='Month'/>
      <ViewDirective option='Agenda'/>
    </ViewsDirective>
    <ResourcesDirective>
      <ResourceDirective field='OwnerId' title='Owner' name='Owners' allowMultiple={true} dataSource={ownerData} textField='OwnerText' idField='Id' colorField='OwnerColor'>
      </ResourceDirective>
    </ResourcesDirective>
    <Inject services={[Week, Month, Agenda]}/>
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
