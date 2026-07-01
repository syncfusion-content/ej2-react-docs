import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

function App() {
	const data = [{
		TravelId: 2,
		TravelSummary: 'Paris',
		DepartureTime: new Date(2026, 4, 18, 10, 0),
		ArrivalTime: new Date(2026, 4, 18, 12, 30),
		FullDay: false,
		Source: 'London',
		Comments: 'Summer vacation planned for outstation.',
		Origin: 'Asia/Yekaterinburg',
		Destination: 'Asia/Yekaterinburg'
	}, {
		TravelId: 1,
		TravelSummary: "Tokyo",
		DepartureTime: new Date(2026, 4, 19, 10, 0, 0),
		ArrivalTime: new Date(2026, 4, 19, 12, 30, 0),
		FullDay: false,
		Source: "Beijing",
		Comments: "Conference on emerging technologies.",
		Origin: "Asia/Yekaterinburg",
		Destination: "Asia/Yekaterinburg",
		IsDisabled: true
	}];
	const fieldsData = {
		id: 'TravelId',
		subject: { name: 'TravelSummary' },
		isAllDay: { name: 'FullDay' },
		location: { name: 'Source' },
		description: { name: 'Comments' },
		startTime: { name: 'DepartureTime' },
		endTime: { name: 'ArrivalTime' },
		startTimezone: { name: 'Origin' },
		endTimezone: { name: 'Destination' },
		isBlock: 'IsDisabled',
	}
	const eventSettings = { dataSource: data, fields: fieldsData }

	return (
		<ScheduleComponent
			height='550px'
			selectedDate={new Date(2026, 4, 18)}
			eventSettings={eventSettings}
		>
			<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
		</ScheduleComponent>);
};

export default App;
