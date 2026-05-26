import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, type EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { blockData } from './datasource';

function App() {
	const eventSettings: EventSettingsModel = { dataSource: blockData }

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
