import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

function App() {
	const data = [{
		Id: 1,
		Subject: 'Paris',
		StartTime: new Date(2026, 4, 11, 10, 0),
		EndTime: new Date(2026, 4, 13, 12, 30),
		IsAllDay: false
	}, {
		Id: 2,
		Subject: 'London',
		StartTime: new Date(2026, 4, 14, 12, 0),
		EndTime: new Date(2026, 4, 16, 13, 0),
		IsAllDay: false
	}];
	const eventSettings = { dataSource: data, spannedEventPlacement: 'TimeSlot' }

	return (
		<ScheduleComponent 
			height='550px'
			selectedDate={new Date(2026, 4, 15)}
			eventSettings={eventSettings}
		>
			<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
		</ScheduleComponent>
	);
};

export default App;
