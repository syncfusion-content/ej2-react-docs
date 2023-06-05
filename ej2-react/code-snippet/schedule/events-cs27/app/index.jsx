import { useRef } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
const App = () => {
    const scheduleObj = useRef(null);
    const eventSettings = { dataSource: scheduleData }

    const onEventRendered = (args) => {
        applyCategoryColor(args, scheduleObj.current.currentView);
    }
    const applyCategoryColor = (args, currentView) => {
        let categoryColor = args.data.CategoryColor;
        if (!args.element || !categoryColor) {
            return;
        }
        if (currentView === 'Agenda') {
            args.element.firstChild.style.borderLeftColor = categoryColor;
        }
        else {
            args.element.style.backgroundColor = categoryColor;
        }
    }
    return (<ScheduleComponent width='100%' height='550px' ref={scheduleObj} selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} eventRendered={onEventRendered}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>);
}
    ;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
