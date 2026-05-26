import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

function App() {
	const data = [{
		Id: 1,
		Subject: 'Scrum Meeting',
		StartTime: new Date(2026, 4, 18, 10, 0),
		EndTime: new Date(2026, 4, 18, 12, 30),
		IsAllDay: false,
		RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;UNTIL=20260519T043000Z;',
	},
	{
		Id: 2,
		Subject: 'Scrum Meeting - Following Edited',
		StartTime: new Date(2026, 4, 20, 10, 0),
		EndTime: new Date(2026, 4, 20, 12, 30),
		RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;UNTIL=20260525T043000Z;',
		FollowingID: 1
	}];
	const eventSettings = { dataSource: data, editFollowingEvents: true };

	return (
		<ScheduleComponent
			height='550px'
			selectedDate={new Date(2026, 4, 18)}
			eventSettings={eventSettings}
		>
			<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
		</ScheduleComponent>
	);
};

export default App;
