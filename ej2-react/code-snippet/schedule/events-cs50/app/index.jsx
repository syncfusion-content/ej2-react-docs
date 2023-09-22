import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, TimelineMonth, Inject } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

const App = () => {
  const dataManager = new DataManager({
    url: 'https://services.syncfusion.com/react/production/api/VirtualEventData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  });
  const eventSettings = { dataSource: dataManager }
  const group = { resources: ['Resources'] };

  const generateResourceData = (startId, endId, text) => {
    let data = [];
    let colors = [
      '#ff8787', '#9775fa', '#748ffc', '#3bc9db', '#69db7c',
      '#fdd835', '#748ffc', '#9775fa', '#df5286', '#7fa900',
      '#fec200', '#5978ee', '#00bdae', '#ea80fc'
    ];
    for (let a = startId; a <= endId; a++) {
      let n = Math.floor(Math.random() * colors.length);
      data.push({
        Id: a,
        Text: text + ' ' + a,
        Color: colors[n]
      });
    }
    return data;
  }
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2023, 3, 1)} eventSettings={
    eventSettings} group={group} readonly={true}>
    <ResourcesDirective>
      <ResourceDirective field='ResourceId' title='Resource' name='Resources' dataSource={generateResourceData(1, 1000, 'Resource')} textField='Text' idField='Id' colorField='Color'>
      </ResourceDirective>
    </ResourcesDirective>
    <ViewsDirective>
      <ViewDirective option='TimelineMonth' enableLazyLoading={true} isSelected={true} />
=    </ViewsDirective>
    <Inject services={[TimelineMonth]} />
  </ScheduleComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
