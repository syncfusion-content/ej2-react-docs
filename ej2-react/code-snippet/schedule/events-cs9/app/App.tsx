import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, type EventSettingsModel } from '@syncfusion/ej2-react-schedule';

function App() {
	const data: object[] = [{
		TravelId: 2,
		DepartureTime: new Date(2026, 4, 18, 10, 0),
		ArrivalTime: new Date(2026, 4, 18, 12, 30),
		Source: 'London',
		Comments: 'Summer vacation planned for outstation.'
	}];
	const fieldsData = {
		id: 'TravelId',
		subject: { name: 'TravelSummary', title: 'Summary', default: 'Add Summary' },
		location: { name: 'Source', default: 'USA' },
		description: { name: 'Comments' },
		startTime: { name: 'DepartureTime' },
		endTime: { name: 'ArrivalTime' }
	}
	const eventSettings: EventSettingsModel = { dataSource: data, fields: fieldsData }

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
