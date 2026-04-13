import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, getWeekNumber, HeaderRowDirective, HeaderRowsDirective, TimelineMonth, Inject,
  ViewsDirective, ViewDirective, CellTemplateArgs
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { Internationalization } from '@syncfusion/ej2-base';

const App = () => {
  const eventSettings = { dataSource: scheduleData }
  const instance: Internationalization = new Internationalization();
  const getYearDetails = (value: CellTemplateArgs) => {
    return 'Year: ' + instance.formatDate((value as CellTemplateArgs).date, { skeleton: 'y' });
  }
  const getMonthDetails = (value: CellTemplateArgs) => {
    return 'Month: ' + instance.formatDate((value as CellTemplateArgs).date, { skeleton: 'M' });
  }
  const getWeekDetails = (value: CellTemplateArgs) => {
    return 'Week ' + getWeekNumber((value as CellTemplateArgs).date);;
  }
  const yearTemplate = (props): JSX.Element => {
    return (<span className="year">{getYearDetails(props)}</span>);
  }
  const monthTemplate = (props): JSX.Element => {
    return (<span className="month">{getMonthDetails(props)}</span>);
  }
  const weekTemplate = (props): JSX.Element => {
    return (<span className="week">{getWeekDetails(props)}</span>);
  }
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 0, 1)}
    eventSettings={eventSettings}>
    <HeaderRowsDirective>
      <HeaderRowDirective option='Year' template={yearTemplate} />
      <HeaderRowDirective option='Month' template={monthTemplate} />
      <HeaderRowDirective option='Week' template={weekTemplate} />
      <HeaderRowDirective option='Date' />
    </HeaderRowsDirective>
    <ViewsDirective>
      <ViewDirective option='TimelineMonth' />
    </ViewsDirective>
    <Inject services={[TimelineMonth]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


