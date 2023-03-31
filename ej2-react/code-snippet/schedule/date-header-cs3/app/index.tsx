

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, View, Day, Week, WorkWeek, Month, RenderCellEventArgs, Inject, TimelineViews } from '@syncfusion/ej2-react-schedule';
import { extend, Internationalization } from '@syncfusion/ej2-base';
function App() {
  const instance: Internationalization = new Internationalization();

  function getDateRange(startDate: Date, endDate: Date): string {
    return instance.formatDate(startDate, { skeleton: 'yMd' }) + ' - ' + instance.formatDate(endDate, { skeleton: 'yMd' });
  }
  function dateRangeTemplate(props): JSX.Element {
    return (<div>{getDateRange(props.startDate, props.endDate)}</div>);
  }
  return (
    <ScheduleComponent width='100%' height='550px'
      dateRangeTemplate={dateRangeTemplate.bind(this)}>
      <ViewsDirective>
        <ViewDirective option='Day' />
        <ViewDirective option='Week' />
        <ViewDirective option='WorkWeek' />
        <ViewDirective option='TimelineWeek' />
      </ViewsDirective>
      <Inject services={[Day, Week, WorkWeek, TimelineViews]} />
    </ScheduleComponent>
  )
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


