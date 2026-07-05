import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, type EventSettingsModel } from '@syncfusion/ej2-react-schedule';

function App() {
	const comparerFun = (args: Record<string, any>[]) => {
		args.sort((event1: Record<string, any>, event2: Record<string, any>) => event1.RankId.localeCompare(event2.RankId, undefined, { numeric: true }));
		return args;
	}
	const data: object[] = [{
		Id: 1,
		Subject: 'Rank 1',
		StartTime: new Date(2026, 4, 20, 10, 0),
		EndTime: new Date(2026, 4, 20, 11, 30),
		IsAllDay: false,
		RankId: '1'
	}, {
		Id: 2,
		Subject: 'Rank 3',
		StartTime: new Date(2026, 4, 20, 10, 30),
		EndTime: new Date(2026, 4, 20, 12, 30),
		IsAllDay: false,
		RankId: '3'
	}, {
		Id: 3,
		Subject: 'Rank 6',
		StartTime: new Date(2026, 4, 20, 7, 0),
		EndTime: new Date(2026, 4, 20, 14, 30),
		IsAllDay: false,
		RankId: '6'
	}, {
		Id: 4,
		Subject: 'Rank 9',
		StartTime: new Date(2026, 4, 20, 11, 0),
		EndTime: new Date(2026, 4, 20, 15, 30),
		IsAllDay: false,
		RankId: '9'
	}];
	const eventSettings: EventSettingsModel = { dataSource: data, sortComparer: comparerFun }
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
