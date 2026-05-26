import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, type EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { readOnlyData } from './datasource';

function App() {
	const eventSettings: EventSettingsModel = { dataSource: readOnlyData }

	return (
		<ScheduleComponent
			height='550px'
			selectedDate={new Date(2026, 4, 20)}
			eventSettings={eventSettings}
		>
			<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
		</ScheduleComponent>
	);
}

export default App;
