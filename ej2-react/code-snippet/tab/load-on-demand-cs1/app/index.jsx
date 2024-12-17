import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState } from 'react';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { ScheduleComponent, ViewsDirective, ViewDirective, Inject, Day } from '@syncfusion/ej2-react-schedule';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';

const ReactApp = () => {

  const [headerText] = useState([{ text: "Calendar" }, { text: "Schedule" }]);


  const calendarContent = () => {
    return (
      <div><CalendarComponent></CalendarComponent></div>
    );
  };

  const scheduleContent = () => {
    return (
      <ScheduleComponent width='100%' height='450px'>
        <ViewsDirective>
          <ViewDirective option='Day' />
          <ViewDirective option='Week' />
          <ViewDirective option='WorkWeek' />
          <ViewDirective option='Month' />
        </ViewsDirective>
        <Inject services={[Day]} />
      </ScheduleComponent>
    );
  };


  return (
    <TabComponent>
      <TabItemsDirective>
        <TabItemDirective header={headerText[0]} content={calendarContent} />
        <TabItemDirective header={headerText[1]} content={scheduleContent} />
      </TabItemsDirective>
    </TabComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);
