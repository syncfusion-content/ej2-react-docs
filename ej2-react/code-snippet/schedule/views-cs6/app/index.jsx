import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, getWeekNumber, HeaderRowDirective, HeaderRowsDirective, TimelineMonth, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { Internationalization } from '@syncfusion/ej2-base';
const App = () => {
    const eventSettings = { dataSource: scheduleData }
    const instance = new Internationalization();
    const getYearDetails = (value) => {
        return 'Year: ' + instance.formatDate(value.date, { skeleton: 'y' });
    }
    const getMonthDetails = (value) => {
        return 'Month: ' + instance.formatDate(value.date, { skeleton: 'M' });
    }
    const getWeekDetails = (value) => {
        return 'Week ' + getWeekNumber(value.date);
        ;
    }
    const yearTemplate = (props) => {
        return (<span className="year">{getYearDetails(props)}</span>);
    }
    const monthTemplate = (props) => {
        return (<span className="month">{getMonthDetails(props)}</span>);
    }
    const weekTemplate = (props) => {
        return (<span className="week">{getWeekDetails(props)}</span>);
    }
    return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 0, 1)} eventSettings={eventSettings}>
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
    </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
