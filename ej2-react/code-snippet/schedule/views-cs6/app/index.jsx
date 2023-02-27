
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, getWeekNumber, HeaderRowDirective, HeaderRowsDirective, TimelineMonth, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { Internationalization, extend } from '@syncfusion/ej2-base';
function App() {
    const data = extend([], scheduleData, null, true);
    const instance = new Internationalization();
    function getYearDetails(value) {
        return 'Year: ' + instance.formatDate(value.date, { skeleton: 'y' });
    }
    function getMonthDetails(value) {
        return 'Month: ' + instance.formatDate(value.date, { skeleton: 'M' });
    }
    function getWeekDetails(value) {
        return 'Week ' + getWeekNumber(value.date);
        ;
    }
    function yearTemplate(props) {
        return (<span className="year">{getYearDetails(props)}</span>);
    }
    function monthTemplate(props) {
        return (<span className="month">{getMonthDetails(props)}</span>);
    }
    function weekTemplate(props) {
        return (<span className="week">{getWeekDetails(props)}</span>);
    }
    return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 0, 1)} eventSettings={{ dataSource: data }}>
    <HeaderRowsDirective>
      <HeaderRowDirective option='Year' template={yearTemplate}/>
      <HeaderRowDirective option='Month' template={monthTemplate}/>
      <HeaderRowDirective option='Week' template={weekTemplate}/>
      <HeaderRowDirective option='Date'/>
    </HeaderRowsDirective>
    <ViewsDirective>
      <ViewDirective option='TimelineMonth'/>
    </ViewsDirective>
    <Inject services={[TimelineMonth]}/>
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
