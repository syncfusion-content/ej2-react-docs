import * as React from 'react';
import { ScheduleComponent, Day, Week, TimelineViews, Month, Agenda, ViewsDirective, ViewDirective, Inject } from '@syncfusion/ej2-react-schedule';

function App() {
	const data = [{
		Id: 1,
		Subject: 'Explosion of Betelgeuse Star',
		StartTime: new Date(2026, 4, 20, 9, 30),
		EndTime: new Date(2026, 4, 20, 11, 0),
		RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5',
		IsBlock: true
	}, {
		Id: 2,
		Subject: 'Thule Air Crash Report',
		StartTime: new Date(2026, 4, 20, 12, 0),
		EndTime: new Date(2026, 4, 20, 14, 0)
	}];
	const eventSettings = { dataSource: data }

	return (
		<ScheduleComponent
			height='550px'
			selectedDate={new Date(2026, 4, 20)}
			eventSettings={eventSettings}
		>
			<ViewsDirective>
				<ViewDirective option='Day' />
				<ViewDirective option='Week' />
				<ViewDirective option='TimelineWeek' />
				<ViewDirective option='Month' />
				<ViewDirective option='Agenda' />
			</ViewsDirective>
			<Inject services={[Day, Week, TimelineViews, Month, Agenda]} />
		</ScheduleComponent>
	);
}

export default App;
