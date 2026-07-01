import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

function App() {
	const data = [{
		Id: 1,
		Subject: 'Paris',
		StartTime: new Date(2026, 4, 17, 10, 0),
		EndTime: new Date(2026, 4, 17, 12, 30),
		IsAllDay: false,
		RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=8',
		RecurrenceException: '20260518T043000Z,20260520T043000Z,20260521T043000Z'
	}];
	const eventSettings = { dataSource: data };

	return (
	<ScheduleComponent
		height='550px'
		selectedDate={new Date(2026, 4, 17)}
		eventSettings={eventSettings}
	>
		<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
	</ScheduleComponent>
	);
}

export default App;
