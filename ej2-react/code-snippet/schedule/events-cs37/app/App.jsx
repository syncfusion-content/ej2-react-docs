import * as React from 'react';
import { ScheduleComponent, Day, Week, TimelineViews, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

function App() {
	const eventSettings = { dataSource: scheduleData, enableTooltip: true }

	return (
		<ScheduleComponent
			width='100%'
			height='500px'
			selectedDate={new Date(2026, 4, 20)}
			eventSettings={eventSettings}
		>
			<Inject services={[Day, Week, TimelineViews, Month, Agenda]} />
		</ScheduleComponent>
	);
}

export default App;
