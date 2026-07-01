import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Resize, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

function App() {
	const eventSettings = { dataSource: scheduleData }

	return (
		<ScheduleComponent
			height='550px'
			selectedDate={new Date(2026, 4, 20)}
			allowResizing={false}
			eventSettings={eventSettings}
		>
			<Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize]} />
		</ScheduleComponent>
	);
}

export default App;
