import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ActionEventArgs, Inject, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

const App = () => {
    const eventSettings: EventSettingsModel = { dataSource: scheduleData }

    const onActionBegin = (args: ActionEventArgs) => {
        let weekEnds: number[] = [0, 6];
        if (args.requestType == 'eventCreate' && weekEnds.indexOf((args.data[0].StartTime).getDay()) >= 0) {
            args.cancel = true;
        }
    }
    return (
        <ScheduleComponent height='550px' width='100%' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} actionBegin={onActionBegin.bind(this)}>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
    )

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


