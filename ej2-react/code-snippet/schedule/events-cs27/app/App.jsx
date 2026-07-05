import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

function App() {
    const scheduleObj = React.useRef(null);
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
        } else {
            args.element.style.backgroundColor = categoryColor;
        }
    }

    return (
        <ScheduleComponent
            width='100%'
            height='550px'
            ref={scheduleObj}
            selectedDate={new Date(2026, 4, 20)}
            eventSettings={eventSettings}
            eventRendered={onEventRendered}
        >
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
    );
}

export default App;
