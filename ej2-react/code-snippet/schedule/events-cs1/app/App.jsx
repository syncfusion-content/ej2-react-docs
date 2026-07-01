import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

function App() {
	const data = [{
		Id: 1,
		Subject: 'Paris',
		StartTime: new Date(2026, 4, 18, 10, 0),
		EndTime: new Date(2026, 4, 18, 12, 30),
	}];
	const eventSettings = { dataSource: data }

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