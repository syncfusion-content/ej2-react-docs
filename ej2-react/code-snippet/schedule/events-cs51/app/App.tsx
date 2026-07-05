import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop, Inject, type EventSettingsModel } from '@syncfusion/ej2-react-schedule';

function App() {
	const eventsData: Record<string, any>[] = [
		{
			Id: 1,
			Subject: 'Annual Conference',
			StartTime: new Date(2026, 4, 20, 10, 0, 0),
			EndTime: new Date(2026, 4, 20, 11, 0, 0)
		},
		{
			Id: 2,
			Subject: 'Tech Symposium',
			StartTime: new Date(2026, 4, 20, 10, 30, 0),
			EndTime: new Date(2026, 4, 20, 11, 30, 0)
		},
		{
			Id: 3,
			Subject: 'Client Meeting',
			StartTime: new Date(2026, 4, 18, 12, 0, 0),
			EndTime: new Date(2026, 4, 18, 14, 0, 0),
			RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5'
		},
		{
			Id: 4,
			Subject: 'Project Review',
			StartTime: new Date(2026, 4, 22, 11, 0, 0),
			EndTime: new Date(2026, 4, 22, 14, 0, 0)
		},
		{
			Id: 5,
			Subject: 'Strategy Session',
			StartTime: new Date(2026, 4, 23, 9, 30, 0),
			EndTime: new Date(2026, 4, 23, 10, 0, 0)
		},
		{
			Id: 6,
			Subject: 'Board Meeting',
			StartTime: new Date(2026, 4, 23, 9, 30, 0),
			EndTime: new Date(2026, 4, 23, 11, 0, 0)
		}
	];
	const eventSettings: EventSettingsModel = { dataSource: eventsData }

	return (
		<ScheduleComponent
			height='550px'
			selectedDate={new Date(2026, 4, 23)}
			allowOverlap={false}
			eventSettings={eventSettings}
		>
			<Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
		</ScheduleComponent>
	);
}

export default App;
