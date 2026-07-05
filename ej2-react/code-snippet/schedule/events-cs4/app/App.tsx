import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, type EventSettingsModel } from '@syncfusion/ej2-react-schedule';

function App() {
	const data = [{
		Id: 2,
		Subject: 'Paris',
		StartTime: new Date(2026, 4, 18, 10, 0),
		EndTime: new Date(2026, 4, 18, 12, 30),
		IsAllDay: false,
		RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5',
	}];
	const eventSettings: EventSettingsModel = { dataSource: data };

	return (
		<ScheduleComponent
			height='550px'
			selectedDate={new Date(2026, 4, 20)}
			eventSettings={eventSettings}
		>
			<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
		</ScheduleComponent>
	);

};

export default App;
